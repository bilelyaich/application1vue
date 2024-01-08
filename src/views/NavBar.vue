<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><i>The future of e-commerce in phones is yours! 🚀</i></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link  active" aria-current="page" to="/"> <i> 🏠Home</i></router-link>
            </li>
            <li class="nav-item" v-if="user">
              <router-link class="nav-link" to="/allproducts"> <i>🛍️ Products</i></router-link>
            </li>
            <li class="nav-item" v-if="user">
              <router-link class="nav-link" to="/myproducts"><i> 📦 My Products</i></router-link>
            </li>
            <li class="nav-item" v-if="!user">
              <router-link class="nav-link" to="/signin"> <i> 🔐 Signin </i></router-link>
            </li>
            <li class="nav-item" v-if="!user">
              <router-link class="nav-link" to="/signup"> <i>📝 Signup </i></router-link>
            </li>
            
            <li class="nav-item" v-if="user">
              <a class="nav-link" v-on:click="logout"> <i> 🚪 Logout</i></a>
            </li>
           
            <!-- ... (autres liens) ... -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name:'NavBar',
  data(){
    return {
      user:null
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(userAuth=>{
      if(userAuth){
        this.user=userAuth
      }else{
        this.user=null
      }
    })
  },
  methods:{
    logout(){

      firebase.auth().signOut().then(()=>{
        localStorage.removeItem("uidUser")
        router.push({
          name:'SignIn'  
        })
      })
    }
  }
}
</script>
<style scoped>
/* Styles spécifiques au composant */
.navbar {
  background-color: #011320; /* Couleur de fond */
  padding: 0rem; /* Marge intérieure */
}

.navbar-brand {
  color: #fffeff; /* Couleur du texte */
  font-size: 1.5rem; /* Taille de la police */
  border: 2px solid #fff; /* Ajoute une bordure de 2px solide autour du texte */
  padding: 0.2rem 0.5rem; 
  border: 10px solid #3200fb; /* Ajoute une bordure de 2px solide avec une couleur orange (#ff5733) */
  padding: 0.2rem 0.5rem;
  display: inline-block;
  font-weight: bold; 
}

.navbar-nav .nav-link {
  color: #ffffff; /* Couleur du texte des liens */
  font-weight: bold; 
}

.navbar-toggler-icon {
  background-color: #0e0000; /* Couleur de l'icône du bouton de basculement */
}

/* Styles pour le formulaire de recherche */
.form-control {
  border: none; /* Supprime la bordure */
}

.btn-outline-success {
  color: #fff; /* Couleur du texte du bouton */
  border-color: #fff; /* Couleur de la bordure du bouton */
}
</style>