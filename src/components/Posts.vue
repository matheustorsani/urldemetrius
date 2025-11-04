<script setup lang="ts">
defineProps<{
    title: string | number
    content: string | number
    creator: string | number
    img: string
}>()

</script>

<template>
    <div class="post">
        <h1 class="title">{{ title }}</h1>
        <p class="content">{{ content }}</p>
        <img class="image" :src="img" alt="Imagem do post" v-if="img.startsWith('data:image/')"/>
        <video class="image" :src="img" controls v-if="img.startsWith('data:video/')"></video>
        <p class="creator">Escrito por: {{ creator }}</p>
    </div>
</template>
