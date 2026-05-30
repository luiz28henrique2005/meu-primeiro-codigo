 function avaliarDesempenho(nota) {
    if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 6) {
        return "Bom";
    } else if (nota <= 5) {
        return "Precisa melhorar";
 
}
    fetch('https://api.example.com/avaliacao')
        .then(response => response.json())
        .then(data => { 
            const nota = data.nota;
            const desempenho = avaliarDesempenho(nota);
            console.log(`A nota é ${nota} e o desempenho é ${desempenho}.`);
        })
        try {            const resultado = avaliarDesempenho(-1);
            console.log(resultado);
        } catch (error) {
            console.error("Erro ao avaliar desempenho:", error.message);
        }
     }