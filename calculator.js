var p = 20, k = 4 

main()

function main(){
    adicao(p, k)
    subtracao(p, k)  
    multiplicacao(p, k) 
    divisao(p, k)     
}

function adicao(val1, val2){
    var resultado = val1 + val2
    console.log(resultado)
}

function subtracao(val1, val2){
    var resultado = val1 - val2
    console.log(resultado)
}

function multiplicacao(val1, val2){
    var resultado = val1 * val2
    console.log(resultado)
}

function divisao(val1, val2){
    var resultado = val1 / val2
    console.log(resultado)
}