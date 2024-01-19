const mario = document.querySelector('.mario')
const pipe = document.querySelector('.cano')
const over = document.querySelector('.game-over')
const oculto = document.querySelector ('.explica')
const casa = document.querySelector ('.house')



const jump = () => {
    mario.classList.add('pulo')
    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 500)
}

let gameStarted = false;

const play = () => {
    pipe.classList.add('play');
    gameStarted = true;
}



const ocultar = () => {
    oculto.classList.add('oculto')
}






let contador = 0;

const loop = setInterval(() =>{
    console.log(loop);
    if (gameStarted) {
        contador++;
    }
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 380 && pipePosition > 0 && marioPosition < 150){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/crashed-agile.png'; 
        mario.style.width = '250px';
        mario.style.left = '155px';
        over.style.display = 'flex';
        
        

        

        clearInterval(loop);

        document.getElementById('loopValue').innerHTML = `<p><strong>Se fodeu, trombrou <br />o Pedro Fahl no caminho</strong><br /><img src="./images/crashed-agile.png"><br />Atualize a página e tente novamente<br>Sua pontuação: ${contador}</p>`;
        
        
    }  else if (contador >= 2000){
        pipe.style.animation = 'none';
        pipe.style.left = `-700px`;
        casa.classList.add('animada');
        mario.classList.add('chegada');
        over.style.display = 'flex';

        clearInterval(loop);
        
        document.getElementById('loopValue').innerHTML = `<p><strong>parabéns voce chegou em segurança</strong><br>Sua pontuação: ${contador}<br /></p>`;
    }
    


}, 10)


document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === 'ArrowUp') {
      jump();
    }
  });
  

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      play();
      ocultar();
    }
  });
  


