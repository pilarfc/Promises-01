var express = require('express'); // requerimos express porque lo instalamos con nuestro package.json tiene como dependencia a express. Express es un servidor de javascript, es más de un paquete el que instala. 
var app = express(); //ejecutamos express 

app.use("/data", express.static(__dirname + '/data')); //el servidor tiene que ser rapido y no tener archivos extra que lo alenten, expresss por default no muestra estos archivos. Nosotros para decir que queremos que los archivos si sean publicos usamos el app.use, en algun lugar existe la carpeta data y quiero que sea publica y quiero que cualquier persona pueda acceder a ella, el express.static hace una ruta estatica de ciertos archivos que nosotros le demos, le vamos a dar todos los archivos que esten en la carpeta data. Si nosotros creamos un archivo js que no esté dentro de la carpeta data y este guardado al mismo nivel del index, debemos de hacerlo del siguiente modo "app.use("/otraruta", express.static(__dirname + "/"))" la diagonal es la carpeta raiz donde esta toda la informacion.  El app.js no es una carpeta tal cual solo es una ruta para poder acceder al elemento. La real es "/" pero otraruta no existe, es una ruta virtual que sustituye a la carpeta real "/" para poder acceder. 


//Path significa enviar archivos file al html. 

app.get('/', function(req,res) { //la diagonal significa raiz
    res.sendFile(__dirname + '/index.html'); //esta parte es la respuesta que nos da para entrar al index
}); //app.get son metodos http, el navegador hace un get al local host, a ese servidor hazle una accion, en esta accion lo que queremos es que mande un archivo, este se encuentra en un directorio base junto con nuestro index.html.

app.listen(8080); // Llama al servidor y va a estar en este puerto. 


//para hacer una carpeta nueva usamos app.use("/rutaconcualquiernombre",express.static(__dirname + "/assets")) si solo hacemos assets dejamos acceder a todos los archivos que están contenidos dentro de esta. Los archivos aparte de hacer esto, debemos de linkearlos normalmente en el html. El nombre que tenga "rutaconcualquiernombre" debe de ponerse igual que el momento que linkeamos en el html. ej: <link rel="stylesheet" href="rutaconcualquiernombre/css/main.css">. 
       
//para hacer archivos en particular es la misma sustitucion que con las carpetas solo agregando el .js, .css, etc. y en el html se sustituye el nombre real del archivo por el que acabamos de usar como ruta virtual. 