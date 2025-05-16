<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faFolder, faWrench, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faFolder, faWrench, faPenToSquare)

const activeLink = ref('home')

const setActive = (link: string) => {
  activeLink.value = link
}

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeLink.value = entry.target.id
        }
      })
    },
    { threshold: 0.5 },
  )

  sections.forEach((section) => {
    observer.observe(section)
  })
})
</script>

<template>
  <nav class="navbar-container">
    <div class="navbar-content">
      <a
        href="#home"
        @click="setActive('home')"
        :class="{ active: activeLink === 'home' }"
        class="nav-item"
      >
        <FontAwesomeIcon :icon="['fas', 'home']" />
      </a>
      <a
        href="#projects"
        @click="setActive('projects')"
        :class="{ active: activeLink === 'projects' }"
        class="nav-item"
      >
        <FontAwesomeIcon :icon="['fas', 'folder']" />
      </a>
      <a
        href="#skills"
        @click="setActive('skills')"
        :class="{ active: activeLink === 'skills' }"
        class="nav-item"
      >
        <FontAwesomeIcon :icon="['fas', 'wrench']" />
      </a>
      <a
        href="#contact"
        @click="setActive('contact')"
        :class="{ active: activeLink === 'contact' }"
        class="nav-item"
      >
        <FontAwesomeIcon :icon="['fas', 'pen-to-square']" />
      </a>
    </div>
  </nav>
</template>
