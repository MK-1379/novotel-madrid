# Novotel Madrid Center · Web de hotel con Bootstrap 5

Proyecto individual del módulo **Diseño de Interfaces Web (DIW)** de 2º de DAW: diseño, desarrollo y publicación de la web de un hotel real con **Figma, HTML5, CSS3 y Bootstrap 5**.

El hotel de referencia es el **Novotel Madrid Center** (cadena Accor), un 4★ junto al parque de El Retiro.

- **Web publicada:** https://mk-1379.github.io/novotel-madrid/
- **Prototipo en Figma:** https://www.figma.com/design/ickbbSyrGx863Kh1eyGW3w

> Proyecto académico. No es la web oficial del hotel. Las imágenes pertenecen a Accor y se usan con fines educativos.

## Páginas

| Página | Archivo | Contenido |
|---|---|---|
| Inicio | `index.html` | Hero, buscador de reservas (fechas y huéspedes), carrusel de ofertas, información del hotel, servicios y contacto con mapa |
| Habitaciones | `rooms.html` | Catálogo de 6 tipos de habitación con filtros por categoría |
| Disponibilidad | `available-rooms.html` | Habitaciones disponibles según fechas y número de huéspedes, con el precio total |
| Completar reserva | `complete-reservation.html` | Resumen de la reserva, formulario de datos personales y pago simulado |

## Tecnologías

- **HTML5** semántico
- **Bootstrap 5.3** (CDN) y **Bootstrap Icons**
- **CSS3** propio para la identidad visual (colores y tipografías del prototipo)
- **JavaScript** para simular la búsqueda y la reserva
- **Figma** para el prototipo móvil de alta fidelidad
- **GitHub Pages** para la publicación

## Diseño

- Metodología **Mobile First**: prototipo diseñado a 390 px y adaptado después a tablet y escritorio.
- **Colores:** azul marino `#1E1852` / `#120E36` y dorado `#C8A165` (`#8C6A2F` para texto sobre fondo claro, por contraste).
- **Tipografías:** Montserrat (títulos) e Inter (textos), de Google Fonts.

## Componentes de Bootstrap utilizados

Navbar · Card · Carousel · Forms con validación · Input group · Nav pills · Breadcrumb · Badge · List group · Alert · Collapse · Table · Modal · Grid (`container`, `row`, `col-*`, `row-cols-*`) · Ratio (mapa responsive) · Utilidades de espaciado, color y flexbox.

## Responsive

| Breakpoint | Cambios principales |
|---|---|
| Móvil (< 768 px) | Menú hamburguesa, tarjetas en una columna, buscador en dos columnas |
| Tablet (`md`, ≥ 768 px) | Habitaciones en 2 columnas, ofertas y resultados con la foto al lado del texto |
| Escritorio (`lg`, ≥ 992 px) | Menú desplegado, buscador en una fila, habitaciones en 3 columnas, servicios en 4 y el resumen de la reserva a la derecha |

## Funcionamiento

No hay servidor: la búsqueda se envía con un formulario `GET`, así que las fechas y los huéspedes viajan en la URL entre páginas. `js/main.js` los lee con `URLSearchParams` para:

- Mostrar solo las habitaciones con capacidad suficiente y calcular el precio total.
- Rellenar el resumen de la reserva.
- Validar los formularios y mostrar un modal de confirmación.

La disponibilidad y el pago son **simulados**: no se envía ni se guarda ningún dato.

## Estructura

```
├── index.html
├── rooms.html
├── available-rooms.html
├── complete-reservation.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
```

## Cómo verlo en local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MK-1379/novotel-madrid.git
   ```
2. Abre la carpeta en VS Code y lanza `index.html` con la extensión **Live Server**.

Para probar la reserva, empieza siempre por el buscador de la página de inicio.

## Autor

**Mario Díaz González** · 2º DAW · Jesuitas Logroño
[Portfolio](https://mk-1379.github.io) · [GitHub](https://github.com/MK-1379)
