<template>
  <div>
    <VCard class="mx-auto" width="400" prepend-icon="mdi-home">
      <template v-slot:title> Hello from Vuetify! </template>
      <VCardText> When you see this inside a card, it worked! </VCardText>
      <VuetifyTiptap v-model="content" />
    </VCard>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const content = ref('init text...')
</script>