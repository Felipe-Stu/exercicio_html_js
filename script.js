function calcular(){

var campoA=window.document.getElementById('campoA')
var campoB=window.document.getElementById('campoB')

//Agora vou transformar as variáveis em números
var campoANum=Number(campoA.value)
var campoBNum=Number(campoB.value)

//Por fim, monto a variável referente à resposta
var resposta=window.document.getElementById('resultado')

//Agora faço o IF
if (campoANum<campoBNum){
    resposta.innerHTML=`O Formulário é válido! Valor ${campoBNum}!`
} else {
    resposta.innerHTML=`O Formulário é inválido. Por favor, tentar novamente.`
}
}