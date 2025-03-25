numero = parseInt(prompt("Digite seu número"))

i = 1
soma = 0

while(i <= numero){
    soma += i
    i++
}
console.log("A soma de 1 até " + numero + " é " + soma)