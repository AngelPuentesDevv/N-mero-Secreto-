//Declaración de variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 5;

//Uso de ciclo para que el jugador tenga intentos ilimitados
while (numeroSecreto != numeroUsuario) {
  numeroUsuario = parseInt(prompt("Indica un número entre 1 y 10: "));

  //Declaración de condición
  console.log(typeof numeroUsuario);
  if (numeroUsuario == numeroSecreto) {
    //Uso de template string para combinar strings con variables
    //La condición se cumple
    alert(
      `Acertaste, el número es: ${numeroUsuario} ¡Lo acertaste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }!`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    //La condición no se cumple
    //alert("No has acertado el número");
    //Se incrementa el contador cuando no se acierta el número
    intentos++;
    palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de intentos: ${maximosIntentos}`);
      break;
    }
  }
}
