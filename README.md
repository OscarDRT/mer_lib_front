# Clone de Mercado Libre - Frontend

## Índice

- [Clone de Mercado Libre - Frontend](#clone-de-mercado-libre---frontend)
  - [Índice](#índice)
  - [Descripción General](#descripción-general)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Componentes y Páginas](#componentes-y-páginas)
  - [Tipos](#tipos)
  - [Utilidades](#utilidades)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Versión](#versión)
  - [Licencia](#licencia)
  - [Autor](#autor)
  - [Scripts](#scripts)
  - [Pruebas](#pruebas)
  - [Enlaces Útiles](#enlaces-útiles)
  - [Capturas de Pantalla o Demo](#capturas-de-pantalla-o-demo)
  - [Contribuir](#contribuir)

## Descripción General

Este proyecto es un clone del frontend de Mercado Libre, desarrollado como parte de una prueba técnica para demostrar habilidades de desarrollo web utilizando tecnologías como Next.js, React y SCSS.

## Requisitos

- Node.js
- yarn

## Instalación

1. Clonar el repositorio: `git clone https://github.com/OscarDRT/mer_lib_front`
2. Cambiar al directorio del proyecto: `cd mer_lib_front`
3. Instalar las dependencias: `yarn install`

## Uso

Para iniciar la aplicación en modo desarrollo, ejecutar: `yarn dev`
La aplicación se iniciará y estará disponible en http://localhost:3000.

## Estructura del Proyecto

- `src/`: Carpeta raíz del código fuente.
  - `@types/`: Define interfaces y tipos.
  - `app/`: Contiene las páginas y componentes específicos de cada página.
  - `components/`: Contiene los componentes reutilizables en diferentes partes de la aplicación.
  - `utils/`: Contiene utilidades y funciones de ayuda.
  - `variables.module.scss`: Define variables de estilos SCSS.
  - `globals.scss`: Define estilos globales.

## Componentes y Páginas

- `Header`: Componente para la barra de búsqueda y navegación.
- `ItemCard`: Componente para visualizar un ítem individual en los resultados de búsqueda.
- `Loader`: Componente de carga visualizado mientras se espera respuesta del servidor.
- `Categories`: Componente para mostrar la ruta de categorías en los resultados de búsqueda.
- `Items`: Página de resultados de búsqueda de ítems.
- `ItemId`: Página de detalles de un ítem específico.

## Tipos

- `Item`: Representa un ítem con detalles como id, título, precio, etc.
- `Author`: Representa al autor con nombre y apellido.
- `SearchResult`: Representa el resultado de una búsqueda, incluyendo autor e ítems.
- `ItemResult`: Representa el resultado de recuperar un ítem por su ID.

## Utilidades

- `commons.ts`: Contiene la función `amountFormat` para formatear precios.

## Tecnologías Utilizadas

- Next.js
- React
- SCSS

## Versión

La versión actual del proyecto es 1.0.0.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE en el repositorio para más detalles.

## Autor

- **Nombre:** Oscar Riaño Tapias
- **Correo Electrónico:** [oscardrtdev@gmail.com](mailto:oscardrtdev@gmail.com)
- **GitHub:** [OscarDRT](https://github.com/OscarDRT)
- **LinkedIn:** [Oscar Riaño Tapias](https://www.linkedin.com/in/oscardrt/)

## Scripts

- `yarn dev`: Inicia la aplicación en modo desarrollo.
- `yarn build`: Construye la aplicación para producción.
- `yarn start`: Inicia la aplicación construida.

## Pruebas

Este proyecto no contiene pruebas actualmente. Si deseas contribuir añadiendo pruebas, por favor consulta la sección de [Contribuir](#contribuir).

## Enlaces Útiles

- [Repositorio del Proyecto](https://github.com/OscarDRT/mer_lib_front)
- [Reportar un Problema](https://github.com/OscarDRT/mer_lib_front/issues)
- [web](https://merlifront.vercel.app/)

## Capturas de Pantalla o Demo

Actualmente no hay capturas de pantalla o demo disponibles. Si deseas contribuir a esto, por favor consulta la sección de [Contribuir](#contribuir).

## Contribuir

Para contribuir al proyecto, por favor revisa las [directrices de contribución](CONTRIBUTING.md) y asegúrate de seguir los estándares y directrices establecidos. Puedes reportar problemas o sugerencias a través de [GitHub Issues](https://github.com/OscarDRT/mer_lib_front/issues) y enviar tus mejoras o correcciones a través de Pull Requests.

Te agradezco tu interés en mejorar este proyecto. Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto.
