function acessoliberado (nome, idade) {
    if (idade >= 18 ) {
        return ` ${nome} liberado`;
    } else {
        return ` ${nome} barrado`;
    }
}


       console.log(acessoliberado ("maria", 15))
        console.log (acessoliberado ("joão", 20))