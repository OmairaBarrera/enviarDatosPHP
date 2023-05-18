# HEADERS
Las cabeceras (en inglés *headers*) HTTP permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta.

## Tipos de Headers

Tipos de headers que podemos encontrar en una petición, estos headers son los que nos devuelve el codigo:

```json
{
    "Host": "localhost",
    "Connection": "keep-alive",
    "Content-Length": "71",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-		A.Brand\";v=\"24\"",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "content-type": "application/json",
    "Accept": "*/*",
    "Origin": "http://localhost",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "http://localhost/SpUkM01-074/enviarDatosPHP/?nombre=Juan&apellido=fre&edad=25&pasatiempos=Musica",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9"
}
```

- **Host:** Es el nombre del host, incluyendo dominio y subdominio si existe.
- **Connection:** Tipo de conexión preferente
- **Content-Length:** Cuando el contenido se va a enviar al navegador, el servidor puede indicar el tamaño en bytes. Esto es especialmente útil para la descarga de archivos, así el navegador puede calcular el progreso de la descarga.
- **Sec-ch-ua:** El encabezado de solicitud de sugerencia de cliente del agente de usuario proporciona la marca del agente de usuario y la información importante de la versión.
- **Sec-ch-ua-platform:** El encabezado de solicitud de sugerencia de cliente del agente de usuario proporciona la plataforma o el sistema operativo en el que se ejecuta el agente de usuario.
- **Sec-ch-ua-mobile:** El encabezado de solicitud de sugerencia de cliente del agente de usuario indica si el navegador está en un dispositivo móvil. También puede ser utilizado por un navegador de escritorio para indicar una preferencia por una experiencia de usuario "móvil".
- **User-Agent:** Contiene información como el nombre y versión del navegador y del sistema operativo y el idioma por defecto. De esta forma los sitios web pueden saber información acerca de los sistemas de los visitantes. Pueden detectar si el usuario está visitando desde un móvil y redireccionarlo a una versión móvil más adecuada para bajas resoluciones.
- **Content-Type:** Indica el mime-type del documento. El navegador decide entonces como interpretar los contenidos.
- **Accept:** Qué tipos de contenido puede procesar el cliente; si el campo está vacío, esos son todos los tipos de contenido.
- **Origin:** Indica el origen (esquema, nombre de host y puerto) que provocó la solicitud.
- **Sec-fetch-site:** indica la relación entre el origen del iniciador de una solicitud y el origen del recurso solicitado.
- **Sec-fecth-mode:** Indica el modo de la solicitud. En términos generales, esto permite que un servidor distinga entre: solicitudes que se originan en un usuario que navega entre páginas HTML y solicitudes para cargar imágenes y otros recursos
- **Sec-fetch-dest:** Indica el destino de la solicitud. Ese es el iniciador de la solicitud de recuperación original, que es dónde (y cómo) se utilizarán los datos obtenidos.
- **Referer:** Contiene la url de referencia. Si un usuario hace click en un enlace, en la página de destino aparecerá como referer la anterior.
- **Accept-Encoding:** Formatos de codificación que soporta el navegador. El servidor web puede enviar el HTML resultante en un formato comprimido, lo que ahorra hasta un 80% de bandwidth y tiempo de carga.
- **Accept-Language:** Este header muestra el lenguaje por defecto del usuario. Si el sitio web tiene diferentes versiones por idiomas, puede redireccionar al usuario.
