<script setup>
const { data: pokemon, error: err } = await useFetch(`/api/scizor`);
</script>

<template>
  <ul v-if="pokemon">
    <li>
      <img :src="pokemon.sprite" alt="sprite image" />
      <p>{{ pokemon.name }}</p>
    </li>
  </ul>
  <div v-else>{{ err }}</div>
</template>
