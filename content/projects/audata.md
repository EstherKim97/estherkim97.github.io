---
title: AuData
summary: A research-integrity auditor that checks a single paper for statistical errors, numerical inconsistencies, figure manipulation and citation problems, with a human reviewing every flag.
group: Biomedical research & discovery
tracks: [Applied AI]
tags: [Team, Collaboration]
year: "2026"
context: Collaborative repository (haile-teshome/AuData)
team: Team
stack: [LLM agents, PubMed, Crossref, OpenAlex, Next.js]
links:
  - label: GitHub
    url: https://github.com/haile-teshome/AuData
order: 7
stats: []
---

## What it does

AuData audits one paper or preprint and surfaces prioritized, evidence-linked flags for statistical recomputation, internal number consistency, image forensics, methods versus claims, and reference integrity. It is built as a reviewer aid: every flag goes to a human, and nothing is an automated accusation.

## Pipeline

Manage → Ingest → Detect → Reliability → Report. The reliability layer calibrates each flag and lets the system abstain instead of guessing.
