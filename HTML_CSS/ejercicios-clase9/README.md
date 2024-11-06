# Ejercicios

1. A partir de este CSS (Elemento con posición absoluta): 

```css

/*El elemento hijo es más grande que su contenedor. Con overflow: auto, se añadirán barras de desplazamiento para ver el contenido completo.*/
.container {
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  overflow: auto;
}

.absolute-child {
  position: absolute;
  width: 250px;
  height: 250px;
  background-color: lightblue;
}
```

Crea un HTML para probarlo y que tenga sentido, sin tocar el CSS

2. A partir de este CSS (Elemento con posición fija): 

```css
/*eEl elemento fijo permanecerá en su posición incluso al hacer scroll. Si su contenido excede sus dimensiones, overflow: hidden ocultará el exceso*/
body {
  height: 2000px; /* Para crear scroll en la página */
}

.fixed-element {
  position: fixed;
  top: 50px;
  right: 50px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  background-color: lightgreen;
}
```
Crea un HTML para probarlo y que tenga sentido, sin tocar el CSS
