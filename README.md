# La Rosa de Papel

Web independiente en HTML5, CSS3 y JavaScript vanilla. Abre `index.html` con Live Server de VS Code. No requiere instalación ni compilación.

## Información utilizada

Únicamente el nombre, Calle La Rosa, 22, 11670 El Bosque (Cádiz) y el teléfono 634 048 158. No se atribuye actividad, productos, servicios, horarios ni canales de contacto adicionales. El concepto de papel es una identidad gráfica, no una descripción de la actividad comercial.

## Dirección de arte y recursos

Composición de recortes asimétricos, rosa abstracta, navegación de etiquetas troqueladas, postal de ubicación y contacto inspirado en una tarjeta abierta. Paleta: `#F4E8DF`, `#A33750`, `#E9C969`, `#34302F`, `#FBF8F3`.

- `img/rosa-recortada.svg`: ilustración vectorial original creada para este proyecto.
- `img/pliegues.svg`: estudio vectorial original de papel plegado y sombras; no es una fotografía.
- `img/composicion-papel.svg`: collage vectorial original; no representa productos.
- `img/grano.svg`: textura procedural original mediante filtros SVG.
- `favicon.svg`: adaptación de la rosa original.

Todos los gráficos se entregan como parte del proyecto, sin fotografías ni recursos gráficos de terceros. Los SVG son escalables y ligeros; no necesitan versiones de distinta resolución. Los estudios visuales se identifican como ilustrativos en la página.

Tipografías locales: **Fraunces** (500) y **Hanken Grotesk** (400 y 600), obtenidas de Google Fonts. Licencia SIL Open Font License 1.1, incluida en `fonts/OFL-Fraunces.txt` y `fonts/OFL-Hanken-Grotesk.txt`. Procedencia: https://github.com/google/fonts/tree/main/ofl/fraunces y https://github.com/google/fonts/tree/main/ofl/hankengrotesk. No se realizan peticiones a Google Fonts al visitar la página.

## Comparación con los proyectos disponibles

Se examinaron el HTML, las hojas de estilo, la navegación, los títulos, los recursos visuales, los pies y los patrones de movimiento de las 17 webs existentes: abogado José Antonio Vázquez Sánchez, Café-Pub Andalucía, Club Deportivo Stilos, El Bosque Informática, El Bosque Vending 24h, Fontanería Londro, Guadalinfo, Realty Canoe, Isaac Phoenix, La Casa del Muro, La Casita de El Bosque, Miel El Bosque, Panadería El Rescoldo, Peluquería Mari Carmen, pintor José Luis Gracia Pavón, Restaurante Puerta del Parque y Taxi 9 Plazas.

Se creó código nuevo para esta web: sin reutilizar sus componentes. La composición de recortes, las etiquetas con perforación, los tickets con esquina que se despliega, la postal y el reverso mostaza desarrollan un lenguaje propio. No se utilizaron menús laterales, hamburguesas, tarjetas de servicios, carruseles ni revelados repetidos fade-up. La comparación de las webs anteriores fue sobre sus fuentes; no se capturaron de nuevo todas ellas.

## Accesibilidad y funcionamiento

Enlace para saltar al contenido, navegación por teclado, foco visible, HTML semántico, descripciones de las ilustraciones y decoración excluida del árbol accesible. `prefers-reduced-motion` elimina las animaciones y el desplazamiento suave. El contenido y los enlaces funcionan sin JavaScript; el botón de copia se muestra cuando se activa JavaScript.

El botón copia `634048158`, anuncia el resultado y ofrece copia alternativa o un campo seleccionable si el portapapeles no está disponible. Los enlaces telefónicos utilizan `tel:+34634048158`. Google Maps recibe la dirección completa como búsqueda, sin coordenadas inventadas. No se ha verificado una ficha comercial específica en Google Maps ni se ha realizado una llamada real.

SEO: título y descripción locales, Open Graph, idioma español y JSON-LD `LocalBusiness` con los datos confirmados. No se incorpora una URL canónica ficticia. `og:image` usa una ruta local SVG: la tarjeta de previsualización social no se ha validado externamente y depende de la compatibilidad de cada plataforma.

## Verificación realizada

Pruebas en Chrome sin interfaz mediante DevTools:

- Capturas de página completa a 375, 768, 1440 y 1920 píxeles, revisadas visualmente.
- Sin desbordamiento horizontal ni imágenes rotas en esas cuatro anchuras; fuentes locales cargadas.
- Copia del número comprobada leyendo el portapapeles; alternativa sin Clipboard API comprobada.
- Destinos de anclas, teléfonos y URLs de búsqueda de Google Maps comprobados.
- Preferencia de movimiento reducido comprobada; sin errores JavaScript durante estas pruebas.
- Sintaxis de JavaScript validada con `node --check`.

Capturas y reporte en `.qa/` (excluido por `.gitignore`). No se han realizado pruebas en Safari, Firefox ni dispositivos físicos. Sin dependencias de ejecución, configuración de Netlify ni despliegues. Los demás proyectos no se han editado.
