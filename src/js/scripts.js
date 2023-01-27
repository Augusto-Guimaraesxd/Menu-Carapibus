var container = document.querySelector(".container-a")
var botao = document.getElementById("#botao")
var containerB = document.querySelector(".botao-camarao")
var botaoCam = document.getElementById("#botao-2")
var containerC = document.querySelector(".conteudo-botao")
var botaoCamEmp = document.getElementById("#botao-3")
var containerD = document.querySelector(".botao-isca")
var botaoIsca = document.getElementById("#botao-4")
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






