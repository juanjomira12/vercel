👟 MiraShop - Sneakers Store
¡Bienvenido a MiraShop! Una plataforma de comercio electrónico moderna y robusta desarrollada con React, Vite y Material UI. Este proyecto representa mi avance técnico en el desarrollo de aplicaciones web interactivas dentro de mi formación en el SENA.

📝 Descripción
MiraShop no es solo una tienda de tenis; es una experiencia de usuario optimizada donde el diseño urbano se encuentra con la funcionalidad técnica. La aplicación gestiona un catálogo dinámico de calzado, permitiendo a los usuarios interactuar con productos en tiempo real, manejar carritos de compra y gestionar preferencias personales a través de una interfaz limpia y profesional.

🚀 Características Principales
Grid Centrado: Layout dinámico que muestra 3 productos por fila, centrando automáticamente los elementos restantes.

Ecosistema de Hooks: Implementación de hooks personalizados para el manejo de estados complejos (Contador, Reloj, Estado de Conexión).

Persistencia de Datos: Uso de localStorage para que el carrito y los favoritos sobrevivan al cierre del navegador.

Diseño Atómico: Separación clara entre componentes de interfaz (UI) y lógica de negocio.

Responsive Design: Optimizado para una navegación perfecta desde móviles hasta monitores de escritorio.

🎨 Interfaz Gráfica
La estética de MiraShop se basa en Material Design, priorizando la claridad y la jerarquía visual:

Elevación y Profundidad: Las tarjetas de producto utilizan sombras dinámicas (box-shadow) que reaccionan al interactuar con ellas.

Microinteracciones: Botones con cambios de estado y transiciones suaves.

Feedback Visual: Uso de Chips de colores para comunicar el estado del inventario de forma inmediata.

🏗️ Arquitectura del Proyecto
El proyecto implementa una arquitectura basada en Módulos/Features, lo que facilita el mantenimiento y la escalabilidad:

Plaintext
src/
├── features/
│   ├── Articles/          
│   │   ├── components/    # Article.jsx, Carrito.jsx, ProductCard.jsx
│   │   └── hooks/         # contador.jsx, reloj.jsx, onlineStatus.jsx
│   ├── Auth/              
│   │   └── components/    # Myaccount.jsx, Myfavorities.jsx
│   └── layout/            
│       └── components/    # Header.jsx, Footer.jsx, Content.jsx
├── shared/                # Componentes y estilos globales
├── App.jsx                # Lógica de estados globales
├── main.jsx               # Punto de entrada (Vite)
└── Routes.jsx             # Manejo de la navegación
🛠️ Tecnologías y Herramientas
Vite: Herramienta de construcción de última generación para un desarrollo rápido.

React 18: Biblioteca principal para la construcción de interfaces de usuario.

Material UI (MUI): Framework de diseño para componentes listos para producción.

ESLint: Para asegurar la calidad y el estándar del código.

📌 Datos del Autor
Estudiante: Juan Jose Mira

Institución: SENA (Servicio Nacional de Aprendizaje)

Proyecto: MiraShop (Tienda Virtual de Sneakers)

Ubicación: Medellín, Antioquia.
