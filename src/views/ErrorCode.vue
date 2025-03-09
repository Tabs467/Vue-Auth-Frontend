<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const code = computed(() => route.query.code || 'No Error Code');
</script>

<template>
  <div>
    <h1>Error: {{ code }}</h1>
  </div>
</template>