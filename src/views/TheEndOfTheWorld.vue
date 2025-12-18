<script setup lang="ts">
/*
    Escrevi esse codigo em 2020, no ano novo.
    Para mim, foi o fim do mundo,
    pois eu estava desaminado, querendo mostrar algum valor.
    Hoje, revisitando esse codigo, vejo que ele tem valor sim.
    Ele me lembra que, mesmo nos momentos dificeis,
    eu posso criar algo significativo, pelo menos, para mim.
    E isso me da esperanca para o futuro.
    Obrigado, eu mesmo, por esse presente.

    Por mais que seja algo simples,
    ele representa um marco na minha jornada.
    Que eu possa continuar criando,
    mesmo quando o mundo parecer estar acabando.

    Você pode ver o projeto original baixando aqui:
    https://drive.google.com/file/d/1TblhRYrss1kR_OCZkdMCRjn53dqTbYi_/view?usp=sharing
*/
import { ref, onMounted, onUnmounted } from 'vue'

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
const year = ref('')
const loading = ref(true)

const nextYear = new Date().getFullYear() + 1
year.value = nextYear.toString()

const newYearDate = new Date(`January 01 ${nextYear} 00:00:00`)

const getTimeUnit = (unit: number) =>
    unit < 10 ? `0${unit}` : `${unit}`

let interval: number

const upCountDown = () => {
    const now = new Date()
    const diff = newYearDate.getTime() - now.getTime()

    days.value = getTimeUnit(Math.floor(diff / 1000 / 60 / 60 / 24))
    hours.value = getTimeUnit(Math.floor(diff / 1000 / 60 / 60) % 24)
    minutes.value = getTimeUnit(Math.floor(diff / 1000 / 60) % 60)
    seconds.value = getTimeUnit(Math.floor(diff / 1000) % 60)
}

onMounted(() => {
    upCountDown()
    interval = setInterval(upCountDown, 1000)
    setTimeout(() => (loading.value = false), 1000)
})

onUnmounted(() => {
    clearInterval(interval)
})
</script>

<template>
    <main class="teotw">
        <h1 class="newyear">Contagem regrassiva para o ano novo</h1>

        <div v-if="!loading" class="countdown">
            <div class="time">
                <h2>{{ days }}</h2>
                <small>dias</small>
            </div>
            <div class="time">
                <h2>{{ hours }}</h2>
                <small>horas</small>
            </div>
            <div class="time">
                <h2>{{ minutes }}</h2>
                <small>minutos</small>
            </div>
            <div class="time">
                <h2>{{ seconds }}</h2>
                <small>segundos</small>
            </div>
        </div>

        <img v-else src="https://cdn.glitch.com/ec5aae02-78bf-4aaf-8f5b-33c0c431f986%2Fspinner.gif?v=1609125396543"
            alt="Carregando..." />

        <footer>
            <div class="year">{{ year }}</div>
        </footer>


    </main>
</template>