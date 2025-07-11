<script setup lang="ts">
import Project from '../models/Project';

const projects = [
    new Project(
        '../../public/urldemetrius.png',
        'urldemetrius',
        'Meu site pessoal.',
        '/'
    ),
    new Project(
        'https://camo.githubusercontent.com/20f7932860b47568f45b5182f9e46e4aed2a5cb522ca91804fdc1bad6605b731/68747470733a2f2f692e70696e696d672e636f6d2f373336782f61302f61372f31612f61306137316166663835326230396231613065386537613363363663373666372e6a7067',
        'Skye',
        'Skye é um projeto pessoal de automação no WhatsApp, criado com o objetivo de aprofundar meus conhecimentos em TypeScript. Atualmente está sendo desenvolvido com a biblioteca Baileys, que permite a integração com o WhatsApp Web.',
        'https://github.com/matheustorsani/Skye'

    ),
    new Project(
        '../../public/Shotta.png',
        'Shotta',
        'Shotta é um projetinho simples, que funciona como um chat em tempo real.',
        'https://github.com/matheustorsani/Shotta'
    )
];
</script>


<template>
    <main class="projects-container">
        <h1>Meus Projetos</h1>
        <p class="sub">Projetos pessoais, ideias experimentais e coisinhas que gosto de construir.</p>
        <nav>
            <ul v-for="project in projects" class="projects">
                <li class="card">
                    <img :src="project.img" alt="Imagem do Projeto" />
                    <div class="card-content">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </div>
                    <a :href="project.link" target="_blank" v-if="!(project.link).startsWith('/')">Ver Projeto</a>
                    <router-link :to="project.link" class="button" v-if="(project.link).startsWith('/')">Ver Projeto</router-link>
                </li>
            </ul>
        </nav>
        <h4>E mais uns mini-projetos no <a href="https://github.com/matheustorsani" target="_blank">GitHub</a>.</h4>
    </main>
</template>