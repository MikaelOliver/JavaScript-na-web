const estudante = {
    nome: "José Silva",
    idade : 32,
    cpf: 12312312312,
    turma: "JavaScript",
    bolsista: true,
    telefones: ['5511999999999','5511999999998'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
        
    }
}

alert(estudante.nome)

alert(estudante.estaAprovado(7))

