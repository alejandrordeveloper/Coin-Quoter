# Cotizador Crypto (CotizadorAAA)

Pequeña aplicación web para consultar precios de criptomonedas y calcular cuánto puedes comprar con una cantidad en moneda fiat.

## Características
- Consulta de precio, máximo/minimo 24h y variación 24h.
- Cálculo de la cantidad de cripto que puedes comprar con un monto en fiat.
- Interfaz simple en HTML/CSS y lógica en JavaScript.

## Archivos principales
- [index.html](index.html) — Estructura de la interfaz.
- [style.css](style.css) — Estilos y diseño responsivo.
- [index.js](index.js) — Lógica de consulta y cálculo.
- img/ — Recursos gráficos (ej. `crypto.svg`).

## Cómo usar
1. Abrir [index.html](index.html) en un navegador (o ejecutar un servidor local como Live Server).
2. Seleccionar moneda fiat y criptomoneda.
3. Introducir un monto (opcional) y pulsar "COTIZAR".
4. El resultado y detalles aparecerán en la sección de información.

## Notas técnicas
- La lógica del cliente usa los selectores y variables en [`index.js`](index.js): [`form`](index.js), [`coin`](index.js), [`crypto`](index.js), [`amount`](index.js) y [`coinInfo`](index.js).
- Las consultas se realizan a la API de CryptoCompare desde el navegador.

## Mejoras sugeridas
- Manejo de errores más visible para el usuario.
- Validaciones y mensajes cuando no haya selección.
- Cache o límite de peticiones para no exceder la API.
