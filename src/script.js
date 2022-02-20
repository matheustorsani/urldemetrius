window.onload = function() {
    const lang = navigator.language
    const information = document.getElementById('information')
    if (lang === "pt-BR") return information.innerHTML = 'Meu nome é Matheus Torsani, na internet conhecido como "demetrius". Sou um estudante focado em ser um Programador Full Stack :)'
}