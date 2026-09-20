<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <Logo />
          <p>We are a creative architecture studio focused on modern, functional and sustainable design.</p>
        </div>
        <div>
          <div class="footer-title">Quick Links</div>
          <div class="footer-links">
            <router-link :to="{ name: 'home'}">Home</router-link>
            <router-link :to="{ name: 'about'}">About</router-link>
            <router-link to="#">Services</router-link>
            <router-link to="#">Portfolio</router-link>
            <router-link to="#">Blog</router-link>
            <router-link to="#">Contact</router-link>
          </div>
        </div>
        <div>
          <div class="footer-title">Services</div>
          <div class="footer-links">
            <router-link to="#">Architecture</router-link>
            <router-link to="#">Interior Design</router-link>
            <router-link to="#">Construction</router-link>
            <router-link to="#">Consulting</router-link>
            <router-link to="#">Project Management</router-link>
          </div>
        </div>
        <div>
          <div class="footer-title">Contact</div>
          <div class="footer-links">
            <a href="mailto:hello@nexora.com">hello@nexora.com</a>
            <a href="tel:+48123456789">+48 123 456 789</a>
            <a href="#">ul. Architektów 10<br>00-001 Warsaw</a>
          </div>
        </div>
      </div>
      <div class="copyright">© 2026 Nexora. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup>
  import Logo from '../ui/logo.vue'
</script>

<style scoped>
footer { background:#101415; color:white; border-top:1px solid #2a2e2f; padding:55px 0 22px; }
.footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1.4fr; gap:40px; }
footer .logo { margin-bottom:15px; }
footer p, footer a { color:#9da2a0; font-size:12px; }
.footer-title { color:white; font-size:12px; margin-bottom:14px; font-weight:600; }
.footer-links { display:grid; gap:8px; }
.copyright { margin-top:45px; padding-top:20px; border-top:1px solid #2a2e2f; color:#777d7a; font-size:10px; }

</style>
