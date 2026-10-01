---
title: SourceLock
summary: Sentence-level evidence checks for pharma medical, legal and regulatory (MLR) review. Rules keep final authority; the model only matches meaning and suggests edits.
group: Regulatory & safety intelligence
tracks: [Applied AI]
tags: [Solo, Hackathon prototype]
year: "[TO CONFIRM]"
period: "[TO CONFIRM]"
context: Hackathon prototype
team: Solo
role: Design and build
stack: [TypeScript, Vitest, Amazon Bedrock]
links: []
order: 4
stats:
  - value: "5"
    label: Verdict types for every sentence
---

## Problem

Pharma and biotech content teams go through MLR review before anything is published. Tracing evidence sentence by sentence is slow, risky claims slip through, and when a source changes it is hard to find every affected piece of content.

## How it works

Every sentence gets one of five verdicts: supported, needs_review, unsupported, prohibited_for_audience or superseded_source.

Deterministic rules have final authority over approval status, prohibited claims, audience, source version and the audit log. Amazon Bedrock only handles semantic matching, review reasons and suggested edits. If Bedrock fails, a local reviewer takes over automatically. Nothing is approved or published automatically, and every decision is logged.

## Demo

Using a fictional product, KTX-201: supported sentences pass, unsupported comparisons and prohibited claims are flagged, and when the evidence for a serious infection rate changes from 7.4% to 8.1%, the tool points to every affected document and sentence.

## Limits and next

This is a prototype tested on fictional data. There are no real-world usage results yet.
