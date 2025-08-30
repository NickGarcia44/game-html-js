alert (
    "Boas Vindas ao jogo do número secreto"
);

let numeroAleatorio = Math.floor(Math.random() * 101);
console.log ("O número é " ,numeroAleatorio);
let chutesDados = 1;

while(true){
    let numeroChute = parseInt(prompt("Digite um número e tente a sorte"));
    if (numeroChute === numeroAleatorio){
        break
    }
    if (numeroChute > numeroAleatorio){
        chutesDados++
        alert (
            "O número secreto é menor"
        );
    } else if (numeroChute < numeroAleatorio){
        chutesDados++
        alert (
            "O número secreto é maior"
        );
    }
}

console.log ("Acertou em ",chutesDados, " tentativas");
alert (
    "Boas Vindas ao jogo do número secreto"
);

let numeroAleatorio = Math.floor(Math.random() * 101);
console.log ("O número é " ,numeroAleatorio);
let chutesDados = 1;

while(true){
    let numeroChute = parseInt(prompt("Digite um número e tente a sorte"));
    if (numeroChute === numeroAleatorio){
        break
    }
    if (numeroChute > numeroAleatorio){
        chutesDados++
        alert (
            "O número secreto é menor"
        );
    } else if (numeroChute < numeroAleatorio){
        chutesDados++
        alert (
            "O número secreto é maior"
        );
    }
}

console.log ("Acertou em ",chutesDados, " tentativas");