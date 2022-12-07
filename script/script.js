const calc = document.getElementById('calc')

function imc (){
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const res = document.getElementById('res')
    if(nome == '' || peso == '' || altura == ''){
        res.innerText = 'Por favor preencha todos os campos'
    } else{
        const valorImc = (peso / (altura*altura)).toFixed(2)

        if(valorImc <18.5){
            res.innerHTML = `Olá ${nome} o seu imc é ${valorImc} e você está abaixo do peso`
        } else if (valorImc < 25){
            res.innerHTML = `Olá ${nome} o seu imc é ${valorImc} e você está no peso ideal`
        }else if (valorImc < 30){
            res.innerHTML = `Olá ${nome} o seu imc é ${valorImc} e você está levemente acima do peso`
        }else if (valorImc < 35){
            res.innerHTML = `Olá ${nome} o seu imc é ${valorImc} e você está com obesidade grau 1`
        }else if (valorImc < 40){
            res.innerHTML = `Olá ${nome} o seu imc é ${valorImc} e você está com obesidade grau 2`
        }else{
            res.innerHTML = `Olá ${nome} o seu imc é ${valorImc} e você está com obesidade grau 3, tenha cuidado`
        }
    }
}

calc.addEventListener('click', imc)