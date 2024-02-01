function escrevaNome(nome){
        return 'Meu nome é: ' + nome;
}

function VerificadorIdade(idade){
    if (idade => 18) {
        console.log(escrevaNome('Tiago') + ' e tenho ' + idade + ' anos')
    } else {
        console.log(escrevaNome('TIago') + ' e tenho ' + idade + ' anos')
    }
}


VerificadorIdade(18)

