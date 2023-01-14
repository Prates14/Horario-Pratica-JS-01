function carregar() {
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`

    if(hora >= 5 && hora <= 11) {
        imagem.src = 'img/manha.png'
        document.body.style.backgroundColor = '#f9d487'
    } else if (hora <= 18) {
        imagem.src = 'img/tarde.jpg'
        document.body.style.backgroundColor = '#ff8b3d'
    } else {
        imagem.src = 'img/noite.png'
        document.body.style.backgroundColor = '#170b2b'
    }

}
