/*
1. Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
guarde cada um no seu respectivo array.

2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
opção escolhida pelo usuário.

3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas. Se as duas comparações forem válidas
retorne true se uma delas não for válida retorne false.

4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
então procure pelo nome no array de nomes e exclua ele e a senha correspondente
do outro varray, por fim organize o array para eliminar os espaços vazios.

5. Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
que o usuário pode escolher quando encerrar o programa conforme as opções e
que no login caso seja bem sucedido retorna uma mensagem “Login feito com
sucesso!” e em caso negativo “Nome ou senha incorretos!
*/



let nomes = []
let senhas = []
let indexGeral = 0
let opcao = "0"
let nome
let senha
let posicaoDoNome

Acao(opcao)

function Cadastrar(nomes, senhas) {
    nomes[indexGeral] = prompt("Cadastre um nome")
    senhas[indexGeral] = prompt("Cadastre uma senha")
    indexGeral++
}

function Acao(opcao) {
    opcao = prompt("O que deseja fazer? 1 para cadastrar, 2 para fazer login, 3 para excluir um cadastro ou 4 para encerrar o programa.")
    switch (opcao) {
        case "1":
            Cadastrar(nomes, senhas)
            Acao(opcao)
            break;
    
    
        case "2":
            nome = prompt("Insira um nome para fazer login")
            senha = prompt("Insira sua senha")
            Login(nome, senha)
            Acao(opcao)
            break;
    
    
        case "3":
            nome = prompt("Insira um nome para excluir seu respectivo login")
            ExcluirCadastro(nome, senha)
            Acao(opcao)
            break;
    
    
        case "4":
            alert("Programa encerrado!")
            break;
    
        default:
            alert("Essa opcao nao existe")
            break;
    
    
    }
}

function Login(nome, senha) {
    for (let i = 0; i < nomes.length; i++) {
        if (nome == nomes[i] && senha == senhas[i]) {
            alert("Login feito com sucesso")
        } else {
            alert("Nome ou senha incorretos")
        }
    }
}

function ExcluirCadastro(nome){
    posicaoDoNome = nomes.indexOf(nome)
    nomes.splice(posicaoDoNome, 1)
    senhas.splice(posicaoDoNome, 1)
    alert("Login excluido com sucesso")
}