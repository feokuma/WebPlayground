var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.Nome = nome;
        this.Sobrenome = sobrenome;
    }
    Pessoa.prototype.NomeCompleto = function () {
        return this.Nome + " " + this.Sobrenome;
    };
    return Pessoa;
}());
var pessoa = new Pessoa('Fernando', 'Okuma');
console.log(pessoa.NomeCompleto());
