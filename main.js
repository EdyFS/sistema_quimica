fetch('header.html')
        .then(response => response.text())
            .then(data => document.getElementById('header').innerHTML = data);

        fetch('footer.html')
        .then(response => response.text())
            .then(data => document.getElementById('footer').innerHTML = data);
            
function determinarEstado(){
    let temperaturaFusao = parseFloat(document.getElementById('temperaturaFusao').value);
    let temperaturaEbulicao = parseFloat(document.getElementById('temperaturaEbulicao').value);
    let temperatura = parseFloat(document.getElementById('temperatura').value);
    if (temperaturaFusao >= temperaturaEbulicao){
        alert('A temperatura de fusão deve ser menor que a temperatura de ebulição');
    }
    else{
        if (temperatura < temperaturaFusao){
            alert(`A substância está no estado sólido a ${temperatura}°C`)
        }
        else if (temperatura > temperaturaFusao && temperatura < temperaturaEbulicao){
            alert(`A substância está no estado líquido a ${temperatura}°C`);
        }
        else if (temperatura > temperaturaEbulicao){
            alert(`A substância está no estado gasoso a ${temperatura}°C`);
            console.log(temperatura);
            console.log(temperaturaEbulicao);
        }
        else if (temperatura == temperaturaFusao){
            alert(`A substância está apresenta uma mistura entre os estados sólido e líquido a ${temperatura}°C`);
        }
        else if (temperatura == temperaturaEbulicao){
            alert(`A substância está apresenta uma mistura entre os estados líquido e gasoso a ${temperatura}°C`)
        }
    }
}

function selecionarCalculo(){
    let select = document.getElementById('select').value;
    document.querySelector('.calculo1').classList.add('hidden');
    document.querySelector('.calculo2').classList.add('hidden');
    document.querySelector('.calculo3').classList.add('hidden');
    if (select == "1"){
        document.querySelector('.calculo1').classList.remove('hidden');
    }
    else if(select == "2"){
        document.querySelector('.calculo2').classList.remove('hidden');
    }
    else if(select == "3"){
        document.querySelector('.calculo3').classList.remove('hidden');
    }

}

function calcularConcentracao(){
    let massa = "";
    let volume = "";
    let concentracao = "";
    /*let calculo = document.querySelectorAll('.calculoConcentracao');
    console.log(calculo);
    let tipo = calculo.classList[1];
    let selecionado = calculo.classList[2];
    console.log(tipo);
    console.log(selecionado);*/
    if (/*tipo == "calculo1" && selecionado != "hidden"*/ !document.querySelector('.calculo1.hidden')){
        massa = parseFloat(document.getElementById('massa').value);
        volume = parseFloat(document.getElementById('volume').value);
        console.log(massa);
        console.log(volume);
        concentracao = massa / volume;
        alert(`A concentração é ${concentracao}`); 
    } 
    else if (/*tipo == "calculo2" && selecionado != "hidden"*/ !document.querySelector('.calculo2.hidden')){
        concentracao = parseFloat(document.getElementById('concentracao').value);
        volume = parseFloat(document.getElementById('volume').value);
        console.log(concentracao);
        console.log(volume);
        massa = concentracao * volume;
        alert(`A massa é ${massa}`);
    }
    else if (/*tipo == "calculo3" && selecionado != "hidden"*/!document.querySelector('.calculo3.hidden')){
        massa = parseFloat(document.getElementById('massa').value);
        concentracao = parseFloat(document.getElementById('concentracao').value);
        console.log(massa);
        console.log(concentracao);
        volume = massa / concentracao;
        alert(`O volume é ${volume}`);
    }
}
