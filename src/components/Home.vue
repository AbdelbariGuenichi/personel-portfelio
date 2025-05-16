<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import NavBar from '../components/NavBar.vue'
import Contact from './Contact.vue'
import Stack from './Stack.vue'
import Projects from './Projects.vue'

library.add(faFacebookF, faInstagram, faLinkedinIn, faXTwitter)

const socialLinks = ref({
  facebook: 'https://facebook.com/yourprofile',
  instagram: 'https://instagram.com/yourprofile',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourprofile',
})

const stats = ref({
  experience: 0,
  projects: 0,
  clients: 0,
})
</script>

<template>
  <div class="portfolio-container">
    <NavBar />
    <div class="profile-sidebar">
      <div class="profile-image-container rounded-4 overflow-hidden mb-3">
        <img src="../assets/pictures/profile-picture.jpg" class="img-fluid" alt="Profile Image" />
      </div>
      <h3 class="fw-bold text-dark">Abdelbarry Guenichi</h3>
      <p class="text-muted small text-center">
        A Software Engineer who has developed countless innovative solutions that help businesses
        grow.
      </p>
      <div class="d-flex gap-3 mt-2">
        <a
          :href="socialLinks.facebook"
          target="_blank"
          class="social-icon d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a
          :href="socialLinks.instagram"
          target="_blank"
          class="social-icon d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a
          :href="socialLinks.linkedin"
          target="_blank"
          class="social-icon d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a
          :href="socialLinks.twitter"
          target="_blank"
          class="social-icon d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
      </div>
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
          </div>
        </div>
      </section>

      <Projects />
      <Stack />
      <Contact />
    </div>
  </div>
</template>
