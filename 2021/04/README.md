# Reto 04: ¡Es hora de poner la navidad en casa!
### Creo que ya podemos sacar el gorro navideño, el turrón... ¡Y el árbol de navidad! 🎄 Vamos a montarlo con JavaScript.

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento <code>5</code>., se pintaría esto:

```javascript
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```
Creamos un triángulo de asteriscos <code>*</code>. con la altura proporcionada y, a los lados, usamos el guión bajo <code>_</code>. para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de <code>#</code>.

Otro ejemplo con un árbol de altura <code>3</code>:

```javascript
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea <code>\n</code> para cada línea para que se forme bien el árbol.