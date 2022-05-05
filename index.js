function eleccion(){
    var piedraUno = document.getElementById('jugadorUnoPiedra').checked;
    var papelUno = document.getElementById('jugadorUnoPapel').checked;
    var tijeraUno = document.getElementById('jugadorUnoTijera').checked;

    var piedraDos = document.getElementById('jugadorDosPiedra').checked;
    var papelDos = document.getElementById('jugadorDosPapel').checked;
    var tijeraDos = document.getElementById('jugadorDosTijera').checked;

    if(piedraUno && piedraDos){
        var printContents = document.getElementById('print').innerHTML="Empate!";
    }
    else if(piedraUno && papelDos){
        var printContents = document.getElementById('print').innerHTML="Ganó el Jugador 2!";
    }
    else if(piedraUno && tijeraDos){
        var printContents = document.getElementById('print').innerHTML="Ganó el Jugador 1!";
    }
    else if(papelUno && piedraDos){
        var printContents = document.getElementById('print').innerHTML="Ganó el Jugador 1!";
    }
    else if(papelUno && papelDos){
        var printContents = document.getElementById('print').innerHTML="Empate!";
    }
    else if(papelUno && tijeraDos){
        var printContents = document.getElementById('print').innerHTML="Ganó el Jugador 2!";
    }
    else if(tijeraUno && piedraDos){
        var printContents = document.getElementById('print').innerHTML="Ganó el Jugador 2!";
    }
    else if(tijeraUno && papelDos){
        var printContents = document.getElementById('print').innerHTML="Ganó el Jugador 1!";
    }
    else if(tijeraUno && tijeraDos){
        var printContents = document.getElementById('print').innerHTML="Empate!";
    }
    else{
        alert("Debes seleccionar para los 2 Jugadores");
    }
}




