USE totaliza;

SELECT 	e.id,
		pe.id,
        IF (co.id IS NOT NULL, co.sigla, p.sigla) as sigla,
        (SELECT SUM(v2.quantidade_votos) 
        FROM votacao AS v2 
        INNER JOIN candidato AS c2 ON v2.candidato_id = c2.id 
        INNER JOIN partido_eleicao AS pe2 ON c2.partido_eleicao_id = pe2.id 
        INNER JOIN partido AS p2 ON pe2.partido_id = p2.id 
        LEFT JOIN partido_coligacao AS pc2 ON pc2.partido_id = p2.id 
        LEFT JOIN coligacao AS co2 ON co2.id = pc2.coligacao_id 
        INNER JOIN eleicao AS e2 ON e2.id = pe2.eleicao_id 
        WHERE e2.id = e.id AND v2.candidato_id IS NOT NULL AND IF (co2.id IS NOT NULL, co2.id = co.id, pe.id = pe2.id)) AS votos_nominais,
        (SELECT SUM(v2.quantidade_votos) 
        FROM votacao AS v2 
        INNER JOIN partido_eleicao AS pe2 ON v2.partido_eleicao_id = pe2.id 
        INNER JOIN partido AS p2 ON pe2.partido_id = p2.id 
        LEFT JOIN partido_coligacao AS pc2 ON pc2.partido_id = p2.id 
        LEFT JOIN coligacao AS co2 ON co2.id = pc2.coligacao_id 
        INNER JOIN eleicao AS e2 ON e2.id = pe2.eleicao_id 
        WHERE e2.id = e.id AND v2.candidato_id IS NULL AND IF (co2.id IS NOT NULL, co2.id = co.id, pe.id = pe2.id)) AS votos_legenda
FROM votacao AS v
INNER JOIN candidato AS c ON v.candidato_id = c.id
INNER JOIN partido_eleicao AS pe ON IF (v.partido_eleicao_id IS NOT NULL, v.partido_eleicao_id = pe.id, c.partido_eleicao_id = pe.id)
INNER JOIN partido AS p ON pe.partido_id = p.id
LEFT JOIN partido_coligacao AS pc ON pc.partido_id = p.id
LEFT JOIN coligacao AS co ON co.id = pc.coligacao_id
INNER JOIN eleicao AS e ON pe.eleicao_id = e.id 
WHERE e.id = 1
GROUP BY e.id, co.id;

SELECT SUM(quantidade_votos) FROM votacao AS v
INNER JOIN candidato AS c ON v.candidato_id = c.id
INNER JOIN partido_eleicao AS pe ON c.partido_eleicao_id = pe.id
WHERE pe.eleicao_id = 1 AND pe.id = 1





