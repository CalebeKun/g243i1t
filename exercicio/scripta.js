const Fila = (_locaSaida) =>{
    let locSaida = _locaSaida;
    let dados = [];
    const tamanho = () => dados.length;
    const estaVazia = () => dados.length < 1;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const desenfileirar = () => {
     dados.splice(0,1);
     imprimir();
    }
    const imprimir = () => {
        console.log(dados);
        dado_saida = "";
        for(let i = 0;  i < tamanho(); i++){
            dados_saida +=dados[i].id + "("+dados[i].itens+") ";
        }
        document.getElementById(locaSaida).innerHTML = dados;
    }
    return {
        enfileirar, desenfileirar
    }
}
const f1 = Fila('saidaFilaGeral');

const Cliente = (_id,_itens) =>{
    return {
        id:_id,
        itens: _itens
    }
}
const gerarItens = () => Math.floor(Math.random() * (10 - 3) + 2);
const tamanhoInicialFila = 15;
(function(){
    for(let i =1; i <= tamanhoInicialFila; i++){
        f1.enfileirar()
    }
})();
