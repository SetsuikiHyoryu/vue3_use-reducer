<script lang="ts">
export default { name: 'TodoAPP' }
</script>

<script setup lang="ts">
import { ref } from 'vue'

const word = ref<string>('white thighhighs')
</script>

<template>
  <div>{{ word }}</div>
</template>
