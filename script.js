function calcularIMC() {
    
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
  
    
    if (isNaN(peso) || isNaN(altura)) {
      alert("Por favor, insira um valor válido para peso e altura.");
      return;
    }
  
    var imc = peso/(altura*altura);
  
  
    document.getElementById("resultado").textContent = `Seu IMC é: ${imc.toFixed(2)}`;
  
    if (imc < 18.5) {
        resultado.textContent += " - Abaixo do Peso.";
      } else if (imc < 25) {
        resultado.textContent += " - Peso normal.";
      } else if (imc < 30) {
        resultado.textContent += " - Acima do peso.";
      } else {
        resultado.textContent += " - Obeso ou Marombeiro.";
      }
      

}