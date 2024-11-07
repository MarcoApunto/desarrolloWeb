# Ejercicio - Parte 1

A partir del siguiente HTML: 

```html

    <!DOCTYPE html> 
    <html lang="es"> 
    <head> 
        <meta charset="UTF-8" /> 
        <title>Ejercicio DOM básico</title>
    </head>
    <body>
        <p>Lorem ipsum dolor sit amet, <a href="http://prueba">consectetuer adipiscing elit</a>. Sed 
        mattis enim vitae orci. Phasellus libero. Maecenas nisl arcu, consequat congue, commodo nec,
        commodo ultricies, turpis. Quisque sapien nunc, posuere vitae, rutrum et, luctus at, pede.
        Pellentesque massa ante, ornare id, aliquam vitae, ultrices porttitor, pede. Nullam sit amet
        nisl elementum elit convallis malesuada. Phasellus magna sem, semper quis, faucibus ut,
        rhoncus non, mi. <a href="http://prueba2">Fusce porta</a>. Duis pellentesque, felis eu
        adipiscing ullamcorper, odio urna consequat arcu, at posuere ante quam non dolor. Lorem ipsum
        dolor sit amet, consectetuer adipiscing elit. Duis scelerisque. Donec lacus neque, vehicula
        in, eleifend vitae, venenatis ac, felis. Donec arcu. Nam sed tortor nec ipsum aliquam
        ullamcorper. Duis accumsan metus eu urna. Aenean vitae enim. Integer lacus. Vestibulum
        venenatis erat eu odio. Praesent id metus.</p>
        <p>Aenean at nisl. Maecenas egestas dapibus odio. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia Curae; Proin consequat auctor diam. <a
        href="http://prueba">Ut bibendum blandit est</a>. Curabitur vestibulum. Nunc malesuada
        porttitor sapien. Aenean a lacus et metus venenatis porta. Suspendisse cursus, sem non dapibus
        tincidunt, lorem magna porttitor felis, id sodales dolor dolor sed urna. Sed rutrum nulla
        vitae tellus. Sed quis eros nec lectus tempor lacinia. Aliquam nec lectus nec neque aliquet
        dictum. Etiam <a href="http://prueba3">consequat sem quis massa</a>. Donec aliquam euismod
        diam. In magna massa, mattis id, pellentesque sit amet, porta sit amet, lectus. Curabitur
        posuere. Aliquam in elit. Fusce condimentum, arcu in scelerisque lobortis, ante arcu
        scelerisque mi, at cursus mi risus sed tellus.</p>
        <p>Donec sagittis, nibh nec ullamcorper tristique, pede velit feugiat massa, at sollicitudin
        justo tellus vitae justo. Vestibulum aliquet, nulla sit amet imperdiet suscipit, nunc erat
        laoreet est, a <a href="http://prueba">aliquam leo odio sed sem</a>. Quisque eget eros
        vehicula diam euismod tristique. Ut dui. Donec in metus sed risus laoreet sollicitudin. Proin
        et nisi non arcu sodales hendrerit. In sem. Cras id augue eu lorem dictum interdum. Donec
        pretium. Proin <a href="http://prueba4">egestas</a> adipiscing ligula. Duis iaculis laoreet
        turpis. Mauris mollis est sit amet diam. Curabitur hendrerit, eros quis malesuada tristique,
        ipsum odio euismod tortor, a vestibulum nisl mi at odio. <a href="http://prueba5">Sed non
        lectus non est pellentesque</a> auctor.</p>
    </body>
    </html> 

```

Se solicita: 

- Número de enlaces de la página
- Dirección a la que enlaza el penúltimo enlace
- Numero de enlaces que enlazan a http://prueba
- Número de enlaces del tercer párrafo

**AYUDA: Si queremos acceder al contenido de un atributo de un nodo elemento es suficiente con usar nodo.atributo (ej: p.id accede al contenido del id del nodo almacenado en p)**

# Ejercicio - Parte 2

1. A partir del siguiente código HTML (debes extraer el CSS y el Javascript del mismo): 

```HTML

    <!DOCTYPE html> 
    <html lang="es"> 
        <head> 
            <meta charset="UTF-8" /> 
            <title>Ejercicio DOML</title>
            <style type="text/css">
                .oculto { display: none; }
                .visible { display: inline; }
            </style>
            <script type="text/javascript">
                function muestra() { }
            </script>
        </head>
        <body>
            <p id="texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed mattis enim vitae
            orci. Phasellus libero. Maecenas nisl arcu, consequat congue, commodo nec, commodo ultricies,
            turpis. Quisque sapien nunc, posuere vitae, rutrum et, luctus at, pede. Pellentesque massa
            ante, ornare id, aliquam vitae, ultrices porttitor, pede. <span id="adicional"
            class="oculto">Nullam sit amet nisl elementum elit convallis malesuada. Phasellus magna sem,
            semper quis, faucibus ut, rhoncus non, mi. Duis pellentesque, felis eu adipiscing ullamcorper,
            odio urna consequat arcu, at posuere ante quam non dolor. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Duis scelerisque. Donec lacus neque, vehicula in, eleifend
            vitae, venenatis ac, felis. Donec arcu. Nam sed tortor nec ipsum aliquam ullamcorper. Duis
            accumsan metus eu urna. Aenean vitae enim. Integer lacus. Vestibulum venenatis erat eu odio.
            Praesent id metus.</span>
            </p>
            <a id="enlace1" href="#" onclick="muestra();">Seguir leyendo</a> <br /> 
            <a id="enlace2" href="#" class="oculto">Atrás</a> <br />
        </body>
    </html>

```

Completar la función muestra de JavaScript para que realice lo siguiente:

- Ocultar el enlace Seguir leyendo.
- Mostrar el texto incluido dentro del **span**

Una vez acabada esta parte, realizar lo siguiente:

- Crear un nuevo evento en el enlace2 que llamará a la función oculta().
- Dicha función ocultará el enlace2, el texto el span y volverá a mostrar el enlace Seguir leyendo.

2. Cambia todos los ejercicios de funciones para eliminar todos los alert y los prompts