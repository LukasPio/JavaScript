let contador = 1; // Contador para gerar nomes únicos

function adicionarTec() {
  const lista = document.getElementById('tecnologias');

  const tecnologia = document.createElement('li');

  const label = document.createElement('label');
  label.innerText = 'Nome: ';
  label.htmlFor = `tecName${contador}`;

  const input = document.createElement('input');
  input.type = 'text';
  input.id = `tecName${contador}`;

  const string = document.createElement('span');
  string.innerText = 'Tempo de experiência: ';

  const junior = criarRadio('0-2 anos', `exp${contador}`);
  const pleno = criarRadio('3-4 anos', `exp${contador}`);
  const senior = criarRadio('5+ anos', `exp${contador}`);

  const button = document.createElement('button');
  button.innerText = 'Remover';
  button.addEventListener('click', function () {
    tecnologia.remove();
  });

  tecnologia.appendChild(label);
  tecnologia.appendChild(input);
  tecnologia.appendChild(string);
  tecnologia.appendChild(junior);
  tecnologia.appendChild(pleno);
  tecnologia.appendChild(senior);
  tecnologia.appendChild(button);

  lista.appendChild(tecnologia);

  contador++;
}

function criarRadio(valor, name) {
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = name;
  radio.value = valor;

  const label = document.createElement('label');
  label.htmlFor = `${valor}${name}`;
  label.innerText = valor;

  const radioContainer = document.createElement('div');
  radioContainer.appendChild(radio);
  radioContainer.appendChild(label);

  return radioContainer;
}

function cadastrar() {
  const nome = document.getElementById('userName').value;

  const tecnologias = [];

  const lista = document.getElementById('tecnologias');
  const itens = lista.getElementsByTagName('li');

  for (let i = 0; i < itens.length; i++) {
    const item = itens[i];
    const inputNome = item.querySelector('input[type="text"]');
    const radios = item.querySelectorAll('input[type="radio"]');
    const selectedRadio = Array.from(radios).find(radio => radio.checked);

    if (inputNome && selectedRadio) {
      const nomeTec = inputNome.value;
      const exp = selectedRadio.value;

      const tecnologia = {
        Nome: nomeTec,
        Experiência: exp
      };

      tecnologias.push(tecnologia);
    }
  }

  const dev = {
    nomeUser: nome,
    tecnologias: tecnologias
  };

  const devs = []

  devs.push(dev)

  console.log(devs)

  document.getElementById("userName").value = ""; // Limpa o campo de nome

  const lita = document.getElementById("tecnologias");
  while (lita.firstChild) {
    lita.firstChild.remove(); // Remove todos os elementos filhos da lista de tecnologias
  }

  contador = 1; // Reinicia o contador para gerar nomes únicos
}

document.getElementById('dark').addEventListener('click', function () {
  document.body.style.backgroundColor = '#000000'
  document.body.style.color = '#FFFFFF'
})

function light() {
  document.body.style.color = '#000000'
  document.body.style.backgroundColor = '#FFFFFF'
}

function togle() {
  document.body.classList.toggle('light')

  document.body.classList.toggle('dark')
}

document.getElementById('togle').addEventListener('click', togle)

