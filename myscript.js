let scatola = document.getElementById("ms_container");

// creazione scatole
for(let i = 1; i <= 100; i++){
    {
        console.log('iterazione: ', i);
        scatola.innerHTML += '<div class=box>' + i + '</div>';
    }
}

// function per cambiare colore al quadrato dopo il click
function changeColorBox(){
    
}