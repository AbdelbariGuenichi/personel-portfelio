<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import NavBar from './NavBar.vue'
import Contact from './Contact.vue'
import Stack from './Stack.vue'
import Projects from './Projects.vue'

const socialIcons = ref([
  {
    link: 'https://www.facebook.com/abdelbarry.guenichi',
    icon: 'mdi:facebook',
  },
  {
    link: 'https://leetcode.com/abdelbarry/',
    icon: 'simple-icons:leetcode',
  },
  {
    link: 'https://www.linkedin.com/in/abdelbarryguenichi/',
    icon: 'mdi:linkedin',
  },
  {
    link: 'https://www.github.com/abdelbarry',
    icon: 'mdi:github',
  },
])

const stats = ref({
  experience: 2,
  projects: 0,
  clients: 0,
})

const cvUrl = ref(
  'https://drive.google.com/uc?export=download&id=1LwlMXR2rWrZlh2sRjjXqJ0AKqxRkYy0u',
)
</script>

<template>
  <div class="portfolio-container">
    <div class="profile-sidebar">
      <div class="profile-image-container rounded-4 overflow-hidden mb-3">
        <img src="../assets/pictures/profile-picture.jpg" class="img-fluid" alt="Profile Image" />
      </div>
      <h3 class="fw-bold text-dark text-center">Abdelbarry Guenichi</h3>
      <p class="text-muted small text-center">
        A Software Engineer who has developed countless innovative solutions that help businesses
        grow.
      </p>
      <div class="d-flex gap-3 mt-2">
        <a
          v-for="socialIcon in socialIcons"
          :href="socialIcon.link"
          target="_blank"
          class="social-icon d-flex align-items-center justify-content-center"
        >
          <Icon :icon="socialIcon.icon" width="30" height="30" />
        </a>
      </div>
      <NavBar />
    </div>

    <div class="main-content">
      <section id="home" class="content-section">
        <div class="container-fluid">
          <h1 class="display-1 fw-bold">FRONTEND</h1>
          <h2 class="display-2 fw-bold text-secondary">DEVELOPER</h2>
          <p class="mt-3 text-secondary" style="max-width: 500px">
            Passionate about creating intuitive and engaging user experiences. Specialize in
            transforming ideas into beautifully crafted products.
          </p>

          <div class="row mt-5 g-4">
            <div class="col-4">
              <h2 class="fw-bold text-white">+{{ stats.experience }}</h2>
              <p class="text-secondary small">YEARS OF<br />EXPERIENCE</p>
            </div>
            <div class="col-4">
              <h2 class="fw-bold text-white">+{{ stats.projects }}</h2>
              <p class="text-secondary small">PROJECTS<br />COMPLETED</p>
            </div>
            <div class="col-4">
              <h2 class="fw-bold text-white">+{{ stats.clients }}</h2>
              <p class="text-secondary small">WORLDWIDE<br />CLIENTS</p>
            </div>
            <div class="col-4">
              <a :href="cvUrl" target="_blank" class="download-cv-btn">
                <Icon icon="mdi:download" class="download-icon" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <Projects />
      <Stack />
      <Contact />
    </div>
  </div>
</template>
