SELECT v.*,
(SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) AS votos_nominais,
(SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL) AS votos_legenda
FROM votacao AS v
LEFT JOIN candidato AS c ON v.candidato_id = c.id
LEFT JOIN partido_eleicao AS pe ON pe.id = v.partido_eleicao_id
LEFT JOIN eleicao AS e ON pe.eleicao_id = e.id;