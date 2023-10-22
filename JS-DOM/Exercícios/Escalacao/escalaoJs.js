function adicionarJogador() {

  const time = document.getElementById('time');

  const posicao = document.getElementById('position');

  const nome = document.getElementById('name');

  const camisa = document.getElementById('number');

  const jogador = document.createElement('li');

  jogador.innerText = nome.value + ': ' + posicao.value + '(' + camisa.value + ')'

  const confirmacao = confirm(

    "Você deseja confirmar a escalação desse jogador?\nNome: " +
    nome.value +

    "\nPosição: " +
    posicao.value +

    "\nCamisa: " +
    camisa.value
  );

  if (confirmacao) {

    jogador.id = "player-" + camisa.value;

    time.appendChild(jogador);

  }

  document.getElementById('position').value = ''
  document.getElementById('number').value = ''
  document.getElementById('name').value = ''

}

function removePlayer() {

  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?");

  if (confirmation) {

    document.getElementById("time").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}