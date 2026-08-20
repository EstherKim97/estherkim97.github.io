---
layout: about
image: /assets/img/portfolio_pic.JPG
description: >
  Health-focused data scientist with expertise in pharmaceutical sciences, regulatory affairs, and AI applications for healthcare.
hide_description: true
---

<style>
/* Container for side-by-side layout */
.hero-container {
  display: flex;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 30px;
}

.hero-content {
  flex: 1;
  max-width: 700px;
}

/* Network animation - RIGHT SIDE */
.hero-visual {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  margin-top: 20px;
  animation: fadeUp 0.9s ease-out both;
}

.hero-visual dotlottie-player {
  width: 100% !important;
  height: 100% !important;
  border-radius: 20px;
  background: transparent !important;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero title */
.hero-title {
  margin-bottom: 0;
  line-height: 1.2;
}

/* Typewriter text - BLUE */
#typed-text,
.typed-text {
  font-weight: 800 !important;
  color: #2F3CFF !important;
}

.typed-cursor {
  animation: blink 1s step-end infinite;
  margin-left: 2px;
  color: #2F3CFF !important;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* Hero subtitle - MORE SPACE FROM TITLE */
.hero-subtitle {
  margin-top: 40px !important;
  max-width: 650px;
  color: #6B7280;
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Keyword chips - MORE SPACE FROM SUBTITLE */
.hero-chips {
  margin-top: 35px !important;
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 12px 14px !important;
  max-width: 650px;
}

.hero-chips .chip,
.chip {
  display: inline-block !important;
  padding: 10px 18px !important;
  border: 2px solid #2F3CFF !important;
  border-radius: 999px !important;
  background: #ffffff !important;
  color: #2F3CFF !important;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  line-height: 1.2 !important;
  transition: all 0.2s ease !important;
  white-space: nowrap !important;
}

.hero-chips .chip:hover,
.chip:hover {
  background: #2F3CFF !important;
  color: #ffffff !important;
}

/* Responsive - stack on mobile */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column-reverse;
    gap: 20px;
  }
  
  .hero-visual {
    margin: 0 auto;
  }
}
</style>

<div class="hero-container">
  <div class="hero-content">
    <h1 class="hero-title">
      I explore<br />
      <span id="typed-text" class="typed-text"></span><span class="typed-cursor" aria-hidden="true">|</span><br />
      for real-world healthcare.
    </h1>

    <p class="hero-subtitle">
      I build and evaluate data-driven methods that connect patient-level clinical data with biomedical signals,
      with a focus on reproducible workflows and practical healthcare impact.
    </p>

    <div class="hero-chips">
      <span class="chip">Clinical Data</span>
      <span class="chip">Biomedical Data</span>
      <span class="chip">Clinical AI</span>
      <span class="chip">Single-cell (CyTOF / scRNA-seq)</span>
      <span class="chip">Model Evaluation</span>
      <span class="chip">Reproducible Pipelines</span>
    </div>

    <div style="display:flex; gap:12px; margin-top:32px; flex-wrap:wrap;">
      <a class="btn-link" href="{{ '/projects/' | relative_url }}">View Projects</a>
      <a class="btn-link" style="background:#fff; color:#2F3CFF !important; border:2px solid #2F3CFF;" href="{{ '/research_profile/' | relative_url }}">Research &amp; Experience</a>
      <a class="btn-link" style="background:#fff; color:#2F3CFF !important; border:2px solid #2F3CFF;" href="{{ '/resume/' | relative_url }}">Resume</a>
    </div>
  </div>

  <div class="hero-visual">
    <dotlottie-player
      src="{{ '/assets/anim/Network.json' | relative_url }}"
      background="transparent"
      speed="1"
      loop
      autoplay>
    </dotlottie-player>
  </div>
</div>

<div class="section-kicker" style="margin-top:10px;">Toolkit</div>
<div class="skill-grid" style="grid-template-columns: repeat(auto-fill, minmax(88px, 1fr)); max-width: 620px;">
  <div class="skill-item">
    <img class="skill-icon" src="https://cdn.simpleicons.org/python/3776AB" alt="Python" loading="lazy">
    <div class="skill-label">Python</div>
  </div>
  <div class="skill-item">
    <img class="skill-icon" src="https://cdn.simpleicons.org/r/276DC3" alt="R" loading="lazy">
    <div class="skill-label">R</div>
  </div>
  <div class="skill-item">
    <div class="skill-icon-mono">SQL</div>
    <div class="skill-label">SQL</div>
  </div>
  <div class="skill-item">
    <img class="skill-icon" src="https://cdn.simpleicons.org/pandas/150458" alt="pandas" loading="lazy">
    <div class="skill-label">pandas</div>
  </div>
  <div class="skill-item">
    <img class="skill-icon" src="https://cdn.simpleicons.org/jupyter/F37626" alt="Jupyter" loading="lazy">
    <div class="skill-label">Jupyter</div>
  </div>
  <div class="skill-item">
    <img class="skill-icon" src="https://cdn.simpleicons.org/git/F05032" alt="Git" loading="lazy">
    <div class="skill-label">Git</div>
  </div>
</div>

<script type="module" src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"></script>
<script src="{{ '/assets/js/typed-hero.js' | relative_url }}"></script>