const pessoas = ['fernando', 'lane', 'pedro']
const [pessoa1, ...outrasPessoas] = pessoas
console.log(pessoa1, outrasPessoas);

const fernando = {
    nome: 'fernando okuma',
    idade: 38
}
const {nome} = fernando
console.log(nome);
