window.onload = function() {
    const lang = navigator.language
    const information = document.getElementById('information')
    if (lang === "pt-BR") return information.innerHTML = 'Meu nome é Matheus Torsani, na internet conhecido como "demetrius". Sou um estudante focado em ser um Programador Full Stack :)'
    information.innerHTML = 'My name is Matheus Torsani, known on the internet as "demetrius". Im a student focused on being a Full Stack Programmer :)'
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // coming soon, 
    }
}