//Estudando javaScript
var carName = "volvo";

//Ocultando elementos HTML
document.getElementsById("demo").style.display ="none";


//Aletrar conteudo HTML
document.getElementById("demo_1").innerHTML= "hello Java Script";


//alterando estilos HTML(CSS) tamanho da fonte
document.getElementById("demo_2").style.fontSize = "35px";


//mostrando elementos HTML ocultos alterando o display
document.getElementById("demo_3").style.display = "block";


/*Em JavaScript os scripts podem ser referenciados e colocados na seção <head> ou <body>, de uma página HTML, ou em ambos. para sincronizar o Html e js utilizaremos no (index.HTML <body>) o seguinte comando <script src="javaScriptStudy.js"></script>*/



//Funções e eventos JavaScript
//Um JavaScript functioné um bloco de código JavaScript, que pode ser executado quando "chamado".
function myFunctionp() {
    document.getElementById("demo_4").innerHTML = "Paragrafo mudou.";
}

//Usando window.alert() Você pode usar uma caixa de alerta para exibir dados:
window.alert()


//Usando console.log() Para fins de depuração, você pode chamar o console.log()método no navegador para exibir dados.
console.log()


/*Declaracoes JavaScript são Valores, operadores, expressões, palavras-chave e comentários. palavras-chave "var" e "let" para "const" declarar variáveis

var x;
var y;
let z;

x = 5;
y = 6;
z = x + y;


let person = "Marcelo", carName = "Volvo", price = 200;

---- ou ----

let person = "Marcelo",
carName = "Volvo",
price = 200;


*/


//Blocos de código JavaScript, Um lugar onde você encontrará instruções agrupadas em blocos é nas funções JavaScript:
function myFunction() {
    document.getElementById("demo_5").innerHTML = "Hello World!";
    document.getElementById("demo_6").innerHTML = "Tudo Bem?";
}


/*
Observação !!!

A palavra-chave var foi usada em todo o código JavaScript de 1995 a 2015.
As palavras-chave let e const foram adicionadas ao JavaScript em 2015.
A palavra-chave var só deve ser usada em código escrito para navegadores mais antigos.

Quando usar var, let ou const?

1. Sempre declare variáveis
2. Sempre use constse o valor não deve ser alterado
3. Sempre use constse o tipo não deve ser alterado (Arrays e Objetos)
4. Só use letse não puder usarconst
5. Use apenas varse você DEVE oferecer suporte a navegadores antigos.

*/


/*
Cifrão JavaScript $
Como o JavaScript trata o cifrão como uma letra, os identificadores que contêm $ são nomes de variáveis ​​válidos:

let $ = "ola mundo";
let $$$ = 2;
let $myMoney = 5;

Usar o cifrão não é muito comum em JavaScript, mas os programadores profissionais costumam usá-lo como um alias para a função principal em uma biblioteca JavaScript.

Na biblioteca JavaScript jQuery, por exemplo, a função main $é usada para selecionar elementos HTML. Em jQuery $("p");significa "selecionar todos os elementos p".

*/

/*O que é bom?

let e const tem escopo de bloco .
let e const não pode ser redeclarado .
let e const deve ser declarado antes do uso.
let e const não se vincula a this.
let e não const são içados .
O que não é bom?
var não precisa ser declarado.
var está içado.
var se liga a isso.
*/

