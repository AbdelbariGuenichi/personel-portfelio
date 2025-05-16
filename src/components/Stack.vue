<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faToolbox, faServer, faGlobe } from '@fortawesome/free-solid-svg-icons'
import {
  faJs,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faSass,
  faGitAlt,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faCode,
  faToolbox,
  faServer,
  faGlobe,
  faJs,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faSass,
  faGitAlt,
  faGithub,
)

const frontendStack = ref([
  { name: 'JavaScript', bgColor: '#F7DF1E', textColor: '#000000', icon: ['fab', 'js'] },
  { name: 'TypeScript', bgColor: '#3178C6', textColor: '#FFFFFF', icon: ['fab', 'js'] },
  { name: 'Vue.js', bgColor: '#4FC08D', textColor: '#FFFFFF', icon: ['fab', 'vuejs'] },
  { name: 'HTML', bgColor: '#E34F26', textColor: '#FFFFFF', icon: ['fab', 'html5'] },
  { name: 'CSS', bgColor: '#1572B6', textColor: '#FFFFFF', icon: ['fab', 'css3-alt'] },
  { name: 'Bootstrap', bgColor: '#7952B3', textColor: '#FFFFFF', icon: ['fab', 'bootstrap'] },
  { name: 'Sass', bgColor: '#CC6699', textColor: '#FFFFFF', icon: ['fab', 'sass'] },
])

const toolsStack = ref([
  { name: 'Git', bgColor: '#F05032', textColor: '#FFFFFF', icon: ['fab', 'git-alt'] },
  { name: 'GitHub', bgColor: '#181717', textColor: '#FFFFFF', icon: ['fab', 'github'] },
  { name: 'Vercel', bgColor: '#000000', textColor: '#FFFFFF', icon: ['fas', 'server'] },
  { name: 'Netlify', bgColor: '#00C7B7', textColor: '#FFFFFF', icon: ['fas', 'globe'] },
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
            <FontAwesomeIcon :icon="['fas', 'code']" />
          </span>
          FRONTEND
        </h3>
        <div class="row g-4">
          <div v-for="tech in frontendStack" :key="tech.name" class="col-6 col-md-4 col-lg-3">
            <div
              class="tech-card"
              :style="{ backgroundColor: tech.bgColor, color: tech.textColor }"
            >
              <div class="tech-icon">
                <FontAwesomeIcon :icon="tech.icon" />
              </div>
              <div class="tech-name">{{ tech.name }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="stack-section">
        <h3 class="text-white mb-4 d-flex align-items-center">
          <span class="stack-icon me-3">
            <FontAwesomeIcon :icon="['fas', 'toolbox']" />
          </span>
          TOOLS
        </h3>
        <div class="row g-4">
          <div v-for="tech in toolsStack" :key="tech.name" class="col-6 col-md-4 col-lg-3">
            <div
              class="tech-card"
              :style="{ backgroundColor: tech.bgColor, color: tech.textColor }"
            >
              <div class="tech-icon">
                <FontAwesomeIcon :icon="tech.icon" />
              </div>
              <div class="tech-name">{{ tech.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
