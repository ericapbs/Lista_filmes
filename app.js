const filmes = require('./database')
// pegar o input da pessoa usuária 
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um filme?S/N ')
//Se for sim, mostrar as categorias disponíveis, perguntar qul categoria escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Terror', 'Ação', 'Aventura', 'Comédia', 'Policial')

    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

    const retorno = filmes.filter(filmes => filmes.categoria === entradaCategoria)

    console.table(retorno) 
} else {
    const filmesOrdenados = filmes.sort((a, b)=> a.duracao - b.duracao)
    console.log('Essas são todos os filmes disponíveis: ')
    console.table(filmesOrdenados)
    }
//Se for não, mostrar todos os livros em ordem crescente pela duracao   

