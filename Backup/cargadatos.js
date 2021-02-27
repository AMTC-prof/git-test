/**
 * Funcion que se ejecuta al seleccionar una opcion del primer select
 */
function cargarSelect2(valor)
{
    /**
     * Este array contiene los valores del segundo select
     * Los valores del mismo son tres:
     *  - El primero hace referencia al valor del primer select. Es para saber que 
     *    valores mostrar una vez se haya seleccionado una opcion en el primer select.
     *  - El segundo es valor que se asignara a dicha selección.
     *  - El tercero es el texto que se asignara.
     */

    var arrayValores=new Array(
        new Array(1,1,"Gandalf"),
        new Array(1,2,"Saruman"),
        new Array(1,3,"Galadriel"),
        new Array(2,1,"Bilbo"),
        new Array(2,2,"Frodo"),
        new Array(2,3,"Samsagaz"),
        new Array(3,1,"Balin"),
        new Array(3,2,"Bifur"),
        new Array(3,3,"Bofur"),
        new Array(3,4,"Bombur"),
        new Array(3,5,"Dori"),
        new Array(3,6,"Dwalin"),
        new Array(3,7,"Fili"),
        new Array(3,8,"Glóin"),
        new Array(3,9,"Kili"),
        new Array(3,10,"Nori"),
        new Array(3,11,"Óin"),
        new Array(3,12,"Ori"),
        new Array(3,13,"Thorin")
    );
    if(valor==0)
    {
        // desactivamos el segundo select
        document.getElementById("select2").disabled=true;

    }else{
        // eliminamos todos los posibles valores que contenga el select2
        document.getElementById("select2").options.length=0;
        
        // añadimos los nuevos valores al select2
        document.getElementById("select2").options[0]=new Option("Selecciona una opción", "0");
        for(i=0; i<arrayValores.length; i++)
        {
            // unicamente añadimos las opciones que pertenecen al id seleccionado
            // del primer select
            if(arrayValores[i][0]==valor)
            {
                document.getElementById("select2").options[document.getElementById("select2").options.length]=new Option(arrayValores[i][2], arrayValores[i][1]);
            }
        }
 
        // habilitamos el segundo select
        document.getElementById("select2").disabled=false;
    }
}
 
/**
 * Una vez selecciona una valor del segundo select, obtenemos la información
 * de los dos selects y la mostramos
 */
function seleccionado_select2(value)
{
    var v1 = document.getElementById("select1");
    var valor1 = v1.options[v1.selectedIndex].value;
    var text1 = v1.options[v1.selectedIndex].text;
    var v2 = document.getElementById("select2");
    var valor2 = v2.options[v2.selectedIndex].value;
    var text2 = v2.options[v2.selectedIndex].text;
 
    alert("Se ha seleccionado el valor "+valor1+" ("+text1+") del primer select y el valor "+valor2+" ("+text2+") del segundo select");
}