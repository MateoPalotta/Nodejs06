function calcularSecuencia() {
    let semilla = document.getElementById('semilla').value;
    let secuencia = [semilla];
    let numSemilla = semilla;
  
    while (numSemilla !== 1) {
      if (numSemilla % 2 == 0) {
        numSemilla = numSemilla / 2;
      } else {
        numSemilla = 3 * numSemilla + 1;
      }
      secuencia.push(numSemilla);
    }
    let resultado = {
      longitud: secuencia.length,
      numeroMaximo: Math.max(...secuencia)
    }
    document.getElementById('largo').innerHTML = resultado.longitud;
    document.getElementById('numMax').innerHTML = resultado.numeroMaximo;
}
