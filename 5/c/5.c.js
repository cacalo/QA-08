/* Crear una variable llamada “sentence” que tenga un
string vacío, luego al array del punto a) recorrerlo
con un bucle for para ir guardando cada palabra dentro
de la variable sentence. Al final mostrar una única
lerta con la cadena completa.*/

x=["first","second","third","fourth","fifth"];
sentence = ""

for (let index = 0; index < x.length; index++) {
    const element = x[index];
    sentence += element + " "
}
alert(sentence);