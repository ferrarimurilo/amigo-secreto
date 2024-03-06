let membros = [];
let membrosSorteados = document.getElementById("lista-sorteio");
let numeroSorteios = 0;

function adicionar(){
    if(document.getElementById('nome-amigo').value==""){
        alert("Informe um nome de participante!")
    }else{
    if(membros.includes(document.getElementById('nome-amigo').value)){
        alert("O nome digitado já está na lista");
        return;
    }
        membros.push(document.getElementById('nome-amigo').value);
        document.getElementById('nome-amigo').value = "";
        console.log(membros);
        document.getElementById("lista-amigos").textContent = membros
        }
}

function reiniciar(){
    membros = [];
    document.getElementById("lista-amigos").textContent = "";
    membrosSorteados.innerHTML = "";
    numeroSorteios = 0;
}

function sortear(){
    if(membros.length<4){
        alert("Insira o nome de no mínimo 4 participantes");
        return;
    }
        numeroSorteios++;
        if(numeroSorteios>1){

        }else{
        embaralhar(membros);
        console.log(membros);
        for( i = 0; i < membros.length; i++){
            if(i+1 == membros.length){
                membrosSorteados.innerHTML = membrosSorteados.innerHTML + membros[i] + "-->" + membros[0]+'<br>';
            }else{
            membrosSorteados.innerHTML = membrosSorteados.innerHTML + membros[i] + "-->" + membros[i+1]+'<br>';
        }}}
}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}