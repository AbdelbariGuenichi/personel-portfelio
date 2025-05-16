<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});



const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    form.value = {
      name: '',
      email: '',
      message: ''
    };
    
    submitSuccess.value = true;
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  } catch (error) {
    submitError.value = true;
    setTimeout(() => {
      submitError.value = false;
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="content-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-3 fw-bold text-white">LET'S WORK</h1>
            <h2 class="display-4 fw-bold text-secondary">TOGETHER</h2>
          </div>
          
          <form @submit.prevent="submitForm">
            <div class="row mb-4">
              <div class="col-md-6 mb-4 mb-md-0">
                <label for="name" class="form-label text-secondary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  class="form-control form-control-lg bg-dark text-white border-0" 
                  placeholder="Your Name" 
                  required
                >
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label text-secondary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="form-control form-control-lg bg-dark text-white border-0" 
                  placeholder="Your@email.com" 
                  required
                >
              </div>
            </div>
            
            <div class="mb-4">
            </div>
            
            <div class="mb-4">
              <label for="message" class="form-label text-secondary">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                class="form-control form-control-lg bg-dark text-white border-0" 
                rows="6" 
                placeholder="Message"
                required
              ></textarea>
            </div>
            
            <div class="d-grid">
              <button 
                type="submit" 
                class="btn btn-lg submit-btn" 
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">
                  <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </span>
                <span v-else>Submit</span>
              </button>
            </div>
            
            <div class="mt-3 text-center">
              <div v-if="submitSuccess" class="alert alert-success py-2 fade-in">
                Thank you! Your message has been sent successfully.
              </div>
              <div v-if="submitError" class="alert alert-danger py-2 fade-in">
                Oops! Something went wrong. Please try again later.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-control, .form-select {
  padding: 0.8rem 1rem;
  border-radius: 8px;
  background-color: #333 !important;
}

.form-control:focus, .form-select:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.1);
  background-color: #333 !important;
}

.form-control::placeholder {
  color: #777;
}

.submit-btn {
  background-color: #ff6347;
  border: none;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background-color: #ff7f66;
  transform: translateY(-2px);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-btn:disabled {
  background-color: #ff634780;
}

.fade-in {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .display-3 {
    font-size: 3.5rem;
  }
  
  .display-4 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .display-3 {
    font-size: 2.5rem;
  }
  
  .display-4 {
    font-size: 2rem;
  }
}
</style>