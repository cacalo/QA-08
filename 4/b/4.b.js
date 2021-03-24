/*
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/

age = Math.round(Math.random()*100);
if(age<75){
    if(age<61)
    {
        if(age<31)
        {
            if(age<20)
            {
                if(age<13)
                {
                    if(age<2)
                    {
                        alert("Bebe");
                    }
                    else
                    {
                        alert("Nino");
                    }
                }
                else
                {
                    alert("Adolecente")
                }
            }
            else
            {
                alert("Joven")
            }
        }
        else
        {
            alert("Adulto")
        }
    }
    else
    {
        alert("Adulto Mayor")
    }
}
else
{
    alert("Anciano")
}