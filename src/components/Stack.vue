<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const frontendStack = ref([
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'HTML', icon: 'logos:html-5' },
  { name: 'CSS', icon: 'logos:css-3' },
  { name: 'Bootstrap', icon: 'logos:bootstrap' },
  { name: 'Sass', icon: 'logos:sass' },
])

const toolsStack = ref([
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'mdi:github' },
  { name: 'Netlify', icon: 'logos:netlify' },
])
</script>

<template>
  <section id="skills" class="content-section">
    <div class="container-fluid">
      <div class="mb-5">
        <h1 class="display-1 fw-bold">MY STACK</h1>
        <h2 class="display-2 fw-bold text-secondary">TECHNOLOGIES</h2>
        <p class="mt-3 text-secondary" style="max-width: 600px">
          These are the technologies I've worked with and am proficient in. I'm always learning and
          adding new tools to my stack.
        </p>
      </div>

      <div class="stack-section mb-5">
        <h3 class="text-white mb-4 d-flex align-items-center">
          <span class="stack-icon me-3">
            <Icon icon="mdi:code" />
          </span>
          FRONTEND
        </h3>
        <div class="d-flex gap-4 flex-wrap">
          <Icon
            v-for="tech in frontendStack"
            :key="tech.name"
            :icon="tech.icon"
            class="tech-icon"
            width="48"
            height="48"
          />
        </div>
      </div>

      <div class="stack-section">
        <h3 class="text-white mb-4 d-flex align-items-center">
          <span class="stack-icon me-3">
            <Icon icon="mdi:toolbox" />
          </span>
          TOOLS
        </h3>
        <div class="d-flex gap-4 flex-wrap">
          <Icon
            v-for="tech in toolsStack"
            :key="tech.name"
            :icon="tech.icon"
            class="tech-icon"
            width="48"
            height="48"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-icon {
  transition: transform 0.2s ease;
  color: white;
}

.tech-icon:hover {
  transform: scale(1.2);
}
</style>
