let vitorias = 100
let derrotas = 47
const resultado = nivelRanqueadas(vitorias, derrotas)

function nivelRanqueadas(vitorias, derrotas) {
    let saldoRankeadas = vitorias - derrotas
    let nivel
    
    if (saldoRankeadas < 10) {
        nivel = "Ferro"
    } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20) {
        nivel = "Bronze"
    } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50) {
        nivel = "Prata"
    } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80) {
        nivel = "Ouro"
    } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90) {
        nivel = "Diamante"
    } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100) {
        nivel = "Lendário"
    } else if (saldoRankeadas >= 101) {
        nivel = "Imortal"
    }

    return `O Herói tem saldo de ${saldoRankeadas} está no nível de ${nivel}`
}    

console.log(resultado);