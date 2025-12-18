<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { addPost, getPosts } from '../firebase/posts.ts';
import Posts from '../components/Posts.vue';
import Post from '../models/Post.ts';

const title = ref('');
const content = ref('');
const img = ref('');
const creator = ref('');
const posts = ref<Post[]>([])
const loading = ref(true);

function loadImg(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file && !file.type.startsWith('image/') && !file.type.startsWith('video/')) {
        alert('Por favor, selecione um arquivo de imagem válido.');
        (document.getElementById('img') as HTMLInputElement).value = '';
        return;
    }

    if (file && file.size > 10 * 1024 * 1024) {
        alert('O arquivo não pode exceder 10MB.');
        (document.getElementById('img') as HTMLInputElement).value = '';
        return;
    }

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            img.value = reader.result as string;
        };
        reader.readAsDataURL(file);
    }

}


function add() {
    if (!title.value || !content.value) {
        alert('Preencha todos os campos!')
        return
    }

    if (!creator.value) {
        creator.value = 'anonymous'
    }


    const newPost = new Post(title.value, content.value, creator.value || 'anonymous', img.value);
    posts.value.unshift(newPost);
    addPost(newPost.title, newPost.content, newPost.creator, newPost.img);

    title.value = '';
    content.value = '';
    creator.value = '';
    img.value = '';
    (document.getElementById('img') as HTMLInputElement).value = '';
}
onMounted(async () => {
    const firebasePosts = await getPosts();
    posts.value = firebasePosts.map((p: any) =>
        new Post(p.title, p.content, p.creator, p.img)
    );
    loading.value = false;
});
</script>

<template>
    <main class="_forum">
        <div class="f_container">
            <router-link to="/">Home</router-link>
            <h1>REGISTRE ALGO!</h1>
            <h2>Coloque aqui o que quiser!</h2>

            <label for="title">Titulo</label>
            <input type="text" id="title" v-model="title" placeholder="Digite o título" />
            <label for="content">Conteúdo</label>
            <textarea id="content" v-model="content" placeholder="Digite o conteúdo"></textarea>
            <input type="file" id="img" accept="image/*, video/*" @change="loadImg" />
            <label for="creator">Criador</label>
            <input type="text" id="creator" v-model="creator" placeholder="deixar em branco = anonymous" />

            <button @click="add">Enviar!</button>

        </div>
        <img v-if="loading"
            src="https://cdn.glitch.com/ec5aae02-78bf-4aaf-8f5b-33c0c431f986%2Fspinner.gif?v=1609125396543"
            alt="Carregando..." />
        <div v-else class="posts">
            <Posts v-for="(post, index) in posts" :key="index" :title="post.title" :content="post.content"
                :img="post.img || ''" :creator="post.creator" />
        </div>
    </main>
</template>