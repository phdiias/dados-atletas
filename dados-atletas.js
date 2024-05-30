// Criando a classe atleta
class Atleta {
    // Definindo o método constructor com os atributos
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calcularCategoria() {
    // Definindo a categoria usando if else
    let categoria = "";
        if (this.idade >= 9 && this.idade <= 11) {
            return categoria = "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return categoria = "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return categoria = "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return categoria = "Adulto";
        } else {
            return categoria = "Sem categoria";
        }
    }

    calcularIMC() {
        // Calculando IMC com a fórmula
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    // Passo-a-passo para calcular a média válida
    calcularMediaValida() {
        // Organizando as notas com o .sort()
        let notasOrganizadas = this.notas.sort(function(a, b) {
            return a - b;
        })
        // Cortando a menor e maior nota com o .slice(), depois de organizar em ordem crescente
        let notasCortadas = notasOrganizadas.slice(1, notasOrganizadas.length - 1);
        // Fazendo a soma da notas restantes com o .reduce()
        let soma = notasCortadas.reduce(function(total, atual) {
            return total + atual;
        }, 0)
        // Calculando a média das notas usando o .length() evitando Hardcoding
        let mediaNotas = soma / notasCortadas.length;

        return mediaNotas
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAltura() {
        return this.altura;
    }

    obtemNotasAtleta(notasOrganizadas) {
        // Aqui, optei por refazer o código usando o .sort() para ficar organizado no console
        notasOrganizadas = this.notas.sort(function(a, b) {
            return a - b;
        })
        // Usando o .join() para separar as notas por vírgula e espaço
        return notasOrganizadas.join(", ");
    }

    obtemCategoria() {
        return this.calcularCategoria();
    }

    obtemIMC() {
        return this.calcularIMC();
    }

    obtemMediaValida() {
        return this.calcularMediaValida();
    }
 }

 // Declarando uma instância
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
// Imprimindo resultado no console
console.log(`
Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAltura()}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média válida: ${atleta.obtemMediaValida()}
`);