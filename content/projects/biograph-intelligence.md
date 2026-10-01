---
title: BioGraph Intelligence
summary: From a PubMed search to extracted claims, support and conflict checks, research gaps and a knowledge graph, running on a local LLM.
group: Biomedical research & discovery
tracks: [Applied AI]
tags: [Solo, Local LLM]
year: "2026"
period: July 2026
context: Personal project
team: Solo
role: Design and build
stack: [Python, Streamlit, Ollama (local LLM), PubMed, Pydantic, PyVis]
links:
  - label: Live app
    url: https://knowledgegraph-intelligence.streamlit.app
  - label: GitHub
    url: https://github.com/EstherKim97/KnowledgeGraph
order: 6
stats: []
---

## What it does

BioGraph Intelligence runs a full evidence workflow on a local LLM: PubMed search, extraction of subject–relation–object claims, clustering evidence by theme, judging whether studies support or conflict, finding research gaps, and building a knowledge graph. It ends with a research brief and an evidence-grounded copilot.

## What broke and what I changed

| What happened | What I changed |
|---|---|
| Repeated calls to a paid LLM API used up the credits during development. | Moved the LLM layer to Ollama, running locally. |
| With 20 papers in one prompt, the local model often returned prose instead of JSON. | Extracted one paper at a time, with JSON validation and retries. |
| Streamlit reran the whole pipeline every time the copilot was used. | Kept papers, claims, themes and briefs in `st.session_state`. |

## Limits and next

Extraction uses abstracts, not full text. Evidence scoring does not yet weight sample size or study design, and there is no MeSH or UMLS normalization yet.
