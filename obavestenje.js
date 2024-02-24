let trazenaRec = "panda";

let pokusajSlova = [];

let linijice = "";
for (let i = 0; i < trazenaRec.length; i++) {
    linijice += "_ ";
}
document.getElementById("linijice").textContent = linijice;

function pogodiSlovo() {
    let unetoSlovo = document.getElementById("upisiSlovo"); 

    if (!unetoSlovo.value) {
        alert("Polje je prazno.Molimo Vas upisite slovo.");  
        return;
    } 

    let slovo =unetoSlovo.value.toLowerCase(); 

    unetoSlovo.value = "";

    if (pokusajSlova.includes(slovo)) {
        alert("Vec ste uneli to slovo");  
        return;
    }

    pokusajSlova.push(slovo);

    let CrticeISlova = "";
    let svaPogodjenaSlova = true;
    for (let i = 0; i < trazenaRec.length; i++) {
        if (pokusajSlova.includes(trazenaRec[i])) 
        {
            CrticeISlova += trazenaRec[i] + " ";
        } else {                                    
            CrticeISlova += "_ ";
            svaPogodjenaSlova = false;           
        }
    }
    document.getElementById("linijice").textContent = CrticeISlova;        

    if (svaPogodjenaSlova) {
        alert("Cestitamo! Pogodili ste rec!");
    }
}