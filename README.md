
# Prueba de Frontend - ADO Technologies
Este proyecto es una prueba técnica en la que se utiliza React con TypeScript implementando la arquitectura Clean Architecture. A continuación, se describe el enfoque tomado, las decisiones técnicas, y las limitaciones encontradas debido a los tiempos de entrega.

# Tecnologías Utilizadas
React: Se utilizó como la biblioteca principal para construir la interfaz de usuario.
TypeScript: Se utilizó para garantizar una tipificación estricta y mayor robustez en el desarrollo.
Clean Architecture: La organización del proyecto se basa en la separación de responsabilidades, facilitando la escalabilidad y el mantenimiento del código.
Estructura del Proyecto
El proyecto sigue la Clean Architecture, con una separación clara de las capas:

--src/application/: Contiene los casos de uso y la lógica de negocio.
# useCases/: Casos de uso específicos de la aplicación.
# services/: Llamadas a los servicios y APIs.
# src/domain/: Define las entidades e interfaces.
# entities/: Modelos y clases del dominio.
# interfaces/: Interfaces que definen las reglas del negocio.
# src/infrastructure/: La infraestructura de la aplicación, como la conexión a APIs y el manejo de datos.
# api/: Interacciones con APIs externas.
# src/presentation/: Contiene los componentes que interactúan con el usuario.
#components/: Componentes reutilizables dentro de la aplicación.
#pages/: Páginas principales de la aplicación.
# Estilos y Responsividad
Para los estilos CSS, se implementó un archivo global.css que maneja los estilos de toda la aplicación. Aunque no es la mejor práctica, fue una decisión tomada debido a los tiempos limitados de la prueba. Lo ideal sería crear archivos CSS modulares para cada componente, mejorando así el aislamiento de los estilos y la mantenibilidad del código.

# Responsividad
Para lograr una experiencia responsive, se utilizó CSS Grid, permitiendo que el diseño se adapte de forma dinámica a diferentes tamaños de pantalla. Este enfoque proporciona una estructura flexible que responde bien en dispositivos móviles y pantallas de escritorio.

# Limitaciones
CSS Global: Como se mencionó anteriormente, por los tiempos de entrega se decidió centralizar los estilos en un solo archivo global. En un proyecto más grande o con más tiempo, se habrían implementado estilos modulares específicos para cada componente.
Falta de pruebas unitarias: No se implementaron pruebas debido al tiempo limitado.
# Instrucciones de Instalación
Clonar el repositorio:
bash
Copiar código
git clone https://github.com/deivingranados/prueba-test-ado-technologies.git
Instalar dependencias:
bash
Copiar código
npm install
Iniciar la aplicación:
bash
Copiar código
npm start
Conclusión
Este proyecto es una prueba técnica que refleja el uso de buenas prácticas en la arquitectura de software, aunque algunas decisiones (como el uso de un CSS global) fueron tomadas para ajustarse al tiempo de entrega. Con más tiempo, se habría refinado el proyecto con mejores prácticas en la gestión de estilos y pruebas unitarias.

