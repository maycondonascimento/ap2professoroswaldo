
function ativ01(p1,p2,p3) {
    soma = 0;
    media = 0;
    if (p1 == "" | p2 =="" | p3=="") {
        alert("Primeiro informe os 3 números solicitados nos campos acima");
        document.getElementById('at01nr1').focus();
        exit;
    }
    soma = ((parseFloat(p1)+parseFloat(p2))+parseFloat(p3)).toFixed(2);
    media = (soma/3).toFixed(2);
    
    var divElement = document.querySelector('#ativ01');
    divElement.innerHTML = '';
    var labelElement = document.createElement('label');
    var textElement = document.createTextNode('A média arimética dos números inseridos é: '+media);
    labelElement.appendChild(textElement);
    divElement.appendChild(labelElement);
}

function ativ02(p1,p2) {
    novosal = 0;

    if (p1 == "" | p2 =="") {
        alert("Primeiro informe o nome e salário atual do funcionário");
        document.getElementById('at02nomefun').focus();
        exit;
    }
    novosal = (((parseFloat(p2)*10)/100)+parseFloat(p2)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    var divElement = document.querySelector('#ativ02');
    divElement.innerHTML = '';
    var labelElement = document.createElement('label');
    var textElement = document.createTextNode('O novo salário de: '+p1 + ' é ' + novosal);
    labelElement.appendChild(textElement);
    divElement.appendChild(labelElement);
}

function ativ03(p1,p2) {
    var c = 0;

    if (p1 == "" | p2 =="") {
        alert("Primeiro informe os dois números solicitados acima!");
        document.getElementById('at03nr1').focus();
        exit;
    }

    if (parseInt(p1) == parseInt(p2)){
        c = parseInt(p1) + parseInt(p2);

        var divElement = document.querySelector('#ativ03');
        divElement.innerHTML = '';
        var labelElement = document.createElement('label');
        var textElement = document.createTextNode('A soma de ' + p1 + ' e ' + p2 + ' é ' + c);
        labelElement.appendChild(textElement);
        divElement.appendChild(labelElement);
    }
    else {
        c = parseInt(p1) * parseInt(p2);

        var divElement = document.querySelector('#ativ03');
        divElement.innerHTML = '';
        var labelElement = document.createElement('label');
        var textElement = document.createTextNode('A multiplicação de ' + p1 + ' e ' + p2 + ' é ' + c);
        labelElement.appendChild(textElement);
        divElement.appendChild(labelElement);
    }
    
}

function ativ04(p1,p2) {
    var total = 0;
    var vlrprest = 0;

    if (p1 == "" | p2 =="" | p2=="1") {
        alert("Primeiro informe preço a vista do produto e nro de parcelas nos campos indicados acima!");
        document.getElementById('at04preco').focus();
        exit;
    }

    if (parseInt(p2) == 3) {
        total =  (((parseFloat(p1)*10)/100)+parseFloat(p1)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        vlrprest = ((((parseFloat(p1)*10)/100)+parseFloat(p1))/3).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

        var divElement = document.querySelector('#ativ04');
        divElement.innerHTML = '';
        var labelElement = document.createElement('label');
        var textElement = document.createTextNode('Total a pagar é: ' + total + '. O valor da prestação mensal é de ' + vlrprest);
        labelElement.appendChild(textElement);
        divElement.appendChild(labelElement);
    }
    else {
        total =  (((parseFloat(p1)*20)/100)+parseFloat(p1)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        vlrprest = ((((parseFloat(p1)*20)/100)+parseFloat(p1))/5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

        var divElement = document.querySelector('#ativ04');
        divElement.innerHTML = '';
        var labelElement = document.createElement('label');
        var textElement = document.createTextNode('Total a pagar é: ' + total + '. O valor da prestação mensal é de ' + vlrprest);
        labelElement.appendChild(textElement);
        divElement.appendChild(labelElement);
    }
    
}


function ativ05(p1,p2,p3,p4) {
    media = 0;

    if (p1 == "" | p2 =="" | p3 =="" | p4 =="") {
        alert("Primeiro informe o nome e as 3 notas do aluno nos campos indicados acima!");
        document.getElementById('at05nome').focus();
        exit;
    }
    media = (((parseFloat(p2)+parseFloat(p3))+parseFloat(p4))/3).toFixed(2);
    
    if (media >= 8) {
        var divElement = document.querySelector('#ativ05');
    divElement.innerHTML = '';
    var labelElement = document.createElement('label');
    var textElement = document.createTextNode('O aluno '+p1 + ' foi aprovado com média de ' + media);
    labelElement.appendChild(textElement);
    divElement.appendChild(labelElement);
    }
    else {
        var divElement = document.querySelector('#ativ05');
        divElement.innerHTML = '';
        var labelElement = document.createElement('label');
        var textElement = document.createTextNode('O aluno '+p1 + ' foi reprovado com média de ' + media);
        labelElement.appendChild(textElement);
        divElement.appendChild(labelElement);
    }
}

function ativ06(p1,p2,p3) {
    resultado = 0;

    if (p1 == "" | p2 =="" | p3 =="") {
        alert("Primeiro informe todos os campos indicados acima!");
        document.getElementById('at06nr1').focus();
        exit;
    }
    if (parseInt(p3) > 3) {
        alert("Digite um código válido (1,2 ou 3) - Veja tabela ao lado do campo!");
        exit;
    }
    else {
        if (parseInt(p3) == 1){
            resultado = (parseInt(p1)+parseInt(p2));
            var divElement = document.querySelector('#ativ06');
            divElement.innerHTML = '';
            var labelElement = document.createElement('label');
            var textElement = document.createTextNode('A soma de '+p1 + ' e ' + p2 + ' é: ' + resultado);
            labelElement.appendChild(textElement);
            divElement.appendChild(labelElement);
        }
        else if (parseInt(p3) == 2){
            resultado = (parseInt(p1)*parseInt(p2));
            var divElement = document.querySelector('#ativ06');
            divElement.innerHTML = '';
            var labelElement = document.createElement('label');
            var textElement = document.createTextNode('A Mutiplicação de '+p1 + ' e ' + p2 + ' é: ' + resultado);
            labelElement.appendChild(textElement);
            divElement.appendChild(labelElement);
        }
        else if (parseInt(p3) == 3){
            resultado = (parseInt(p1)/parseInt(p2)).toFixed(2);
            var divElement = document.querySelector('#ativ06');
            divElement.innerHTML = '';
            var labelElement = document.createElement('label');
            var textElement = document.createTextNode('A Divisão de '+p1 + ' e ' + p2 + ' é: ' + resultado);
            labelElement.appendChild(textElement);
            divElement.appendChild(labelElement);
        }
    }
        
    
}


function ativ08() {
    var soma = 0;
    var cont = 1;
    while (cont <= 20) {
        var nrouser = prompt("Digite um nro real. ( " + cont + ' de 20) :');
        soma = soma+parseInt(nrouser);
        cont++;
    }

    var divElement = document.querySelector('#ativ08');
        divElement.innerHTML = '';
    var labelElement = document.createElement('label');
    var textElement = document.createTextNode('A soma dos nros Digitados foi: ' + soma);
    labelElement.appendChild(textElement);
    divElement.appendChild(labelElement);
}

function ativ09() {
    var soma = 0;
    var cont = 1;

    do {
        var nrouser = prompt("Digite um nro real. ( " + cont + ' de 20) :');
        soma = soma+parseInt(nrouser);
        cont++;
    } while (cont <= 20) ;

    var divElement = document.querySelector('#ativ09');
        divElement.innerHTML = '';
    var labelElement = document.createElement('label');
    var textElement = document.createTextNode('A soma dos nros Digitados foi: ' + soma);
    labelElement.appendChild(textElement);
    divElement.appendChild(labelElement);
}

function ativ10() {
    var soma = 0;
    var divElement = document.querySelector('#ativ10');

    var cardapio = [
        {
            codigo: 100,
            produto: "Cachorro Quente",
            preco: 1.70
        },
        {
            codigo: 101,
            produto: "Bauru Simples",
            preco: 2.30
            },
        {
            codigo: 102,
            produto: "Bauru com Ovo",
            preco: 2.60
        },
        {
            codigo: 103,
            produto: "Hamburguer",
            preco: 2.40
        },
        {
            codigo: 104,
            produto: "Cheeseburguer",
            preco: 2.50
        },
        {
            codigo: 105,
            produto: "Refrigerante",
            preco: 1
        },
    ];
   
    do {
        var coduser = prompt("Digite o código do produto: (Digite 0 (zero) para finalizar.)   TOTAL: "+soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        var u;
        for (u of cardapio) {
            var codlst = u.codigo
            var precolst = u.preco;
            if (codlst == coduser){
                soma = soma + precolst;
            }
        }

        divElement.innerHTML = '';
        var labelElement = document.createElement('label');
        var textElement = document.createTextNode('Valor total do Pedido: ' + soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        labelElement.appendChild(textElement);
        divElement.appendChild(labelElement);
    } while (parseInt(coduser) != 0) ;

    
        
    
   
}



function ativ11() {
   
    cont = 1;

    var divElement = document.querySelector('#ativ11');
        divElement.innerHTML = '';

    while (cont <=100){
        var nro = cont%2;

        if (nro == 0) {
            var nroq = Math.pow(cont,2);
            var hElement = document.createElement('h3');
            var textElement = document.createTextNode('O quadrado de ' + cont + ' é ' + nroq );
            hElement.appendChild(textElement);
            divElement.appendChild(hElement);
        }
        cont++;
    }
}