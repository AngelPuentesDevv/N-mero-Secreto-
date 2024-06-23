//Declaración de variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;

//Uso de ciclo para que el jugador tenga intentos ilimitados
while (numeroSecreto != numeroUsuario) {
  numeroUsuario = prompt("Indica un número entre 1 y 10: ");

  //Declaración de condición
  console.log(numeroUsuario);
  if (numeroUsuario == numeroSecreto) {
    //Uso de template string para combinar strings con variables
    //La condición se cumple
    alert(
      `Acertaste, el número es: ${numeroUsuario} ¡Lo acertaste en ${intentos} intentos!`
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
  }
}
