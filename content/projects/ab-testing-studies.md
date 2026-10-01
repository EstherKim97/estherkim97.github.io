---
title: A/B testing studies
summary: A simulation where the naive result reversed once measured on the full population, and a dashboard over more than 1.2 million sensor records.
group: Experimentation & analytics
tracks: [Health Data Science]
tags: [Solo, CUPED, Sequential testing]
year: "2025–26"
period: September 2025 and August 2026
context: Personal projects
team: Solo
role: Design, simulation, analysis and dashboards
stack: [CUPED, Sequential testing, Heterogeneous treatment effects, Streamlit]
links:
  - label: Match-score write-up
    url: https://estherkim97.github.io/Hiring-Platform/
  - label: match-score-ab-test on GitHub
    url: https://github.com/EstherKim97/match-score-ab-test
  - label: mhealth_abtesting on GitHub
    url: https://github.com/EstherKim97/mhealth_abtesting
cover: /covers/ab-testing-studies.png
order: 1
stats:
  - value: "6.4% → 14.4%"
    label: Naive comparison, which reversed to 19.1% → 11.6% on the full population
  - value: "1.2M+"
    label: Sensor records in the mHealth dashboard
---

## match-score-ab-test

Does showing job candidates their AI match score help them? Candidates, postings and match scores come from more than 150,000 real application records. Only the reaction to seeing a score was simulated, and how is documented in `src/simulate_behavior.py`.

Looking only at people who applied, the offer rate rose from 6.4% to 14.4%. That comparison is misleading: seeing the score changed who applied, and applications dropped 70%. Measured on the full population, the chance of landing any offer fell from 19.1% to 11.6%. CUPED made the selection effect visible, and a causal forest showed candidates with less traditional backgrounds were discouraged most.

Methods: candidate-level randomization with SRM checks, power analysis, CUPED, always-valid sequential testing, causal forest CATE.

## mhealth_abtesting

A Streamlit dashboard built on more than 1.2 million readings from the UCI mHealth sensor dataset (10 subjects, 13 activities, 24 channels). It runs a stratified quasi-randomized A/B assignment, Welch's t-test, Cohen's d and 95% confidence intervals. The intervention is simulated on observational data, so the effects are illustrative, not clinical outcomes.
