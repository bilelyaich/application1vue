<template>
    <div class="container">
        
        <br>
        <br>
        <form class="signin-form" @submit.prevent="loginUser">
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="text" class="form-control"  v-model="user.email">
  </div>
  <div class="mb-3">
    <label >Password</label>
    <input type="password" class="form-control" v-model="user.password">
  </div>
    <div class="alert alert-danger" v-if="messageError">{{messageError}}</div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>


    </div>
</template>



<script>
import firebase from '../Firebase'
import router from '../router'
export default {
    name:'SignIn',
    data(){
    return{
        user:{
            email:'',
            password:''
        },
        messageError:''
    }
    },
    methods:{
        loginUser(){
            firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then((dataUser)=>{
                localStorage.setItem("uidUser",dataUser.user.uid)
             
                router.push({
                 name:'HomeView'
                })
            }).catch(()=>{
                this.messageError='invalid email and password'
            })
           
        }
    }

}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin-bottom: 2px;
}

.signin-form {
  max-width: 400px;
  width: 100%;
  padding: 45px;
  border: 12px solid #120000;
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