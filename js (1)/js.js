function mostrarResp(){
    for(let i = 1; i <= 10; i++){
        var texto = 'parag.'+i;
        document.getElementById(texto).removeAttribute('hidden');
    }
}

verificaRespostas = () => {
    event.preventDefault();
    let resp1 = document.getElementsByName("resp1");
    let cont = 0;
    let erro = 0;
    if(resp1[0].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp2 = document.getElementsByName("resp2");
    event.preventDefault();
    if(resp2[1].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp3 = document.getElementsByName("resp3");
    event.preventDefault();
    if(resp3[3].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp4 = document.getElementsByName("resp4");
    event.preventDefault();
    if(resp4[2].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp5 = document.getElementsByName("resp5");
    event.preventDefault();
    if(resp5[2].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp6 = document.getElementsByName("resp6");
    event.preventDefault();
    if(resp6[0].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp7 = document.getElementsByName("resp7");
    event.preventDefault();
    if(resp7[1].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp8 = document.getElementsByName("resp8");
    event.preventDefault();
    if(resp8[3].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp9 = document.getElementsByName("resp9");
    event.preventDefault();
    if(resp9[2].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }

    let resp10 = document.getElementsByName("resp10");
    event.preventDefault();
    if(resp10[1].checked === true){
        cont = cont + 1;
    } else {
        erro = erro + 1;
    }
    alert ("Voce obteve " + cont + " acerto(s) e " + erro + " erro(s)!")

    mostrarResp();
}