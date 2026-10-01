---
title: Clinical Trial Eligibility Extraction
summary: An NLP pipeline that pulls eligibility criteria from ClinicalTrials.gov so protocol benchmarking takes minutes instead of weeks.
group: Clinical AI
tracks: [Applied AI]
tags: [Solo, Clinical NLP]
year: "2025"
period: December 2025
context: Personal project
team: Solo
role: Design and build
stack: [Python, ClinicalTrials.gov API v2, Regex NLP, pandas]
links:
  - label: GitHub
    url: https://github.com/EstherKim97/Clinical-Trial-Eligibility-Criteria-Extraction
cover: /covers/clinical-trial-eligibility.png
order: 4
stats:
  - value: "200+"
    label: Medical entities extracted from 40 trials
  - value: "18"
    label: Unique biomarkers found
---

## Problem

Clinical teams spend weeks benchmarking eligibility criteria across competitor trials by hand.

## What it does

The pipeline collects trials from the ClinicalTrials.gov API, cleans the criteria text and extracts entities in five categories. Across 40 oncology trials it found more than 200 entities, including 18 biomarkers (EGFR, PD-L1, BRAF V600E, HER2, MSI-high), drugs such as pembrolizumab and nivolumab, and thresholds such as serum creatinine ≤1.5.

## What broke and what I changed

SciBERT and spaCy models failed on Python 3.12, so I switched to regex patterns. Extraction became predictable, at the cost of maintaining the patterns.

## Limits and next

Rare biomarkers are missed unless a pattern is added, and the set leans toward lung cancer. Next would be entity recognition from gene databases or an LLM, and a larger trial set.
