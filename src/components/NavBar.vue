<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const activeLink: string = ref('home')

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
        title="Home"
      >
        <Icon icon="mdi:home" width="30" height="30" />
      </a>
      <a
        href="#projects"
        @click="setActive('projects')"
        :class="{ active: activeLink === 'projects' }"
        class="nav-item"
      >
        <Icon icon="mdi:folder" width="30" height="30" />
      </a>
      <a
        href="#skills"
        @click="setActive('skills')"
        :class="{ active: activeLink === 'skills' }"
        class="nav-item"
      >
        <Icon icon="mdi:wrench" width="30" height="30" />
      </a>
      <a
        href="#contact"
        @click="setActive('contact')"
        :class="{ active: activeLink === 'contact' }"
        class="nav-item"
      >
        <Icon icon="mdi:pencil-box" width="30" height="30" />
      </a>
    </div>
  </nav>
</template>
