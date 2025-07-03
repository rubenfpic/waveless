# Proyecto

Ejercicio de maquetación "waveless"

## Tecnologías utilizadas

El proyecto ha sido desarrollado utilizando **VITE 6.3.5** y **SASS 1.89.2**.

## Maquetación

La maquetación ha sido realizada de manera adaptable partiendo del móvil (**responsive mobile first**) y se han tenido en cuenta los 4 diseños que hay en el Figma, que se han denominado de la siguiente forma:

- "mobile" desde 390px
- "tablet" desde 744px
- "laptop" desde 1023px
- "desktop" desde 1440px

No obstante, se ha intentado que tanto por debajo de 390px como por encima de 1440px el contenido se vea correctamente.

### CSS

Para el código **CSS** se ha utilizado SASS con la sintáxis SCSS. La organización de los ficheros se ha hecho con **ITCSS**, intentando que hubiera ficheros en cada uno de los niveles del triángulo. La metodología utilizada para los componentes CSS ha sido **BEM**, utilizando también algunos estilos extra para los estados (state hooks) en aquellos componentes que lo han requerido.

### HTML

Se ha utilizado un solo fichero **HTML** en el que se ha definido el esqueleto de la página, y a partir de ahí se ha ido inyectando el contenido utilizando desde componentes JavaScript.

### Iconos

Los iconos se han juntado todos en un sprite **SVG** para facilitar el estilizado de dimensiones y colores.

## JavaScript

Se han separado los componentes **JavaScript** en ficheros diferentes en los que está tanto su código HTML como su funcionalidad.

Se ha considerado necesario alojar algunos datos en un fichero separado (data.js) para evitar utilizar ficheros demasiado extensos.

## Instalación y arranque

Para instalarlo, ejecutar en el directorio del proyecto el comando:

```bash
npm install
```

Para arrancarlo y verlo en http://localhost:5173, ejecutar:

```bash
npm run dev
```

Para crear una versión entregable en el directorio **/dist**, ejecutar:

```bash
npm run build
```
