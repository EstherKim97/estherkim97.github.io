---
title: Medication adherence risk profiling
summary: Finds the patient groups most likely to stop taking their medication, so adherence programs know where to start. Logistic regression plus an R Shiny dashboard.
group: Experimentation & analytics
tracks: [Health Data Science]
tags: [Solo, R, Shiny]
year: "2026"
period: February 2026
context: Personal project
team: Solo
role: Analysis and dashboard
stack: [R, Shiny, Logistic regression]
links:
  - label: GitHub
    url: https://github.com/EstherKim97/Patient-Adherence
cover: /covers/patient-adherence.png
order: 2
stats: []
---

## Question

Which patient groups have the highest non-adherence rates, and should be reached first by adherence programs?

## Approach

I computed baseline adherence, ranked non-adherence by age, gender, condition, education, social support and access to care, and estimated odds ratios with logistic regression. The results feed a Shiny dashboard with KPIs, a prioritized targeting table and the odds-ratio drivers.

## Limits

The data are observational, so the odds ratios show associations, not causes. The project ranks who to target; it does not measure whether an intervention works.
