<template>
    <div class="container">
        <br>
        <br>
            <form  class="signup-form" @submit.prevent="registerUser">
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" v-model="user.name">

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user.email">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password">
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


    </div>

</template>



<script>
import firebase from '../Firebase'
import router from '../router'
export default {
    name:'SignUp',
    data(){
      return {
        user:{
          name:'',
          email:'',
          password:'',
          uid:''
        },
      ref:firebase.firestore().collection('users')
      }
    },
    methods:{
      registerUser(){
        firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then((dataUser)=>{
          this.ref.add({
            name:this.user.name,
            email:this.user.email,
            uid:dataUser.user.uid
          })
          router.push({
            name:'Home'
          })


        })
      }
    }

}
</script>

<style scoped>
/* Votre style existant ici */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin-bottom: 2px;
}

.signup-form {
  max-width: 400px;
  width: 100%;
  padding: 45px;
  border: 10px solid #120000;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
}

.form-control {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #3498db;
  border: none;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>