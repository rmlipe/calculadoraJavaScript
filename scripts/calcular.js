// VARIAVEL GLOBAL QUE BUSCA O ELEMENTO DO VISOR - INPUT READONLY DO HTML
let inputResultado = document.getElementById("inputCalculadora");

// OBJETO QUE REGISTRA OS VALORES E FUNÇÕES DE CÁLCULO
let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
   };

// AO CARREGAR A PÁGINA, ATRIBUI EVENTOS AOS BOTÕES POR MEIO DOS SEUS IDENTIFICADORES [IDS]

window.addEventListener("load", function () {
    atribuirEventos();
   })


function atribuirEventos() {
    //ATRIBUI EVENTOS AO NÚMEROS DA CALCULADORA
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);
    
    //ATRIBUI EVENTOS AOS BOTÕES DE OPERADORES, PONTO E RESULTADO
    document.getElementById("btnPonto").addEventListener("click", inserirNumero);
    document.getElementById("btnSoma").addEventListener("click", clicarOperador);
    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    document.getElementById("btnResultado").addEventListener("click", clicarResultado);
   }

// ADICIONA O NÚMERO NO VISOR
function inserirNumero() {
    // Se o valor não for um número, substitui pelo valor do conteúdo do botão
    if (isNaN(inputResultado.value)) {
        inputResultado.value = event.target.textContent;
    // Senão, adiciona o valor aos demais
    } else {
    // Se o valor for zero, substitui o valor do visor pelo número clicado
        if (inputResultado.value == 0) {
            inputResultado.value = event.target.textContent;
        // Senão adiciona o número aos digitos no visor
        } else {
            inputResultado.value += event.target.textContent;
        }
        }
   }

//OPERAÇÃO SOMA
function somar(valor1, valor2){
    return valor1 + valor2;
   }

//OPERAÇÃO SUBTRAÇÃO
function subtrair(valor1, valor2){
    return valor1 - valor2;
   }
   
//OPERAÇÃO MULTIPLICAÇÃO
function multiplicar(valor1, valor2){
    return valor1 * valor2;
   }

//OPERAÇÃO DIVISÃO
function dividir(valor1, valor2){
    if(valor2 === 0){
        return "Erro, não é possível dividir um número por zero!";
    }else{
        return valor1 / valor2;
    }
   }

// LIMPAR O VISOR E DADOS DE CÁLCULO
function limparDados() {
    inputResultado.value = "";
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
   }

// INSERIR PONTO DA CASA DECIMAL
function inserirPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }
   }

//ATRIBUI A FUNÇÃO DE ACORDO COM O TIPO DE OPERADOR
function atribuirOperacao(operador){
    if(operador === "+"){
        calculo.funcaoParaCalcular = somar;
    } else if(operador === "-"){
                calculo.funcaoParaCalcular = subtrair;
    } else if(operador === "*"){
                calculo.funcaoParaCalcular = multiplicar;
    } else {
                calculo.funcaoParaCalcular = dividir;
    }
   }

//ATUALIZA VALORES DE CÁLCULO
function clicarOperador() {
    if(!isNaN(inputResultado.value)){
    if(calculo.valorSalvo == null){
        calculo.valorSalvo = Number(inputResultado.value);
    }else if(calculo.funcaoParaCalcular != null){
                calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo,
                Number(inputResultado.value));
            }
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador;
   }

//EXIBE RESULTADO NO VISOR
function clicarResultado() {
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null){
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo,
        Number(inputResultado.value));
        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
   }
