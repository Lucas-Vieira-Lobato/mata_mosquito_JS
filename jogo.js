
// INICIO PRIMEIRO PROJECT
    var altura = 0
    var largura = 0
    var vidas = 1 //variavel de incrementação
    var tempo = 15 //segundos

    var criaMosquitoTempo = 1500 //variavel que determina o tempo dos niveis

    var nivel = window.location.search //pegando o que vem depois da url
    nivel = nivel.replace('?', '') //substituindo o '?' por '' para capturar apenas o nivel de dificuldade
    
    if(nivel === 'normal'){
        //1500
        criaMosquitoTempo = 1500 //atualizando variavel que determina o tempo dos niveis
    }else if(nivel === 'dificil'){
        //1000
        criaMosquitoTempo = 1000 //atualizando variavel que determina o tempo dos niveis
    }else if(nivel === 'bruninho'){
        //850
        criaMosquitoTempo = 850 //atualizando variavel que determina o tempo dos niveis
    }

//definindo o tamanho do palco do jogo
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

     console.log(largura, altura)
}
ajustaTamanhoPalcoJogo() //chamando a função para sempre ajustar a tela do jogo

//criando o cronometro
var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro) //quebrando o cronometro
        clearInterval(criaMosquito) //quebrando a criação de novas imagens
        window.location.href = 'vitoria.html' //redirecionando para a página vitória
    }else{
        document.getElementById('cronometro').innerHTML = tempo//Inner é o que está dentro das tags
    }
} ,1000)

//criando posições randomicas
function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    
        console.log('Elemento selecionado: v' + vidas)
        if (vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }
        else {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png" //alterando o src, puxando assim o coração vazio
            vidas++ //incremento para identificar os id's
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 //definindo posição aleatoria e arredondando para baixo
    var posicaoY = Math.floor(Math.random() * altura) - 90 //definindo posição aleatoria e arredondando para baixo

    //operador ternario
    posicaoX = posicaoX < 0 ? 0 : posicaoX //se posiçãoX é menor que 0, se for, recebe 0, se não, recebe ela mesma
    posicaoY = posicaoY < 0 ? 0 : posicaoY //se posiçãoY é menor que 0, se for, recebe 0, se não, recebe ela mesma

    console.log(posicaoX, posicaoY)
    
    //criar o elemento HTML - img
    var mosquito = document.createElement('img')
        mosquito.src = 'imagens/mosquito.png' //definindo a imagem
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()//atribuindo a class
        mosquito.style.left = posicaoX + 'px' //mudando sua posição X / left - right
        mosquito.style.top = posicaoY + 'px'  //mudando sua posição Y / top - bottom
        mosquito.style.position = 'absolute'  //definindo posição absoluta para atribuir suas posições
        mosquito.id = 'mosquito' 
        mosquito.onclick = function(){
            this.remove() //ajusta o contexto de um determinado atributo ou método //remove

            //caso o elemento for clicado, vai apenas remover o mosquito e não acontecerá nada
        }
    
        document.body.appendChild(mosquito)

}
//definição do tamanho aleatorio
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3); //definindo tamanho aleatorio e arredondando para baixo | entre 0,1,2
    console.log( 'Tamanho ' + classe) 

    switch(classe){
        case 0:     //aplicando a classe de mosquito1
            return 'mosquito1'

        case 1:     //aplicando a classe de mosquito2
            return 'mosquito2'
        
        case 2:     //aplicando a classe de mosquito3
            return 'mosquito3'
    }
}

//criando o lado aleatorio // se o mosquito olha para a esquerda ou direita
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2); //definindo lado aleatorio e arredondando para baixo | entre 0 e 1
    console.log('Lado ' + classe)
    switch(classe){
        case 0:     //aplicando a classe de lado A - esquerda
            return 'ladoA'

        case 1:     //aplicando a classe de lado B - direita
            return 'ladoB'
    }
}


