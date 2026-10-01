---
title: Rare Disease Phenotype Agent
summary: Only the first step uses an LLM, and it cannot name a disease. Everything after is lookup against curated data, so the ranking cannot be made up.
group: Clinical AI
tracks: [Applied AI]
tags: [Solo, Hackathon, Clinical NLP]
year: "2026"
period: July 2026, built in one day
context: Abridge × Anthropic × Lightspeed hackathon
team: Solo
role: Design, build and evaluation
stack: [Claude, Python, FastAPI, Human Phenotype Ontology, Orphanet, OMIM, phenopacket-store, ClinicalTrials.gov API]
links:
  - label: GitHub
    url: https://github.com/EstherKim97/Rare-agent
featured: 1
order: 1
stats:
  - value: "72.3%"
    label: Top-1 accuracy, 669 real patients, ranking stage alone
  - value: "91.2%"
    label: Top-3 accuracy, same set
  - value: "0 / 25"
    label: High-confidence rare disease calls on synthetic routine notes
stages:
  - name: Notes to standard terms
    text: Claude rewrites notes as medical terms. Disease names are blocked.
    by: LLM
  - name: Map to HPO codes
    text: Terms matched to the Human Phenotype Ontology.
    by: Lookup
  - name: Rank diseases
    text: Candidates ranked against curated annotations.
    by: Lookup
  - name: Tests, red flags, trials
    text: Recommendations pulled from curated data.
    by: Lookup
---

## Problem

A rare disease diagnosis often takes years. The clues are usually there, but they sit in notes from different specialties, and no single clinician sees them together.

## Approach

The key decision was where to let the language model act. In diagnosis, a confident wrong answer does more harm than no answer, so I limited the model to the one task it handles well: turning free-text notes into standard medical terms. It is not allowed to name a disease.

Stages 2 to 4 only query ontology and curated data. Because of that, they cannot produce a disease, test or trial that does not exist in those sources.

## What broke and what I changed

| What happened | What I changed |
|---|---|
| Terms were tracked by name, and an HPO version update broke the build. | Switched to permanent HPO IDs. |
| Using all 12,717 diseases overrated the ones with few annotations. | Kept the 8,213 diseases with 10 or more annotations. |
| Information-content weighting did nothing on small sets, but on the large set it moved the correct answer from 2nd to 1st. | Applied the weighting to the large set only. |
| When masking answers in test cases, I also hid the enzyme, which removed the most diagnostic line ("reduced α-galactosidase A activity"). | Mask only the disease name, so the test keeps what a real clinician would see. |

## Results

**Denominator:** 669 real patients from phenopacket-store. Top-1 is 72.3% and Top-3 is 91.2%. These scores measure Stage 3 (ranking) on its own, not the full pipeline from free-text notes.

Is the score real?

| Check | Value | What it shows |
|---|---|---|
| Baseline | 44.5% | Always guessing the most common disease. The real score must beat this. |
| Permutation | 0.1–4.0% | Phenotypes shuffled across diseases. Accuracy collapses, so the signal is in the mapping. |
| Leakage test | 49% | Share of each test case's terms found in the curated set. Near 100% would make the test circular. |
| Ablation | −3.7 pt | Removing the ontology ancestor walk. That part earns its place. |

Does it raise false alarms?

| Test | Value | Detail |
|---|---|---|
| Common primary-care findings | 0.075 | Far below the 0.55 threshold |
| Synthetic clinical notes | 0 / 25 | No high-confidence rare disease call |
| Automated tests | 18 | In the repository |

## Limits and next

The evaluation uses published case reports, which are cleaner and more complete than real clinical notes. The system is also weaker on atypical presentations, where the textbook features are missing. Late-onset cardiac Fabry presenting as polymyalgia rheumatica is ranked as a cardiomyopathy. Loeys-Dietz is often ranked as Marfan (140 of 235 cases), though both share the same gene panel, so the top-3 still orders the right test. The broad 8,213-disease tier is not benchmarked and gives rankings only, without test recommendations.
