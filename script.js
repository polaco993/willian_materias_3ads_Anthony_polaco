// EXERCICIO 1
// Progressão Aritmética (PA) com limite
// Neste algoritmo, validamos se o limite é maior que o número inicial antes de executar o loop que gera a PA.

function gerarPA(inicio, razao, limite) {
    if (limite <= inicio) {
        return "Erro: O limite deve ser obrigatoriamente maior que o início.";
    }

    let pa = [];
    for (let i = inicio; i <= limite; i += razao) {
        pa.push(i);
    }
    
    return pa;
}

// Exemplo de uso: console.log(gerarPA(2, 3, 15));





// EXERCICIO 2
// Maior entre dois números
//Uma função simples usando o operador condicional (ternário) para verificar qual número é o maior.

function maiorNumero(num1, num2) {
    if (num1 === num2) {
        return "Os números são iguais.";
    }
    return num1 > num2 ? num1 : num2;
}

// Exemplo de uso: console.log(maiorNumero(10, 25));





// EXERCICIO 3
// Descidas no Futebol Americano (Touchdown)
// Premissa: Um campo da NFL tem 100 jardas. Saindo da "última jarda" do campo de defesa (linha de 1 jarda), faltam 99 jardas para o touchdown. Se o time avança 12 jardas a cada 3 descidas, ele avança em média 4 jardas por descida.

function descidasParaTouchdown(jardasParaAvancar = 99) {
    // 12 jardas em 3 descidas = média de 4 jardas por descida
    const jardasPorDescida = 12 / 3; 
    
    // Arredondamos para cima pois não existe "meia" descida
    const descidasNecessarias = Math.ceil(jardasParaAvancar / jardasPorDescida);
    
    return `São necessárias no mínimo ${descidasNecessarias} descidas para o Touchdown.`;
}

// Exemplo de uso: console.log(descidasParaTouchdown());





// EXERCICIO 4
// Proporção NBA x Campeonato Brasileiro
// Para comparar, o mais justo é calcular as pontuações proporcionalmente aos minutos jogados em cada modalidade.

function compararPontuacoes() {
    // Dados NBA
    const tempoNbaMinutos = 4 * 12; // 48 minutos
    const pontosNba = 200;
    const pontosPorMinutoNba = pontosNba / tempoNbaMinutos;

    // Dados Futebol
    const tempoFutebolMinutos = 96; // 90 min + 6 min (3 de acréscimo cada tempo)
    const golsFutebol = 2.53;
    const golsPorMinutoFutebol = golsFutebol / tempoFutebolMinutos;

    // Cálculo da diferença
    const diferencaPorMinuto = pontosPorMinutoNba - golsPorMinutoFutebol;
    const vezesMais = pontosPorMinutoNba / golsPorMinutoFutebol;

    return {
        pontosNbaPorMinuto: pontosPorMinutoNba.toFixed(3),
        golsFutebolPorMinuto: golsPorMinutoFutebol.toFixed(3),
        diferencaAbsolutaPorMinuto: diferencaPorMinuto.toFixed(3),
        proporcao: `A NBA marca aproximadamente ${vezesMais.toFixed(0)} vezes mais pontos por minuto que o futebol.`
    };
}

// Exemplo de uso: console.log(compararPontuacoes());





// EXERCICIO 5
// Tabuada customizada de Ashley
// Recebe o número desejado e o limite até onde a multiplicação deve ir.

function calcularTabuada(numero, limite) {
    let tabuada = [];
    for (let i = 1; i <= limite; i++) {
        tabuada.push(`${numero} x ${i} = ${numero * i}`);
    }
    return tabuada;
}

// Exemplo de uso: console.table(calcularTabuada(7, 15));





// EXERCICIO 6
// Fatorial de Kimberly
// Usa um loop simples para multiplicar os números em sequência decrescente/crescente.

function calcularFatorial(numero) {
    if (numero < 0) return "Não existe fatorial de número negativo.";
    if (numero === 0 || numero === 1) return 1;
    
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Exemplo de uso: console.log(calcularFatorial(5));





// EXERCICIO 7
// Positivo ou Negativo
// Um algoritmo condicional simples, prevendo também a entrada do número zero (que é neutro).

function verificarSinal(numero) {
    if (numero > 0) return "Positivo";
    if (numero < 0) return "Negativo";
    return "Zero";
}

// Exemplo de uso: console.log(verificarSinal(-15));





// EXERCICIO 8
// Média Escolar e Status
// Calcula a média e aplica a lógica condicional exigida.

function avaliarAluno(nota1, nota2, nota3, nota4) {
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    let status = "";

    if (media >= 70) {
        status = "Aprovado";
    } else if (media >= 50 && media <= 69) { // ou (media < 70) já que o if anterior filtra
        status = "Recuperação";
    } else {
        status = "Reprovado";
    }

    return `Média: ${media.toFixed(1)} - Status: ${status}`;
}

// Exemplo de uso: console.log(avaliarAluno(60, 50, 75, 40));





// EXERCICIO 9
// Reajuste Salarial
// Calcula de forma em cascata o salário do colaborador e imprime o demonstrativo completo.

function reajustarSalario(salarioAtual) {
    let percentual = 0;

    if (salarioAtual <= 280) {
        percentual = 20;
    } else if (salarioAtual <= 700) {
        percentual = 15;
    } else if (salarioAtual <= 1500) {
        percentual = 10;
    } else {
        percentual = 5;
    }

    const valorAumento = salarioAtual * (percentual / 100);
    const novoSalario = salarioAtual + valorAumento;

    console.log(`Salário antes do reajuste: R$ ${salarioAtual.toFixed(2)}`);
    console.log(`Percentual de aumento aplicado: ${percentual}%`);
    console.log(`Valor do aumento: R$ ${valorAumento.toFixed(2)}`);
    console.log(`Novo salário, após o aumento: R$ ${novoSalario.toFixed(2)}`);
}

// Exemplo de uso: reajustarSalario(1200);





// EXERCICIO 10
// Descobrir a idade de Fabio
// A média de 2 pessoas sendo 85 significa que a soma da idade delas é 170 (85 * 2). A média de 3 pessoas sendo 90 significa que a soma da idade de todas é 270 (90 * 3). Subtraindo uma soma da outra, descobrimos a idade do Fabio.

function calcularIdadeFabio() {
    const somaMarianaBeatriz = 85 * 2;
    const somaTodos = 90 * 3;
    
    const idadeFabio = somaTodos - somaMarianaBeatriz;
    
    return `A idade de Fabio é ${idadeFabio} anos.`;
}

// Exemplo de uso: console.log(calcularIdadeFabio());