# node-js-heroku

API realizada para la clase Laboratorio de Computación IV.
Prof. Sebastián Gañan. 

Esta api consulta una de API de la NASA - APOD (A Picture of the Day) que guarda un registro de fotografias espaciales o relacionadas al espacio, diariamente. 

En esta applicación se pueden consultar a través de la raiz /api/v1/nasa: 
 - /pictures -> Las ultimas 50 fotografías. 
 - /picture/:date -> Una foto especifica ingresando la fecha deseada en el formato YYYY-MM-DD
 - /pictures_range?start_date=[fecha_inicio]&end_date=[fecha_final] -> Un rango de fotografias diarias entre dos fechas especificadas, respetando el formato YYYY-MM-DD para ambas fechas.
 
 Para realizar consultas se requiere de una api key que puede generarse aqui: https://api.nasa.gov/

Documentación POSTMAN: https://documenter.getpostman.com/view/19314765/2s83zdwRsp

Heroku: https://nasa-api-roque-andoni.herokuapp.com/
