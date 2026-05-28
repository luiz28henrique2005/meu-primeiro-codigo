async function entrarnabalada (nome, idade ){
    if (idade >= 21 ) {
        return `${nome} pode entrar na balada`; 
   }  
 return  `${nome} não pode entrar na balada`;
    }

    async function pegarfila() {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        let filaapi = await resposta.json();

        return filaapi.map(p => ({ nome: p.name, idade: p.idade }));
    }

    pegarfila().then(fila => {
        for (let pessoa of fila) {
            entrarnabalada(pessoa.nome, pessoa.idade).then(msg => console.log(msg));
        }
    });