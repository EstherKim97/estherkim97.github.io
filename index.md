---
layout: about
image: /assets/img/portfolio_pic.JPG
description: >
  Health-focused data scientist with expertise in pharmaceutical sciences, regulatory affairs, and AI applications for healthcare.
hide_description: true
---


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
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
}

.hero-content {
  flex: 1;
}

/* Network animation - RIGHT SIDE */
.hero-visual {
  flex-shrink: 0;
  width: 180px;
  height: 180px;
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

/* Hero subtitle */
.hero-subtitle {
  margin-top: 18px;
  max-width: 640px;
  color: #6B7280;
  font-size: 1.05rem;
  line-height: 1.45;
}

/* Keyword chips - WITH BORDERS */
.hero-chips {
  margin-top: 18px;
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 10px 12px !important;
}

.hero-chips .chip,
.chip {
  display: inline-block !important;
  padding: 8px 16px !important;
  border: 2px solid #2F3CFF !important;
  border-radius: 999px !important;
  background: #ffffff !important;
  color: #2F3CFF !important;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  line-height: 1.2 !important;
  transition: all 0.2s ease !important;
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

<script type="module" src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"></script>
<script src="{{ '/assets/js/typed-hero.js' | relative_url }}"></script>
