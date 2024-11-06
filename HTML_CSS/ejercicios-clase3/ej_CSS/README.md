# Ejercicio - Parte 1

- A partir del código HTML y CSS que se muestra, añadir los selectores CSS que faltan para aplicar los estilos deseados. Cada regla CSS incluye un comentario en el que se explica los elementos a los que debe aplicarse:

```
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <title>Ejercicio de selectores</title>
            <style type="text/css">
                /* Todos los elementos de la pagina */
                { font: 1em/1.3 Arial, Helvetica, sans-serif; }
                /* Todos los parrafos de la pagina */
                { color: #555; }
                /* Todos los párrafos contenidos en #primero */
                { color: #336699; }
                /* Todos los enlaces la pagina */
                { color: #CC3300; }
                /* Los elementos "em" contenidos en #primero */
                { background: #FFFFCC; padding: .1em; }
                /* Todos los elementos "em" de clase "especial" en toda la pagina */
                { background: #FFCC99; border: 1px solid #FF9900; padding: .1em; }
                /* Elementos "span" contenidos en .normal */
                { font-weight: bold; }
            </style>
        </head>
        <body>
            <div id="primero">
                <p>Lorem ipsum dolor sit amet, <a href="#">consectetuer adipiscing elit</a>.
                Praesent blandit nibh at felis. Sed nec diam in dolor vestibulum aliquet. Duis
                ullamcorper, nisi non facilisis molestie, <em>lorem sem aliquam nulla</em>, id
                lacinia velit mi vestibulum enim.</p>
            </div>
            <div class="normal">
                <p>Phasellus eu velit sed lorem sodales egestas. Ut feugiat. <span><a
                href="#">Donec porttitor</a>, magna eu varius luctus,</span> metus massa
                tristique massa, in imperdiet est velit vel magna. Phasellus erat. Duis risus. <a
                href="#">Maecenas dictum</a>, nibh vitae pellentesque auctor, tellus velit
                consectetuer tellus, tempor pretium felis tellus at metus.</p>
                <p>Cum sociis natoque <em class="especial">penatibus et magnis</em> dis
                parturient montes, nascetur ridiculus mus. Proin aliquam convallis ante.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nunc aliquet. Sed eu metus. Duis justo.</p>
                <p>Donec facilisis blandit velit. Vestibulum nisi. Proin volutpat, <em
                class="especial">enim id iaculis congue</em>, orci justo ultrices tortor, <a
                href="#">quis lacinia eros libero in eros</a>. Sed malesuada dui vel quam.
                Integer at eros.</p>
            </div>
        </body>
    </html>

```

# Ejercicio - Parte 2

- A partir del código siguiente:

```
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <title>Ejemplo de estilos ejercicio</title>
            <style type="text/css">
                /* Los estilos ...*/
            </style>
        </head>
        <body>
            <h1 id="titulo">Lorem ipsum dolor sit amet</h1>
            <p>Nulla pretium. Sed tempus nunc vitae neque. <strong>Suspendisse
            gravida</strong>, metus a scelerisque sollicitudin, lacus velit
            ultricies nisl, nonummy tempus neque diam quis felis. <span
            class="destacado">Etiam sagittis tortor</span> sed arcu sagittis tristique.</p>
            <h2 id="subtitulo">Aliquam tincidunt, sem eget volutpat porta</h2>
            <p>Vivamus velit dui, placerat vel, feugiat in, ornare et, urna. <a
            href="#">Aenean turpis metus, <em>aliquam non</em>, tristique in</a>, pretium
            varius, sapien. Proin vitae nisi. Suspendisse <span class="especial">porttitor
            purus ac elit</span>. Suspendisse eleifend odio at dui. In in elit sed metus
            pretium elementum.</p>
            <table summary="Descripción de la tabla y su contenido">
                <caption>Título de la tabla</caption>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col" class="especial">Título columna 1</th>
                        <th scope="col" class="especial">Título columna 2</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Título columna 1</th>
                        <th scope="col">Título columna 2</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <th scope="row" class="especial">Título fila 1</th>
                        <td>Donec purus ipsum</td>
                        <td>Curabitur <em>blandit</em></td>
                    </tr>
                    <tr>
                        <th scope="row">Título fila 2</th>
                        <td>Donec <strong>purus ipsum</strong></td>
                        <td>Curabitur blandit</td>
                    </tr>
                </tbody>
            </table>
            <div id="adicional">
                <p>Donec purus ipsum, posuere id, venenatis at, <span>placerat ac, lorem</span>.
                Curabitur blandit, eros sed gravida aliquet, risus justo
                porta lorem, ut mollis lectus tortor in orci. Pellentesque nec augue.</p>
                <p>Fusce nec felis eu diam pretium adipiscing. <span id="especial">Nunc elit
                elit, vehicula vulputate</span>, venenatis in,
                posuere id, lorem. Etiam sagittis, tellus in ultrices accumsan, diam nisi feugiat
                ante, eu congue magna mi non nisl.</p>
                <p>Vivamus ultrices aliquet augue. <a href="#">Donec arcu pede, pretium
                vitae</a>, rutrum aliquet, tincidunt blandit, pede.
                Aliquam in nisi. Suspendisse volutpat. Nulla facilisi. Ut ullamcorper nisi quis
                mi.</p>
            </div>
        </body>
    </html>

```

Debemos obtener un aspecto como el de la siguiente imagen:

![img](./enunciado.png)
