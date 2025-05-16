<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  liveDemo: string
  github: string
}

const projects = ref<Project[]>([
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured online shopping platform with cart management and payment integration.',
    technologies: ['Vue.js', 'TypeScript', 'Bootstrap', 'Node.js'],
    image: '../assets/pictures/ecommerce-platform-project.png',
    liveDemo: 'https://demo-ecommerce.com',
    github: 'https://github.com/yourusername/ecommerce',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team features.',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Tailwind CSS'],
    image: '../assets/pictures/task-management-project.png',
    liveDemo: 'https://task-manager-demo.com',
    github: 'https://github.com/yourusername/taskmanager',
  },
])
</script>

<template>
  <section id="projects" class="content-section">
    <div class="container-fluid">
      <h2 class="display-4 fw-bold mb-4">Featured Projects</h2>
      <div class="row g-3">
        <div v-for="project in projects" :key="project.title" class="col-12">
          <div class="project-card">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" class="img-fluid" />
            </div>
            <div class="project-info">
              <h3 class="h4 fw-bold">{{ project.title }}</h3>
              <p class="text-secondary">{{ project.description }}</p>
              <div class="tech-stack mb-3">
                <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                  {{ tech }}
                </span>
              </div>
              <div class="project-links">
                <a :href="project.liveDemo" target="_blank" class="project-btn primary-btn">
                  Live Demo
                </a>
                <a :href="project.github" target="_blank" class="project-btn secondary-btn">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
