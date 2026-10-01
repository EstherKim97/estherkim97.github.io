---
title: GLP1-Sentinel
summary: A signal detection pipeline over 20 years of raw FDA adverse event reports that reproduces known GLP-1 safety signals.
group: Regulatory & safety intelligence
tracks: [Health Data Science, Applied AI]
tags: [Solo, Pharmacovigilance]
year: "2026"
period: April 2026
context: Personal project
team: Solo
role: Data engineering, statistics and domain design
stack: [Python, pandas, Parquet, Plotly, FAERS, ROR, PRR, IC]
links:
  - label: GitHub
    url: https://github.com/EstherKim97/GLP1-Sentinel
  - label: Interactive report
    url: https://htmlpreview.github.io/?https://github.com/EstherKim97/GLP1-Sentinel/blob/main/docs/eda_report.html
featured: 4
cover: /covers/glp1-sentinel.png
order: 2
stats:
  - value: "20.9M"
    label: FAERS reports, 2005 Q2 to 2024 Q3
  - value: "2,665"
    label: Significant signals out of 10,131 drug–event pairs
  - value: "241"
    label: Automated tests passing
---

## Problem

GLP-1 prescriptions have grown sharply while FDA surveillance staff has shrunk. I built a pipeline that detects safety signals directly from 20 years of raw FDA Adverse Event Reporting System (FAERS) data.

## Approach

The pipeline processes all 20,904,555 reports from 2005 Q2 to 2024 Q3. Of these, 288,173 list a GLP-1 drug as the primary suspect. A drug–event pair counts as a signal when at least two of ROR, PRR and IC agree and there are at least three reports. Duplicates are removed with FDA's recommended two-step method instead of CASEVERSION alone.

## What broke and what I changed

| What happened | What I changed |
|---|---|
| A trailing `$` delimiter in old AERS files shifted columns, silently dropping 2005–2012 records from 80,524 per quarter to 0. | Checked the raw bytes and fixed it with one line: `index_col=False`. |
| The 2012 Q3 quarter was never released. | Handled the missing quarter explicitly. |
| Computing background rates from GLP-1 reports alone made every reaction look like a signal. | Pre-aggregated all 67 million REAC rows (38,457 preferred terms) as the background. |
| The run crashed at 2010 Q4 on 7.8 GB of RAM. | Streamed quarter by quarter, peaking at about 2 GB. |

## Results

2,665 significant signals out of 10,131 drug–event pairs, with 241 automated tests passing. The pipeline reproduces known signals: liraglutide and thyroid C-cell hyperplasia (a boxed warning) and semaglutide and pancreatitis (a 2024 FDA signal).

## Limits and next

FAERS is spontaneous reporting, so signals show disproportionate reporting, not incidence or causation. No Bonferroni correction is applied, which matches published GLP-1 FAERS studies; the output keeps the counts needed to correct downstream. Demographics are often missing (age group 83.7%, weight 79.7%), which does not affect the reaction-count signals but limits subgroup analysis.
