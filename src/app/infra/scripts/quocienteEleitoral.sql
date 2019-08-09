USE totaliza;

SELECT 
	e.id,
    e.quantidade_vagas,
    e.votos_nulos,
    e.votos_brancos,
    e.votos_anulados,
	(SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) AS votos_nominais,
	(SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL) AS votos_legenda,
	((SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) + (SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL)) AS votos_validos,
    ceil((((SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) + (SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL)) / e.quantidade_vagas)) AS quociente_eleitoral,
    ROUND((ceil((((SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) + (SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL)) / e.quantidade_vagas)) / 10), 2) AS clausula_barreira   
FROM votacao AS v
LEFT JOIN candidato AS c ON v.candidato_id = c.id
LEFT JOIN partido_eleicao AS pe ON pe.id = v.partido_eleicao_id
INNER JOIN eleicao AS e ON pe.eleicao_id = e.id
WHERE e.id = 1
GROUP BY e.id

