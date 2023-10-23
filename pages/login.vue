<script setup lang="ts">
const auth = useCookie('pokemon-auth');

console.log(auth);

function authenticate() {
  auth.value = '9837439872';
}

function logout() {
  auth.value = '';
}
</script>
<template>
  <h1>Login</h1>
  <button @click="authenticate">Login</button>
  <button @click="logout">Logout</button>
</template>
