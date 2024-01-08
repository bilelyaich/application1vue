<template>
  <div class="home">
    <div class="home-banner">
      <img alt="Vue logo" src="../assets/commerce.png" class="hero-banner">
    </div>
    <div class="home-content">
      <h1 class="main-title"><i>Welcome to our Commerce Platform</i></h1>
      <p class="subtitle"><i>Discover an exceptional phone shopping experience.</i></p>
      <router-link to="/products" class="btn-explore">Explore Now</router-link>
    </div>
    <Footer /> <!-- Ajoutez le composant Footer ici -->
  </div>
</template>

<script>
import Footer from './FooterSection.vue'; // Assurez-vous d'ajuster le chemin selon votre structure

export default {
  name: 'HomeView',
  components: {
    Footer,
  },
}
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques à votre page d'accueil */
.home {
  border: 20px solid #01121d;
  border-radius: 100px;
  margin: 20px;
  padding: 10px;
  background-color: #ecf0f1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.home-banner {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  border-radius: 10px;
}

.home-banner img {
  width: 100%;
  height: auto;
}

.home-content {
  text-align: center;
  padding: 20px;
}

.main-title {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.5em;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.btn-explore {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: #3498db;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-explore:hover {
  background-color: #2980b9;
}
</style>