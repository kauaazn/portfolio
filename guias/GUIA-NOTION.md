# Guia de Notion para o roadmap

**Regra de ouro:** fez algo, anota. Exemplo no LeetCode Log: Problema = Two Sum, Resultado = Com dica, Padrão = Hashing, Aprendizado = "travei em como achar o complemento; resolvi com HashMap".

Crie uma página raiz **"Engenheiro de Software 2026"** com 5 bancos de dados (Database → Table). Dica: digite `/table` e escolha "Table view (inline)".

## Bancos

### 1. Roadmap (semanas)
| Propriedade | Tipo |
|---|---|
| Nome | Title (ex.: "S01 Como computadores executam programas") |
| Semana | Number |
| Fase | Select (Fundamentos, Java, Backend e Bancos, Testes e Qualidade, Arquitetura, Projeto e Carreira) |
| Status | Status (Not started / In progress / Done) |
| Tópicos | Relation → Anotações |

Preencha com as 24 semanas de `roadmap-data.js`. Visões: **Board** por Status e **Timeline** por Semana.

### 2. Anotações (seu "segundo cérebro")
Nome, Tópico (Select: Java, SQL, Spring, Testes, Arquitetura, Sistemas distribuídos, DSA), Semana (Relation), Resumo, Link da fonte, Revisado (Checkbox).
Cada nota segue o template: **O que é → Por que existe → Exemplo em Java → Armadilhas → Perguntas de entrevista**.

### 3. LeetCode Log
Problema (Title), Link (URL), Dificuldade (Select), Padrão (Multi-select: Hashing, Two Pointers, Sliding Window, Stack, Binary Search, Trees, Graphs, DP…), Resultado (Select: Sozinho / Com dica / Vi a solução), Big O (Text), Data (Date), **Próxima revisão** (Formula: `dateAdd(prop("Data"), 3, "days")` — depois 7 e 30 dias), Aprendizado (Text).
Visão "Para revisar hoje": filtre Próxima revisão ≤ hoje e Resultado ≠ Sozinho.

### 4. Projetos
Nome, Fase, Status, GitHub (URL), Stack (Multi-select), Aprendizados, README em inglês (Checkbox).

### 5. Inglês
Palavra/Expressão (Title), Significado, Frase de exemplo, Contexto (Select: Entrevista, Código, Reunião), Revisado (Checkbox).

## Rotina semanal (30 min)
- **Domingo:** crie as tarefas da semana seguinte a partir do Roadmap; marque Status.
- **Diário:** 1 nota em Anotações + problemas no LeetCode Log + 5 palavras em Inglês.
- **Sexta:** revise o que está em "Para revisar hoje" e marque Done.

## Notion é só seu
O Notion fica por fora do site: é onde você registra o que fez e onde travou. Nada dele aparece no portfólio.

## Conectar o Notion ao Claude
Se quiser que eu crie esses bancos por você, conecte o Notion nos conectores do Claude e peça "crie a estrutura do guia no meu Notion".
