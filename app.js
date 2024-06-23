//Declaración de variables
let numeroSecreto = 5;
let numeroUsuario = prompt("Indica un número entre 1 y 10: ");

//Declaración de condición
console.log(numeroUsuario);
if (numeroUsuario == numeroSecreto) {
  //Uso de template string para combinar strings con variables
  //La condición se cumple
  alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
  if (numeroUsuario > numeroSecreto) {
    alert("El número secreto es menor");
  } else {
    alert("El número secreto es mayor");
  }
  //La condición no se cumple
  //alert("No has acertado el número");
}
