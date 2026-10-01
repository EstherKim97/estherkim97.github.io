---
title: FDA Pathway Intelligence
summary: Scores 510(k), De Novo and PMA pathways from public FDA data, ranks predicate devices, and explains its evidence and uncertainty.
group: Regulatory & safety intelligence
tracks: [Applied AI]
tags: [Solo, Regulatory, Streamlit]
year: "2026"
period: March 2026
context: Solo project
team: Solo
role: Design, build and testing
stack: [Python, Streamlit, pandas, TF-IDF, Public FDA data]
links:
  - label: Live app
    url: https://fda-pathway-intelligence.streamlit.app
  - label: GitHub
    url: https://github.com/EstherKim97/FDA-Device-Digital-Health-Pathway-Intelligence
featured: 5
order: 3
stats:
  - value: "9"
    label: Example products with expected pathways defined in advance
  - value: "53%"
    label: De Novo score for a retinal AI device, matching its expected pathway
  - value: "9"
    label: Analysis tabs
---

## Problem

Choosing a regulatory pathway for a medical device means comparing it against past FDA decisions and similar devices. That evidence is public, but it is spread across classification, 510(k) and PMA data.

## What it does

Using public FDA classification, 510(k) and PMA data, the app scores the 510(k), De Novo and PMA pathways, ranks candidate predicate devices with TF-IDF similarity, shows evidence gaps and strategy options, runs a sensitivity analysis, and explains each result. There are nine analysis tabs.

## Key decisions

- All weights live in one place (`WEIGHTS`), so the scoring model is transparent and easy to adjust.
- Predicate ranking uses TF-IDF similarity instead of plain word overlap, and falls back to Jaccard automatically when TF-IDF is unavailable.
- The PMA bonus applies only when two or more risk signals are present, which reduces false alarms.
- The app explains its evidence and uncertainty instead of giving a black-box verdict.

## How I checked it

I defined the expected pathway for nine products in `examples.md` before testing. For a retinal AI device, the app gave De Novo 53%, consistent with the expected pathway (De Novo or 510(k)), and flagged its own confidence as low.

## What broke and what I changed

| What happened | What I changed |
|---|---|
| pandas was not pinned, and `applymap` on line 482 of `app.py` failed. | Replaced it with `.map` and pinned `pandas>=2.1.0`. |
| Search used exact phrase matching, so "retinal imaging ai" returned zero FDA precedents. | Switched to product-code based search. |

## Limits and next

Search still depends on product codes. Embedding-based similarity is the next step.
