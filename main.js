fetch('header.html')
        .then(response => response.text())
            .then(data => document.getElementById('header').innerHTML = data);

        fetch('footer.html')
        .then(response => response.text())
            .then(data => document.getElementById('footer').innerHTML = data);

            fetch('nav.html')
        .then(response => response.text())
            .then(data => document.getElementById('nav').innerHTML = data);
            

            function ativaMenu(){
                let menu = document.getElementById('menu');
                if (menu.classList.contains('desativa')){
                    menu.classList.remove('desativa');
                }
                else{
                    menu.classList.add('desativa')
                }
            }

function determinarEstado(){
    let temperaturaFusao = parseFloat(document.getElementById('temperaturaFusao').value);
    let temperaturaEbulicao = parseFloat(document.getElementById('temperaturaEbulicao').value);
    let temperatura = parseFloat(document.getElementById('temperatura').value);
    let resposta = document.getElementById('respostaEstadoFisico');
    if (temperaturaFusao >= temperaturaEbulicao){
        alert('A temperatura de fusão deve ser menor que a temperatura de ebulição');
    }
    else{
        if (temperatura < temperaturaFusao){
            //alert(`A substância está no estado sólido a ${temperatura}°C`)
            resposta.innerHTML = `A substância está no estado sólido a ${temperatura}°C. A temperatura é menor que a Temperatura de Fusão, ou seja, o material não derreteu ainda, está sólido.`;
        }
        else if (temperatura > temperaturaFusao && temperatura < temperaturaEbulicao){
            //alert(`A substância está no estado líquido a ${temperatura}°C`);
            resposta.innerHTML = `A substância está no estado líquido a ${temperatura}°C. A tempertaura é maior que a Temperatura de Fusão e já derreteu. Porém, é menor que a Temperatura de Ebulição, ainda não ferveu.`;
        }
        else if (temperatura > temperaturaEbulicao){
            //alert(`A substância está no estado gasoso a ${temperatura}°C. `);
            console.log(temperatura);
            console.log(temperaturaEbulicao);
            resposta.innerHTML = `A substância está no estado gasoso a ${temperatura}°C.A temperatura é maior que a Temperatura de ebulição, ou seja, já ferveu e virou vapor.`;
        }
        else if (temperatura == temperaturaFusao){
            //alert(`A substância está apresenta uma mistura entre os estados sólido e líquido a ${temperatura}°C`);
            resposta.innerHTML = `A substância está apresenta uma mistura entre os estados sólido e líquido a ${temperatura}°C. A substância está derretendo.`;
        }
        else if (temperatura == temperaturaEbulicao){
            //alert(`A substância está apresenta uma mistura entre os estados líquido e gasoso a ${temperatura}°C`);
            resposta.innerHTML = `A substância está apresenta uma mistura entre os estados líquido e gasoso a ${temperatura}°C. A substância está fervendo`
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

function limparCampos(){
    /*let inputs = document.querySelectorAll('input');
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }*/
   document.querySelectorAll('input').forEach(input => input.value = "");
   //document.querySelectorAll('form').forEach(form => form.reset());
    
}

function calcularConcentracao(){
    let massa;
    let volume;
    let concentracao;
    let resposta = document.getElementById('respostaConcentracao');
    /*let calculo = document.querySelectorAll('.calculoConcentracao');
    console.log(calculo);
    let tipo = calculo.classList[1];
    let selecionado = calculo.classList[2];
    console.log(tipo);
    console.log(selecionado);*/
    if (/*tipo == "calculo1" && selecionado != "hidden"*/ !document.querySelector('.calculo1.hidden')){
        let massaConcentracao = parseFloat(document.getElementById('massaConcentracao').value);
        let volumeConcentracao = parseFloat(document.getElementById('volumeConcentracao').value);
        console.log(massa);
        console.log(volume);
        concentracao = massaConcentracao / volumeConcentracao;
        //alert(`A concentração é ${concentracao}`);
        resposta.innerHTML = `A concentração é ${concentracao}. O resultado foi obtido pela divisão da massa ${massaConcentracao} pelo volume ${volumeConcentracao}`;
        
    } 
    else if (/*tipo == "calculo2" && selecionado != "hidden"*/ !document.querySelector('.calculo2.hidden')){
        let concentracaoMassa = parseFloat(document.getElementById('concentracaoMassa').value);
        let volumeMassa = parseFloat(document.getElementById('volumeMassa').value);
        console.log(concentracao);
        console.log(volume);
        massa = concentracaoMassa * volumeMassa;
        //alert(`A massa é ${massa}`);
        resposta.innerHTML = `A massa é ${massa}. Para o volume ${volumeMassa} são dissolvidos ${massa} para manter a concentração em ${concentracaoMassa}.`;
    }
    else if (/*tipo == "calculo3" && selecionado != "hidden"*/!document.querySelector('.calculo3.hidden')){
        let massaVolume = parseFloat(document.getElementById('massaVolume').value);
        let concentracaoVolume = parseFloat(document.getElementById('concentracaoVolume').value);
        console.log(massa);
        console.log(concentracao);
        volume = massaVolume / concentracaoVolume;
        //alert(`O volume é ${volume}`);
        resposta.innerHTML = `O volume é ${volume}. Essa é a quantidade de solução para dissolver ${massaVolume} e manter a concentração ${concentracaoVolume}.`;
    }
    
}

/*function calcularConcentracao() {
    // Obtendo os inputs diretamente
    let massaInput = document.getElementById('massa');
    let volumeInput = document.getElementById('volume');
    let concentracaoInput = document.getElementById('concentracao');

    let massa = parseFloat(massaInput?.value) || null;
    let volume = parseFloat(volumeInput?.value) || null;
    let concentracao = parseFloat(concentracaoInput?.value) || null;

    if (!document.querySelector('.calculo1.hidden')) {
        if (massa === null || volume === null || massa <= 0 || volume <= 0) {
            alert("Por favor, insira valores válidos!");
            return;
        }
        concentracao = massa / volume;
        alert(`A concentração é ${concentracao}`);
    } 
    else if (!document.querySelector('.calculo2.hidden')) {
        if (concentracao === null || volume === null || concentracao <= 0 || volume <= 0) {
            alert("Por favor, insira valores válidos!");
            return;
        }
        massa = concentracao * volume;
        alert(`A massa é ${massa}`);
    } 
    else if (!document.querySelector('.calculo3.hidden')) {
        if (massa === null || concentracao === null || massa <= 0 || concentracao <= 0) {
            alert("Por favor, insira valores válidos!");
            return;
        }
        volume = massa / concentracao;
        alert(`O volume é ${volume}`);
    }

    // 🔹 Limpa os inputs após o cálculo
    limparCampos();
}*/

function calcularDensidade(){
    let massa;
    let volume;
    let densidade;
    let resposta = document.getElementById('respostaDensidade');
    if (!document.querySelector('.calculo1.hidden')){
        let massaDensidade = parseFloat(document.getElementById('massaDensidade').value);
        let volumeDensidade = parseFloat(document.getElementById('volumeDensidade').value);
        densidade = massaDensidade / volumeDensidade;
        resposta.innerHTML = `A densidade é ${densidade}. O resultado foi obtido pela divisão da massa ${massaDensidade} pelo volume ${volumeDensidade}`;
    } 
    else if (!document.querySelector('.calculo2.hidden')){
        let densidadeMassa = parseFloat(document.getElementById('densidadeMassa').value);
        let volumeMassa = parseFloat(document.getElementById('volumeMassa').value);
        massa = densidadeMassa * volumeMassa;
        resposta.innerHTML = `A massa é ${massa}. Para o volume ${volumeMassa} são dissolvidos ${massa} para manter a concentração em ${densidadeMassa}.`;
    }
    else if (!document.querySelector('.calculo3.hidden')){
        let massaVolume = parseFloat(document.getElementById('massaVolume').value);
        let densidadeVolume = parseFloat(document.getElementById('densidadeVolume').value);
        volume = massaVolume / densidadeVolume;
        resposta.innerHTML = `O volume é ${volume}. Essa é a quantidade de solução para dissolver ${massaVolume} e manter a concentração ${densidadeVolume}.`;
    }
}

function determinarSolucao(){
    let solubilidade = parseFloat(document.getElementById('solubilidade').value);
    let soluto = parseFloat(document.getElementById('soluto').value);
        let resposta = document.getElementById('respostaEstadoFisico');
    if (solubilidade < 0 || soluto < 0){
        alert('Valores inválidos');
    }
    else{
        if (soluto < solubilidade){
            resposta.innerHTML = `A solução é insaturada. Está abaixo do limite.`;
        }
        else if (soluto == solubilidade){
            resposta.innerHTML = `A solução é saturada. A quantidade de soluto atingiu o limite.`;
        }
        else if (soluto > solubilidade){
            resposta.innerHTML = `A substância está no estado gasoso a ${temperatura}°C.A temperatura é maior que a Temperatura de ebulição, ou seja, já ferveu e virou vapor.`;
            if (temperatura == temperaturaFusao){
                resposta.innerHTML = `A substância está apresenta uma mistura entre os estados sólido e líquido a ${temperatura}°C. A substância está derretendo.`;
            }
            else if (temperatura == temperaturaEbulicao){
                resposta.innerHTML = `A substância está apresenta uma mistura entre os estados líquido e gasoso a ${temperatura}°C. A substância está fervendo`
            }
        }
    }
}

function determinarHidrocarboneto(){
    let carbono = parseFloat(document.getElementById('carbono').value);
    let hidrogenio = parseFloat(document.getElementById('hidrogenio').value);
    let resposta = document.getElementById('respostaHidrocarboneto');
    if (hidrogenio == 2 * carbono +2){
        resposta.innerHTML = `A molécula C${carbono}H${hidrogenio} é um alcano`;
    }
    else if (hidrogenio == 2 * carbono ){
        resposta.innerHTML = `A molécula C${carbono}H${hidrogenio} é um alceno`;
    }
    else if (hidrogenio == 2 * carbono - 2){
        resposta.innerHTML = `A molécula C${carbono}H${hidrogenio} é um alcino`;
    }
    else{
        resposta.innerHTML = 'Confira a quantidades. A molécula pode conter mais de um ligação múltipla ou está incorreta'
    }
}