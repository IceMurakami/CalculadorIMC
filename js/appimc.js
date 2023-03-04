const form = document.querySelector('#form')


form.addEventListener("submit", function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('.peso');//mostrando de qual elemento vem
    const inputAltura = event.target.querySelector('.altura')//mostrando de qual elemento vem

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Invalido, digite um numero inteiro.', false);
        return;
    }
    if(!altura){
        setResultado( `Altura Invalido, digite um numero inteiro.`, false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = validImc(imc)
    
    const msg = `Resultado do seu imc é ${imc} (${nivelImc})`
    setResultado(msg, true)
    
    console.log(imc, nivelImc)
    
})

//criando paragrafo.
function creatP(className){
    const p = document.createElement('p');  //criando elemento em js.
    return p;  
}

function setResultado(msg, verify){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ``;

    const p = creatP();
    
    if(verify){
        p.classList.add('paragrafo-resultado')
    }else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)//adicionando o paragrafo.
}


function getImc(peso, altura){
    const imc = peso/(altura * altura)
    return imc.toFixed(2)
}



function validImc(imc){
    const nivel = ['Abaixo do peso','Peso Normal','Sobrepeso'
    ,'Obesidade grau 1','Obesidade grau 2', 'obesidade grau 3']

    if(imc >= 39) return nivel[4];
    
    if(imc >= 34) return nivel[3];
    
    if(imc >= 24) return nivel[1];

    if(imc >= 29.9) return nivel[2];

    if(imc >= 0 || imc >= 18) return nivel[0];
  

}
