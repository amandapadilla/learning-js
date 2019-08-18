// ¡Págame, tía!
// Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.

const personas = 9;
const cuenta = 128;
const ana = 2;

let dividirCuenta = (128 - ana) / personas;
console.log(dividirCuenta);

const cuentaAna = dividirCuenta + ana;
console.log(cuentaAna);
