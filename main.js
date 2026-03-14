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

function selecionarCalculo2(){
    let select = document.getElementById('select').value;
    document.querySelector('.calculo1').classList.add('hidden');
    document.querySelector('.calculo2').classList.add('hidden');
    
    if (select == "1"){
        document.querySelector('.calculo1').classList.remove('hidden');
    }
    else if(select == "2"){
        document.querySelector('.calculo2').classList.remove('hidden');
    }

}

function selecionarCalculo4(){
    let select = document.getElementById('select4').value;
    document.querySelector('.calc1').classList.add('hidden');
    document.querySelector('.calc2').classList.add('hidden');
    document.querySelector('.calc3').classList.add('hidden');
    document.querySelector('.calc4').classList.add('hidden');
    
    if (select == "1"){
        document.querySelector('.calc1').classList.remove('hidden');
    }
    else if(select == "2"){
        document.querySelector('.calc2').classList.remove('hidden');
    }
    else if(select == "3"){
        document.querySelector('.calc3').classList.remove('hidden');
    }
    else if(select == "4"){
        document.querySelector('.calc4').classList.remove('hidden');
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
    let soluvel  = document.getElementById('soluvel');
    let solubilidade = parseFloat(document.getElementById('solubilidade').value);
    let soluto = parseFloat(document.getElementById('soluto').value);
        let resposta = document.getElementById('respostaSolucao');
    if (solubilidade < 0 || soluto < 0){
        alert('Valores inválidos');
    }
    else{
        if (soluto < solubilidade){
            resposta.innerHTML = `A solução é insaturada. Está abaixo do limite.`;
            soluvel.classList.add('hidden');
        }
        else if (soluto == solubilidade){
            resposta.innerHTML = `A solução é saturada. A quantidade de soluto atingiu o limite.`;
            soluvel.classList.add('hidden');
        }    
        else if (soluto > solubilidade){
            soluvel.classList.remove('hidden');
            /*let precipitado = document.querySelector('input[name="precipitado"]:checked');
            if (precipitado){
                if (precipitado.value === '1'){
                    console.log(precipitado);
                resposta.innerHTML = `A solução é saturada com corpo de fundo. Dissolveu-se o máximo possível e o excesso foi para o fundo`;
            }
            else if (precipitado.value === '2'){
                console.log(precipitado);
                resposta.innerHTML = `A solução é supersaturada. O limite foi atingido, mas o excesso permanece dissolvido após o aquecimento e resfriamento.`;
            }
        }*/
            
        }
    }
}

function verificar(){
    let precipitado = document.querySelector('input[name="precipitado"]:checked').value;
    let resposta = document.getElementById('respostaSolucao');
            if (precipitado == '1'){
                console.log(precipitado);
                resposta.innerHTML = `A solução é saturada com corpo de fundo. Dissolveu-se o máximo possível e o excesso foi para o fundo`;
            }
            else if (precipitado == '2'){
                console.log(precipitado);
                resposta.innerHTML = `A solução é supersaturada. O limite foi atingido, mas o excesso permanece dissolvido após o aquecimento e resfriamento.`
            }
}

function verificarHidrocarboneto(){
    let formula = document.getElementById('formula').value.toUpperCase();
    let resultado;
    let heteroatomo;
    let respostaZero = document.getElementById('respostaZero');
    for(let i = 0;i < formula.length ;i++){
        if (formula[i] != 'C' && formula[i] != 'H' && isNaN(parseInt(formula[i] )) && formula[i] != ' ' && formula[i] != '(' && formula[i] != ')' && formula[i] != '.' && formula[i] != '-' && formula[i] != '+' ){
            resultado = false;
            heteroatomo = formula[i];
            break;
        }
        else{
            resultado = true;
        }
    }
    if(resultado == false){
        respostaZero.innerHTML = `Não é um hidrocarboneto, pois tem um elemento diferente de C ou H, se tem ${heteroatomo} não é hidrocarboneto`;
    }
    else if(resultado == true){
        respostaZero.innerHTML = 'É um hidrocarboneto, pois é formado apenas por C e H.';
    }
}

function determinarHidrocarboneto(){
    let carbono = parseFloat(document.getElementById('carbono').value);
    let hidrogenio = parseFloat(document.getElementById('hidrogenio').value);
    let resposta = document.getElementById('respostaHidrocarboneto');
    if (hidrogenio == 2 * carbono +2){
        resposta.innerHTML = `A molécula C${carbono}H${hidrogenio} é um alcano, pois tem fórmula Cn H2n+2`;
    }
    else if (hidrogenio == 2 * carbono ){
        resposta.innerHTML = `A molécula C${carbono}H${hidrogenio} é um alceno, pois tem fórmula Cn H2n`;
    }
    else if (hidrogenio == 2 * carbono - 2){
        resposta.innerHTML = `A molécula C${carbono}H${hidrogenio} é um alcino, pois tem fórmula Cn H2n-2`;
    }
    else{
        resposta.innerHTML = 'Confira a quantidades. A molécula pode conter mais de um ligação múltipla ou está incorreta'
    }
}

function calcularPotencial(){
    let ddp;
    let resposta = document.getElementById('respostaRedox');
    let elemento1 = document.getElementById('elemento1').value;
    let elemento2 = document.getElementById('elemento2').value;
    let potencial1 = parseFloat(document.getElementById('potencial1').value);
    let potencial2 = parseFloat(document.getElementById('potencial2').value);
    if (potencial1 > potencial2){
        ddp = potencial1 - potencial2;
        resposta.innerHTML = `O elemento ${elemento1} sofre redução e o elemento ${elemento2} sofre oxidação. O potencial da pilha é ${ddp}`;
    }
    else if(potencial2 > potencial1){
        ddp = potencial2 - potencial1;
        resposta.innerHTML = ` elemento ${elemento2} sofre redução e o elemento ${elemento1} sofre oxidação. O potencial da pilha é ${ddp}`;
    }
    else if(potencial1 == potencial2){
        resposta.innerHTML = `Os potenciais são iguais, a reação não deve acontecer.`;
    }
    else{
        resposta.innerHTML = `Valores inválidos.`;
    }
}

function converterPH(){
    if(!document.querySelector('.calculo1.hidden')){
        let pH = parseFloat(document.getElementById('pH').value);
    let resposta = document.getElementById('respostapH');
    let pOH = 14 - pH;
    resposta.innerHTML = `O valor do pOH é ${pOH} quando o pH é ${pH}`;
    console.log(`O valor do pOH é ${pOH} quando o pH é ${pH}`);
    }
    else if(!document.querySelector('.calculo2.hidden')){
        let pOH = parseFloat(document.getElementById('pOH').value);
    let resposta = document.getElementById('respostapH');
    let pH = 14 - pOH;
    resposta.innerHTML = `O valor do pH é ${pH} quando o pOH é ${pOH}`;
    }
}

function calcularPH(){
    if(!document.querySelector('.calc1.hidden')){
        let multiplicador = parseFloat(document.getElementById('multiplicador').value);
        let expoente = parseFloat(document.getElementById('expoente').value);
        let pH = -Math.log10(multiplicador*(10**expoente));
        let respostaCalculoPH = document.getElementById('respostaCalculoPH');
        respostaCalculoPH.innerHTML = `O valor do pH é ${pH.toFixed(2)}`;
    }
    else if(!document.querySelector('.calc2.hidden')){
        let multiplicador0 = parseFloat(document.getElementById('multiplicador0').value);
        let expoente0 = parseFloat(document.getElementById('expoente0').value);
        let pOH = -Math.log10(multiplicador0*(10**expoente0));
        let respostaCalculoPH = document.getElementById('respostaCalculoPH');
        respostaCalculoPH.innerHTML = `O valor do pOH é ${pOH.toFixed(2)}`;
    }
    else if(!document.querySelector('.calc3.hidden')){
        let pH = parseFloat(document.getElementById('valorPH').value);
        let concentracaoH = Math.pow(10, -pH).toExponential(2);
        let partes = concentracaoH.split('e');
        let multiplicadorConcentracao = partes[0];
        let expoenteConcentracao = partes[1];
        let respostaCalculoPH = document.getElementById('respostaCalculoPH');
        respostaCalculoPH.innerHTML = `O valor da concentração de H+ é ${multiplicadorConcentracao} x 10 ${expoenteConcentracao}`;
    }
    else if(!document.querySelector('.calc4.hidden')){
        let pOH = parseFloat(document.getElementById('valorPOH').value);
        let concentracaoOH = Math.pow(10, -pOH).toExponential(2);
        let partes = concentracaoOH.split('e');
        let multiplicadorConcentracao = partes[0];
        let expoenteConcentracao = partes[1];
        let respostaCalculoPH = document.getElementById('respostaCalculoPH');
        respostaCalculoPH.innerHTML = `O valor da concentração de H+ é ${multiplicadorConcentracao} x 10 ${expoenteConcentracao}`;
    }
}



function virarCard(card){
    let ladoCartao = document.querySelector('card');
    let perguntaCard = card.querySelector('.pergunta');
    let respostaCard = card.querySelector('.resposta');
    if(respostaCard.classList.contains('hidden')){
        respostaCard.classList.remove('hidden');
    }
    else{
        respostaCard.classList.add('hidden');
    }
}

function selecionarEletronMenos2(){
    let select = document.getElementById('selectMenos2').value;
    document.getElementById('semEletronMenos2').classList.add('hidden');
    document.getElementById('eletronMaisMenos2').classList.add('hidden');
    document.getElementById('eletronMenosMenos2').classList.add('hidden');
    document.getElementById('doisEletronsMenos2').classList.add('hidden');
    
    if (select == "0"){
        document.getElementById('semEletronMenos2').classList.remove('hidden');
    }
    else if(select == "1"){
        document.getElementById('eletronMaisMenos2').classList.remove('hidden');
    }
    else if(select == "2"){
        document.getElementById('eletronMenosMenos2').classList.remove('hidden');
    }
    else if(select == "3"){
        document.getElementById('doisEletronsMenos2').classList.remove('hidden');
    }
}

function selecionarEletronMenos1(){
    let select = document.getElementById('selectMenos1').value;
    document.getElementById('semEletronMenos1').classList.add('hidden');
    document.getElementById('eletronMaisMenos1').classList.add('hidden');
    document.getElementById('eletronMenosMenos1').classList.add('hidden');
    document.getElementById('doisEletronsMenos1').classList.add('hidden');
    
    if (select == "0"){
        document.getElementById('semEletronMenos1').classList.remove('hidden');
    }
    else if(select == "1"){
        document.getElementById('eletronMaisMenos1').classList.remove('hidden');
    }
    else if(select == "2"){
        document.getElementById('eletronMenosMenos1').classList.remove('hidden');
    }
    else if(select == "3"){
        document.getElementById('doisEletronsMenos1').classList.remove('hidden');
    }
}

function selecionarEletron0(){
    let select = document.getElementById('select0').value;
    document.getElementById('semEletron0').classList.add('hidden');
    document.getElementById('eletronMais0').classList.add('hidden');
    document.getElementById('eletronMenos0').classList.add('hidden');
    document.getElementById('doisEletrons0').classList.add('hidden');
    
    if (select == "0"){
        document.getElementById('semEletron0').classList.remove('hidden');
    }
    else if(select == "1"){
        document.getElementById('eletronMais0').classList.remove('hidden');
    }
    else if(select == "2"){
        document.getElementById('eletronMenos0').classList.remove('hidden');
    }
    else if(select == "3"){
        document.getElementById('doisEletrons0').classList.remove('hidden');
    }
}

function selecionarEletronMais1(){
    let select = document.getElementById('selectMais1').value;
    document.getElementById('semEletronMais1').classList.add('hidden');
    document.getElementById('eletronMaisMais1').classList.add('hidden');
    document.getElementById('eletronMenosMais1').classList.add('hidden');
    document.getElementById('doisEletronsMais1').classList.add('hidden');
    
    if (select == "0"){
        document.getElementById('semEletronMais1').classList.remove('hidden');
    }
    else if(select == "1"){
        document.getElementById('eletronMaisMais1').classList.remove('hidden');
    }
    else if(select == "2"){
        document.getElementById('eletronMenosMais1').classList.remove('hidden');
    }
    else if(select == "3"){
        document.getElementById('doisEletronsMais1').classList.remove('hidden');
    }
}

function selecionarEletronMais2(){
    let select = document.getElementById('selectMais2').value;
    document.getElementById('semEletronMais2').classList.add('hidden');
    document.getElementById('eletronMaisMais2').classList.add('hidden');
    document.getElementById('eletronMenosMais2').classList.add('hidden');
    document.getElementById('doisEletronsMais2').classList.add('hidden');
    
    if (select == "0"){
        document.getElementById('semEletronMais2').classList.remove('hidden');
    }
    else if(select == "1"){
        document.getElementById('eletronMaisMais2').classList.remove('hidden');
    }
    else if(select == "2"){
        document.getElementById('eletronMenosMais2').classList.remove('hidden');
    }
    else if(select == "3"){
        document.getElementById('doisEletronsMais2').classList.remove('hidden');
    }
}

function determinarTermo(){
    let mlMenos2, mlMenos1, ml0, mlMais1, mlMais2;
    let msMenos2, msMenos1, ms0, msMais1, msMais2;
    
    //Valores do Orbital -2
    let orbitalMenos2 = document.getElementById('selectMenos2').value;
    if(orbitalMenos2 == "0"){
        mlMenos2 = 0;
        msMenos2 = 0;
    }
    else if(orbitalMenos2 == "1"){
        mlMenos2 = -2;
        msMenos2 = 0.5;
    }
    else if(orbitalMenos2 == "2"){
        mlMenos2 = -2;
        msMenos2 = -0.5;
    }
    else if(orbitalMenos2 == "3"){
        mlMenos2 = -4;
        msMenos2 = 0;
    }

    //Valores do Orbital -1
    let orbitalMenos1 = document.getElementById('selectMenos1').value;
    if(orbitalMenos1 == "0"){
        mlMenos1 = 0;
        msMenos1 = 0;
    }
    else if(orbitalMenos1 == "1"){
        mlMenos1 = -1;
        msMenos1 = 0.5;
    }
    else if(orbitalMenos1 == "2"){
        mlMenos1 = -1;
        msMenos1 = -0.5;
    }
    else if(orbitalMenos1 == "3"){
        mlMenos1 = -2;
        msMenos1 = 0;
    }

    //Valores do Orbital 0
    let orbital0 = document.getElementById('select0').value;
    if(orbital0 == "0"){
        ml0 = 0;
        ms0 = 0;
    }
    else if(orbital0 == "1"){
        ml0 = 0;
        ms0 = 0.5;
    }
    else if(orbital0 == "2"){
        ml0 = 0;
        ms0 = -0.5;
    }
    else if(orbital0 == "3"){
        ml0 = 0;
        ms0 = 0;
    }

    //Valores do Orbital +1
    let orbitalMais1 = document.getElementById('selectMais1').value;
    if(orbitalMais1 == "0"){
        mlMais1 = 0;
        msMais1 = 0;
    }
    else if(orbitalMais1 == "1"){
        mlMais1 = 1;
        msMais1 = 0.5;
    }
    else if(orbitalMais1 == "2"){
        mlMais1 = 1;
        msMais1 = -0.5;
    }
    else if(orbitalMais1 == "3"){
        mlMais1 = 2;
        msMais1 = 0;
    }

    //Valores do Orbital +2
    let orbitalMais2 = document.getElementById('selectMais2').value;
    if(orbitalMais2 == "0"){
        mlMais2 = 0;
        msMais2 = 0;
    }
    else if(orbitalMais2 == "1"){
        mlMais2 = 2;
        msMais2 = 0.5;
    }
    else if(orbitalMais2 == "2"){
        mlMais2 = 2;
        msMais2 = -0.5;
    }
    else if(orbitalMais2 == "3"){
        mlMais2 = 4;
        msMais2 = 0;
    }

    let S = msMenos2 + msMenos1 + ms0 + msMais1 + msMais2;
    if (S < 0){
        S = Math.sqrt((S**2));
    }
    let L = mlMenos2 + mlMenos1 + ml0 + mlMais1 + mlMais2;
    let multiplicidade = 2*S + 1;
    if (multiplicidade <= -1){
        multiplicidade = multiplicidade * -1;
    }
    if (L <= -1){
        L = L * -1;
    }
    let termo;
    if(L == 0){
        termo = "S";
    }
    else if(L == 1){
        termo = "P";
    }
    else if(L == 2){
        termo = "D";
    }
    else if(L == 3){
        termo = "F";
    }
    else if(L == 4){
        termo = "G";
    }
    else if(L == 5){
        termo = "H";
    }
    else if(L == 6){
        termo = "I";
    }
    else if(L == 7){
        termo = "J";
    }
    else if(L == 8){
        termo = "K";
    }
    else if(L == 9){
        termo = "L";
    }
    else if(L == 10){
        termo = "M";
    }
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = `O termo espectroscópico para essa <sup>${multiplicidade}</sup> ${termo}`;
}

function calcularAtomicoMassa(){
    let proton, neutron, massa, atomico, eletron, resposta;
    if(!document.querySelector('.calculo1.hidden')){
        proton = parseInt(document.getElementById('protons').value);
        neutron = parseInt(document.getElementById('neutrons').value);
        let Z = proton;
        let A = proton + neutron;
        resposta = document.getElementById('resposta');
        resposta.innerHTML = `O número atômico é ${Z}. O número de massa é ${A}.`;
    }
    else if(!document.querySelector('.calculo2.hidden')){
        massa = parseInt(document.getElementById('massa').value);
        atomico = parseInt(document.getElementById('atomico').value);
        let p = atomico;
        let n = massa - atomico;
        resposta = document.getElementById('resposta');
        resposta.innerHTML = `O número de prótons é ${p}. O número de nêutrons é ${n}.`;
    }
}