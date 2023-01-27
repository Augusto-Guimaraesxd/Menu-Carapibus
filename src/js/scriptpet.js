var container = document.querySelector(".container-a")
var botao = document.getElementById("#botao")
var containerB = document.querySelector(".botao-camarao")
var botaoCam = document.getElementById("#botao-2")
var containerC = document.querySelector(".conteudo-botao")
var botaoCamEmp = document.getElementById("#botao-3")
var containerD = document.querySelector(".botao-isca")
var botaoIsca = document.getElementById("#botao-4")
var fava = document.querySelector(".fava")
var botaoFava = document.getElementById("#botao-fava")
var frango = document.querySelector(".frango")
var botaoFrango = document.getElementById("#botao-frango")
var peixeFrito = document.querySelector(".peixe")
var botaoPeixe = document.getElementById("#botao-peixe")
var rubacao = document.querySelector(".rubacao")
var botaoRub = document.getElementById("#botao-rub")
function fecharDiv(){
    container.classList.toggle("hide")
}
function fecharDivCam(){
    containerB.classList.toggle("hide")
}
function fecharContC(){
    containerC.classList.toggle("hide")
}
function fecharContD(){
    containerD.classList.toggle("hide")
}
function fecharFava(){
    fava.classList.toggle("hide")
}
function fecharFrango(){
    frango.classList.toggle("hide")
}
function fecharPeixe(){
    peixeFrito.classList.toggle("hide")
}
function fecharRub(){
    rubacao.classList.toggle("hide")
}
botao.addEventListener("click",()=>{
    fecharDiv();

})
botaoCam.addEventListener("click",()=>{
    fecharDivCam();

})
botaoCamEmp.addEventListener("click",()=>{
    fecharContC();
})
botaoIsca.addEventListener("click",()=>{
    fecharContD();
})
botaoFava.addEventListener("click",()=>{
    fecharFava();
}) 
botaoFrango.addEventListener("click",()=>{
    fecharFrango();
})
botaoPeixe.addEventListener("click",()=>{
    fecharPeixe()
})
botaoRub.addEventListener("click",()=>{
    fecharRub()
})