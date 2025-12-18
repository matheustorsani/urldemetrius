<script setup>
import { ref, onMounted } from 'vue';

const showIntro = ref(true);

onMounted(() => {
  setTimeout(() => {
    showIntro.value = false;
  }, 2500);
});
</script>

<template>
  <main class="main">
    
    <Transition name="fade">
      <div v-if="showIntro" class="intro-screen">
        <h1 class="welcome-text">あきらめないで</h1>
      </div>
    </Transition>

    <div class="container">
      <video class="video-bg" autoplay muted loop playsinline>
        <source src="../assets/images/wallpaper.mp4" type="video/mp4" />
      </video>

      <div class="content-wrapper">
        <div class="text-content">
          <h1 class="montserrat">demetrius!</h1>
          <div class="nav">
            <nav class="list">
              <ul class="nav-list">
                <li class="forum">
                  <router-link to="/forum">Forum</router-link>
                </li>
                <li class="projects">
                  <router-link to="/projects">Projetos</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      <footer>
        <ul class="socials">
          <li><a href="https://github.com/matheustorsani" target="_blank"><i class="fa-brands fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/matheustorsani/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://instagram.com/mtsxw_" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://x.com/demetriuskiun" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li>
        </ul>
      </footer>
    </div>
  </main>
</template>