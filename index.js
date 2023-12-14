let NomeHeroi = "Matheus"
let XP = 5500
let Nivel = ""

if(XP<= 1000){
    Nivel = "Ferro"

}else if(XP<=2000){
    Nivel = "Bronze"

}else if(XP<=5000){
    Nivel = "Prata"

}else if(XP<=7000){
    Nivel = "Ouro"

}else if(XP<=8000){
    Nivel = "Platina"

}else if(XP<=9000){
    Nivel = "Ascendente"

}else if(XP<=10000){
    Nivel = "Imortal"

}else if(XP>10000){
    Nivel = "Radiante"
}

console.log("O Herói de nome " + NomeHeroi + " está no nível de " + Nivel)