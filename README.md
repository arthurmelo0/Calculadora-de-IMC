# Calculadora-de-IMC
calcula o IMC :)

Uma calculadora de IMC (Índice de Massa Corporal) em JavaScript pode ser criada com uma função simples que recebe a altura e o peso do usuário 
como parâmetros e retorna o valor do IMC calculado. Aqui está um exemplo básico de como isso pode ser feito:

![image](https://user-images.githubusercontent.com/129283479/228576985-d79f8696-4cda-487d-8f87-64a50e5c9bad.png)

Neste exemplo a função recebe duas variáveis inseridas pelo usuário, o peso e a altura. Utilizamos o parseFloat para converter o string em número, e
logo abaixo temos o isNaN, que determina se o valor inserido é ou não é um NaN. Caso não seja um número, aparecerá um alerta exibindo a seguinte
mensagem: "Por favor, insira um valor válido para peso e altura.".

Abaixo disso temos a variável IMC que calculará o resultado da conta dos valores postos pelo usuário anteriormente e em seguida o resultado (arredondado
pelo toFixed) será exibido. Caso o valor do IMC seja abaixo de 18.5, a interface informará que o IMC está abaixo do peso. Se o resultado for acima
de 18,5 porém abaixo de 25, isso é considerado um peso normal. Se for acima de 25 e menor que 30, isso é acima do peso. Caso seja maior que 30, isso
será considerado como Obesidade.

grupo: Francisco Arthur Melo da Silva (15) e Ygor José de Souza Rodrigues (42)
