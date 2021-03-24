/*Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos
de los ejercicios anteriores para generar un nuevo string que tenga
la primera letra de ambas palabras en mayúscula y las demás letras
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

longString = "Characters capitalization";
space = longString.indexOf(" ");
cappitalizedString = longString.substring(0,1).toUpperCase() + longString.substring(1,space).toLowerCase() +  " " + longString.substring(space+1,space+2).toUpperCase()+longString.substring(space+2,longString.length);