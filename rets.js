let senha = window.prompt("Digite sua senha para entrar no site e ganhar 1000 robux:");
document.getElementById("confid").innerHTML = "Sua senha é: "+ senha;

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
    document.getElementById("span").innerHTML = idadeStr;
});


const btnEsferas = document.getElementById("addEsferas");
let totalEsferas = 0;
let conteuEsferas = "";
let esfera = '<div class="esfera"></div>';

btnEsferas.addEventListener("click", () => {
    totalEsferas = totalEsferas+1;
    console.log(totalEsferas);
    let conteuEsferas = "";
    for (let index=0; index < totalEsferas; index++){
        conteuEsferas = conteuEsferas + esfera;
    };
    document.getElementById("agrupaEsferas").innerHTML = conteuEsferas;
    switch (totalEsferas){
    case 1:
        document.getElementById("alertas").innerHTML = "Uma esfera!"
        break;
    case 2:
        document.getElementById("alertas").innerHTML = "Duas esferas!"
        break;
    case 3:
        document.getElementById("alertas").innerHTML = "Três esferas!"
        break;
    case 4:
        document.getElementById("alertas").innerHTML = "Várias esferas!"
        break;
    case 10:
        document.getElementById("alertas").innerHTML = "Enchendo o browser de esferas!"
        break;
    case 35:
        document.getElementById("alertas").innerHTML = "Maneira um pouco aí...."
        break;
    case 70:
        document.getElementById("alertas").innerHTML = "Tá exagerando."
        break;
    case 140:
        document.getElementById("alertas").innerHTML = "Pare com isso!"
        break;
    case 500:
        document.getElementById("alertas").innerHTML = "Você vai sobrecarregar o universo! Isso é gravíssimo! Pare!"
        break;
    case 1000:
        window.alert("Você acabou com o nosso estoque de esferas :/");
        window.close();
        break;
};
});

