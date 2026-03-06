//let senha = window.prompt("Digite sua senha para entrar no site e ganhar 1000 robux:");
//document.getElementById("confid").innerHTML = "Sua senha é: "+ senha;

const btnTrocaChapeu = document.getElementById("trocaChapeu");

btnTrocaChapeu.addEventListener("click", () => {
    let chapeu = document.getElementById("chapeu");
    let letra = document.getElementById("chapeuLetra");
    if(chapeu.className==="Mario"){
        chapeu.classList.add("Luigi");
        chapeu.classList.remove("Mario");
    }else{
        chapeu.classList.add("Mario");
        chapeu.classList.remove("Luigi");
    }
    if(letra.innerText==="M"){
        document.getElementById("chapeuLetra").innerText = "L"
        letra.classList.add("Luigi");
        letra.classList.remove("Mario");
    }else{
        document.getElementById("chapeuLetra").innerText = "M"
        letra.classList.add("Mario");
        letra.classList.remove("Luigi");
    }
});


const btnMais1 = document.getElementById("mais1");
btnMais1.addEventListener("click", () => {
    let idade = document.getElementById("input").value;
    let idadeInt = parseInt(idade) + 1;
    let idadeStr = idadeInt.toString();
    document.getElementById(span).innerHtml = idadeStr;
});