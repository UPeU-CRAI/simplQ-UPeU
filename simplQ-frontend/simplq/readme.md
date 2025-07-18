## Diseño

La interfaz está escrita en **Javascript** y **React**, y el estilo se define con **SCSS**. Utilizamos **eslint** para el linting y **prettier** para el formateo. Estas herramientas ya están configuradas con algunas reglas y usamos **husky** y **lint-staged** para ejecutar verificaciones y formateos en cada commit. Mantener bien organizado el código es clave para que sea limpio y extensible, por lo que se deben seguir las siguientes pautas al contribuir a esta aplicación.

Todos los componentes de React van dentro de la carpeta **src/components**. Los componentes reutilizables en distintas páginas deben colocarse en **components/common** para un acceso fácil; por ejemplo, botones o encabezados que comparten estilo pero cambian el texto mediante props. Es recomendable prototipar estos componentes y para ello contamos con **storybook.js**. Los componentes específicos de cada página se ubican en **components/pages**. Siempre es buena idea dividir los componentes en partes pequeñas y luego componerlas para formar las páginas. Si una página necesita más de un componente, coloca todos los componentes de esa página en una subcarpeta con un nombre adecuado dentro de **components/pages**. Los componentes que se usan en más de una página, como las rutas, pueden ir directamente en **src/components**.

Usamos **Redux** para la gestión del estado. La idea general es colocar en redux las variables de estado que utilizan más de dos componentes y que no resultaría limpio o lógico pasar por props, por ejemplo variables para el manejo de errores usadas en distintos lugares. Todo el código específico de redux se encuentra en **src/store**.

Los estilos se definen en archivos SCSS y se importan en los componentes de React donde se utilizan. El estilado se realiza exclusivamente mediante estos archivos y se desaconseja aplicar estilos directamente en los componentes, de esta forma se mantiene una separación clara entre lógica y diseño.

Como muchos estilos son reutilizables en nuestra aplicación, existe un archivo llamado **common.scss** que contiene numerosas constantes y mixins. Los mixins permiten reutilizar fragmentos de CSS. Si un estilo debe reutilizarse más de una vez, defínelo como mixin en **common.scss** y utilízalo desde allí. Los nombres de los mixins deben ser claros y concisos. Procura definirlos solo en este archivo para facilitar su localización y evitar importar otros ficheros distintos de **common.scss**.

Aparte de common.scss, se crean módulos de estilos separados para cada elemento de diseño reutilizable y para cada página de la aplicación, buscando un equilibrio entre no tener demasiados archivos y mantener una separación clara de responsabilidades.

Para el diseño, las clases CSS deben tener nombres fáciles de entender. En pos de la simplicidad y el mantenimiento, evita usar códigos CSS oscuros encontrados en internet; si tienes dudas plantea una issue para discutir la mejor solución. Además, preferimos **usar rem en lugar de px** para los tamaños siempre que sea posible.

También hemos configurado **Sentry** para monitorizar el estado del sitio y resolver rápidamente los problemas nuevos.

El servicio backend está escrito en **Java** y se aloja en **AWS**. Nos conectamos a las APIs mediante **axios** y el código que gestiona estos servicios se guarda en la carpeta **src/services**. Aquí va toda la lógica de negocio no presentacional.

Se recomienda añadir comentarios explicativos en las partes del código que puedan resultar confusas. Estos comentarios pueden incluir enlaces a artículos o respuestas de StackOverflow que se usaron para resolver problemas.
