---
layout: page
title: "FAERS-Based Pharmacovigilance Signal Detection in GLP-1 Receptor Agonists"
permalink: /03-glp1-sentinel/
---
![GLP1-Sentinel Project]({{ '/assets/img/projects/GLP1.png' | relative_url }}){:.lead width="800" height="400" loading="lazy"}

## 🎯 Project Overview

GLP1-Sentinel is an end-to-end pharmacovigilance pipeline that analyzes FDA Adverse Event Reporting System (FAERS) data to detect safety signals in GLP-1 receptor agonist drugs. 

This project was built in response to a critical real-world gap: while GLP-1 drugs rapidly became one of the most widely prescribed drug classes in the US, regulatory surveillance capacity declined, creating delays in identifying emerging risks. GLP1-Sentinel addresses this by processing over **20 million adverse event reports across 20 years** to surface clinically meaningful signals at scale.

---

## ✨ Key Features

- **📊 Large-Scale Data Processing** — Processes 20,904,555 FAERS cases across 77 quarterly datasets  
- **⚖️ Regulatory-Aligned Methodology** — Implements FDA-recommended deduplication and primary suspect filtering  
- **🧠 Multi-Method Signal Detection** — Uses ROR, PRR, and BCPNN with consensus logic (≥2/3 methods)  
- **💊 GLP-1 Drug Surveillance** — Identifies 288,173 primary-suspect cases across major GLP-1 drugs  
- **📈 Reproducible Reporting** — Generates interactive HTML reports with full auditability  
- **🔍 Compounded Drug Separation** — Distinguishes unapproved compounded GLP-1 products from approved drugs  

---

## 🔬 Technical Implementation

### End-to-End Pipeline
- **Data Ingestion** — Download and parse 77 FAERS quarterly datasets (2.9GB raw → 5GB processed)  
- **Drug Normalization** — Resolve inconsistent drug naming across 20 years of reporting  
- **MedDRA Integration** — Map adverse events to System Organ Class (SOC) hierarchy  
- **Signal Detection** — Apply disproportionality analysis across the full FAERS database  
- **Report Generation** — Produce interactive, self-contained dashboards (Plotly)  

### Signal Detection Framework
- **Reporting Odds Ratio (ROR)** — Lower 95% CI > 1.0  
- **Proportional Reporting Ratio (PRR)** — PRR ≥ 2.0, χ² ≥ 4.0  
- **Information Component (BCPNN)** — IC025 > 0.0  
- **Consensus Rule** — Signal detected when ≥2 of 3 methods agree  

### Data Engineering Strategy
- **Streaming Architecture** — Handles multi-gigabyte data with ~2GB peak RAM  
- **Chunked Processing** — Efficient processing of 80M+ row tables  
- **Parquet Storage** — Optimized columnar data format  
- **Pre-Aggregation** — Reduces 67M reaction rows into compact lookup structures  

---

## 🏆 Project Details

**Project Type:** Individual Project  
**Domain:** Pharmacovigilance / Regulatory Data Science  
**Role:** End-to-End Developer (Data Engineering + Statistical Modeling + Domain Design)  
**Status:** Completed & Open Source  

---

## 🎯 Key Achievements

📊 **Massive Scale Analysis** — Processed 20,904,555 FAERS cases and 288,173 GLP-1-specific cases  
🔬 **Signal Detection** — Identified 2,665 statistically significant drug-reaction signals  
⚖️ **Regulatory Alignment** — Applied FDA-consistent methodology for accurate signal detection  
📈 **Validated Results** — Recovered known clinical signals (pancreatitis, thyroid risk), confirming pipeline reliability  

---

## 💡 Impact & Applications

- **💊 Drug Safety Monitoring** — Enables scalable post-market surveillance of high-risk drug classes  
- **🏥 Clinical Risk Awareness** — Detects emerging adverse events before formal label updates  
- **📊 Regulatory Intelligence** — Supports data-driven pharmacovigilance decision-making  
- **⚡ Scalable Infrastructure** — Demonstrates automation of large-scale safety monitoring systems  

---

## 🚀 Technical Challenges Overcome

- **Silent Data Loss (AERS Era)** — Identified and fixed schema-related parsing errors causing 100% data loss in early datasets  
- **Deduplication Complexity** — Implemented FDA-recommended logic for handling follow-up reports  
- **Signal Bias (Denominator Issue)** — Corrected methodology to prevent inflated false positives  
- **Memory Constraints** — Designed streaming pipeline to process large datasets efficiently  
- **Missing Data** — Handled high missingness without impacting signal detection accuracy  

---

## 🔗 Links & Resources

[**GitHub Repository**](https://github.com/EstherKim97/GLP1-Sentinel){:.btn.btn-primary.btn-sm}

---

*Built to bridge critical gaps in pharmacovigilance by combining regulatory knowledge, large-scale data engineering, and statistically robust signal detection.*