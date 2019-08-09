USE totaliza;

SELECT 	e.id,
		pe.id,
        IF (co.id IS NOT NULL, co.sigla, p.sigla),
        (SELECT SUM(v2.quantidade_votos) 
        FROM votacao AS v2 
        INNER JOIN candidato AS c2 ON v2.candidato_id = c2.id 
        INNER JOIN partido_eleicao AS pe2 ON c2.partido_eleicao_id = pe2.id 
        INNER JOIN partido AS p2 ON pe2.partido_id = p2.id 
        LEFT JOIN partido_coligacao AS pc2 ON pc2.partido_id = p2.id 
        LEFT JOIN coligacao AS co2 ON co2.id = pc2.coligacao_id 
        LEFT JOIN eleicao AS e2 ON e2.id = pe2.eleicao_id 
        WHERE e2.id = e.id AND v2.candidato_id IS NOT NULL AND IF (co2.id IS NOT NULL, co2.id = co.id, pe.id = pe2.id)) AS votos_nominais,
        (SELECT SUM(v2.quantidade_votos) 
        FROM votacao AS v2 
        INNER JOIN partido_eleicao AS pe2 ON v2.partido_eleicao_id = pe2.id 
        INNER JOIN partido AS p2 ON pe2.partido_id = p2.id 
        LEFT JOIN partido_coligacao AS pc2 ON pc2.partido_id = p2.id 
        LEFT JOIN coligacao AS co2 ON co2.id = pc2.coligacao_id 
        LEFT JOIN eleicao AS e2 ON e2.id = pe2.eleicao_id 
        WHERE e2.id = e.id AND v2.candidato_id IS NULL AND IF (co2.id IS NOT NULL, co2.id = co.id, pe.id = pe2.id)) AS votos_legenda
FROM votacao AS v
LEFT JOIN candidato AS c ON v.candidato_id = c.id
LEFT JOIN partido_eleicao AS pe ON v.partido_eleicao_id = pe.id OR c.partido_eleicao_id = pe.id
LEFT JOIN partido AS p ON pe.partido_id = p.id
LEFT JOIN partido_coligacao AS pc ON pc.partido_id = p.id
LEFT JOIN coligacao AS co ON co.id = pc.coligacao_id
LEFT JOIN eleicao AS e ON pe.eleicao_id = e.id 
WHERE e.id = 1
GROUP BY e.id, co.id






