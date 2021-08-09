class Pessoa {
  Nome: string;
  Sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.Nome = nome;
    this.Sobrenome = sobrenome;
  }
  NomeCompleto() {
    return `${this.Nome} ${this.Sobrenome}`;
  }
}

const pessoa = new Pessoa("Fernando", "Okuma");
console.log(pessoa.NomeCompleto());
