function helloWorld() {
  console.log('Hello World'); // Hello World
  console.log(this); // window...
}

// Dentro de um objeto sempre referencia o proprio objeto

var santos = {
  pontes: 12,
  aeroportos: 0,
  times: 1,
  numeroPontes: function() {
    console.log('Existem ' + this.pontes + ' pontes em Santos!'); // 12
  }
}

// Como um construtor

var Cidade = function(nome, estado) {
  this.nome = nome || 'Santos'; // default para Santos
  this.estado = estado || 'São Paulo';
}

santos = new Cidade(); // Cidade {nome: 'Santos', estado: 'São Paulo'}
curitiba = new Cidade('Curitiba','Parana'); // Cidade {nome: 'Curitiba', estado: 'Parana'}