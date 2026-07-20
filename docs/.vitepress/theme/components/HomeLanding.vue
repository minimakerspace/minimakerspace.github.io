<script setup lang="ts">
const focusAreas = [
  { index: '01', title: '3D Printing', copy: 'Materials, slicer settings, troubleshooting, and finishing notes.' },
  { index: '02', title: 'Electronics', copy: 'Arduino, ESP32, sensors, wiring, and enclosure integration.' },
  { index: '03', title: 'Prototyping', copy: 'A practical path from a rough idea to something you can test.' }
]
</script>

<template>
  <main class="maker-home">
    <section class="maker-hero">
      <div class="maker-hero__circuit" aria-hidden="true"></div>
      <div class="maker-hero__content">
        <p class="maker-kicker"><span></span> docs.minimakerspace.id · system preview</p>
        <img class="maker-hero__logo" src="/mini-logo.svg" alt="mini MAKERSPACE" />
        <h1>THE KNOWLEDGE BASE<br />IS <em>BEING BUILT.</em></h1>
        <p class="maker-intro">
          Practical documentation for makers who want to print, wire, test, and improve real things.
          Our first field notes are on the workbench now.
        </p>
        <div class="maker-actions">
          <a class="maker-button maker-button--solid" href="/guide/getting-started">Open the preview <span>→</span></a>
          <a class="maker-button" href="https://minimakerspace.id">Visit main site <span>↗</span></a>
        </div>
      </div>

      <aside class="maker-status" aria-label="Documentation status">
        <div class="maker-status__head">
          <span>// RELEASE STATUS</span>
          <span class="maker-status__live"><i></i> IN PROGRESS</span>
        </div>
        <ol>
          <li class="is-done"><span>01</span><div><strong>Foundation</strong><small>Navigation and structure</small></div><b>ONLINE</b></li>
          <li class="is-active"><span>02</span><div><strong>Field notes</strong><small>Guides and references</small></div><b>WRITING</b></li>
          <li><span>03</span><div><strong>Public release</strong><small>Polish and review</small></div><b>SOON</b></li>
        </ol>
        <p>Want to follow the builds while we write?</p>
        <a href="https://www.instagram.com/minimakerspace.id/">@minimakerspace.id <span>↗</span></a>
      </aside>
    </section>

    <div class="maker-ticker" aria-hidden="true">
      <span>3D PRINTING</span><i></i><span>ELECTRONICS</span><i></i><span>RAPID PROTOTYPING</span><i></i><span>OPEN HARDWARE</span><i></i><span>MADE IN INDONESIA</span>
    </div>

    <section class="maker-focus">
      <header>
        <p class="maker-kicker"><span></span> what will live here</p>
        <h2>Notes from the workbench,<br />written for <em>real builds.</em></h2>
      </header>
      <div class="maker-focus__grid">
        <a v-for="area in focusAreas" :key="area.index" :href="area.index === '01' ? '/guide/3d-printing' : area.index === '02' ? '/guide/electronics' : '/guide/getting-started'" class="maker-card">
          <span>{{ area.index }}</span>
          <div class="maker-card__mark" aria-hidden="true"><i></i><i></i></div>
          <h3>{{ area.title }}</h3>
          <p>{{ area.copy }}</p>
          <b>Explore preview →</b>
        </a>
      </div>
    </section>
  </main>
</template>
