window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('brunaoamigao').innerHTML = 'Esse site é mais otimizado se o usuario estiver utilizando um computador.';
        const brunao = document.getElementById(`brunaoamigao`)
        const demetrius = document.getElementById('demetrius')
        const gamingsetup = document.getElementById('gamingsetup')
        const content = document.getElementById('content')
        const social = document.getElementById('social')
        const redes = document.getElementById('redes')
        demetrius.style.paddingLeft = '48px';
        gamingsetup.style.paddingLeft = '48px';
        content.style.paddingLeft = '50px';
        social.style.paddingLeft = '0';
        redes.style.paddingLeft = '17px';
        brunao.style.paddingLeft = '40px';
    }
}


