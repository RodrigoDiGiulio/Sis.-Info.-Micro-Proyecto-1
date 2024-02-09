MICRO-PROYECTO 1
	En una familia hipotética, usted tiene una abuela que le encanta jugar al bingo. Ella te invita a jugar bingo con todas sus amigas, sin embargo perdieron la máquina del bingo.
	Su misión como programador es simular un juego de 4 personas de bingo. Simulando los cartones aleatorios, las fichas que se van anunciado, etc. Tenga en cuenta que las señoras tienen un tiempo limitado, entonces el juego durará 25 turnos cómo máximo, pero terminará si alguien llega a cartón lleno.

	Para detectar cuáles son los cartones más óptimos es muy simple:
Cartón lleno: 5 puntos
Línea horizontal: 1 punto
Línea vertical: 1 punto
Línea diagonal: 3 puntos
	
Usted deberá desarrollar una página con HTML, CSS y Javascript para mostrarle a su abuela cómo se va llenando el tablero de una manera atractiva.


Requerimientos funcionales
Interfaz de usuario
La aplicación debe tener una interfaz de usuario clara y fácil de usar. Además, debe ser responsive (el diseño debe adaptarse a pantallas de teléfono móvil, tabletas y computadoras de escritorio).
Utilizar HTML para estructurar el contenido de la aplicación, incluyendo el tablero de juego, las tarjetas, el puntaje, la tabla de puntuaciones y el formulario de nombre de usuario.
Aplicar estilos con CSS para hacer que la aplicación sea visualmente atractiva y coherente.

Menú principal
Antes de iniciar el juego, deberá mostrar una tabla con el puntaje total de los jugadores (con localstorage). Más información al final
Antes de iniciar el juego, se debe solicitar al usuario una lista de nombres de 4 jugadores, y el tamaño del cartón (el cartón deberá ser cuadrado, por ejemplo, si se ingresa el valor 3 se generarán cartones de 3x3).
Una vez se hayan ingresado estos datos, se habilita un botón de inicio para comenzar el juego de Bingo.
Se deberá tener una función que genere aleatoriamente una matriz cuadrada NxN (el cartón de bingo) para cada jugador (un total de 4 cartones en el sistema). (El parámetro N debe obtener como valores números enteros entre 3 y 5)
Los números generados aleatoriamente van desde el 1 hasta el 50 [1,50]
Al iniciar el juego, deberá tener un contador de turnos global (el mismo para todos los jugadores) que se actualice con cada nuevo turno.
Juego de Bingo
Los números generados aleatoriamente van desde el 1 hasta el 50 [1,50]
En todo momento se debe mostrar el cartón de Bingo de un jugador, y se   debe poder cambiar de cartón a través de la interfaz (pueden usar botones, select, etc., para seleccionar cuál jugador mostrar).
En él se deben mostrar los números de cada casilla y se deben resaltar las casillas que hayan sido marcadas (es decir, los números que hayan salido durante la partida que estén en el cartón).
La interfaz debe incluir un botón que servirá para sacar un número de Bingo aleatorio. Se deberá mostrar en pantalla el número obtenido y se debe actualizar los cartones en caso de coincidir con alguna casilla. Tenga en cuenta que los
Los números generados aleatoriamente van desde el 1 hasta el 50 [1,50]
Cada vez que se consiga la ficha en el cartón, calcular si se consiguió una nueva línea o cartón lleno.
Se debe validar cada uno de los números obtenidos de forma que no aparezcan números repetidos.
El juego durará cómo máximo 25 turnos, pero si alguien consigue cartón lleno se termina.
Al iniciar el juego, deberá tener un contador de turnos global (el mismo para todos los jugadores) que se actualice con cada nuevo turno.
Al terminar debe mostrar en la interfaz, el puntaje de total de cada persona y la cantidad de victorias acumuladas de cada uno.
Con cada victoria, se actualizará la base de datos de victorias (localStorage). En esta, cada jugador tendrá un número de victorias acumuladas que aumenta cada vez que gana.
Control de versiones y alojamiento
Utilizar git para el control de versiones del proyecto.
Subir el proyecto a un repositorio de GitHub.
Alojar el proyecto utilizando GitHub Pages. 
En caso de que el proyecto no esté alojado en Github Pages, se evaluará con una puntuación máxima de 10 puntos.
Entrega
La actividad es individual, cualquier intento de plagio será penalizado con 0
El micro-proyecto comienza el día jueves a las 7:00 p.m. y finaliza a las 11:59 p.m. el día domingo. Por lo tanto, su entrega deberá ser hecha dentro de ese tiempo.
Debe enviar lo siguiente:
Link del repositorio con el proyecto
Link de la página hosteada en Github Pages
Al correo de sus dos preparadores:
sergio.suarez@correo.unimet.edu.ve
goncalves.andres@correo.unimet.edu.ve
michelle.villegas@correo.unimet.edu.ve

Evaluación
Estructura HTML: 1 pto
Estructura CSS: 1 pto
Responsive: 2 pts
Funcionalidad Javascript: 13 pts
Creación dinámica de los cartones de Bingo: 3 pts
Implementación del juego de Bingo: 4 pts
Contador de turnos y cálculo del puntaje: 2 pts
Uso de Localstorage para guardar usuarios y su contador de victorias: 2 pts.
Mostrar tabla de puntajes. 1 pt.
Funcionalidad de reinicio: 1 pt.
Apreciación (esfuerzo y estética): 3 pts
