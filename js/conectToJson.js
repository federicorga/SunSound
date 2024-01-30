


const catalogJson = `json/cards.json`;

const listaPageWeb = [];


generarId = (array, objeto) => { //Genera Id de forma dinamica

  if (array.length === 0) {
      objeto.id = 1;

  }

  else {
      objeto.id = array[array.length - 1].id + 1;

  };

}



async function ArrayJsonToOtherArray(arrayJson, otherArray) {

  const valor = await arrayJson;

  valor.forEach((list) => {

    generarId(otherArray,list);
    otherArray.push(list);

    //permite agregar los Objetos del archivo.json ya transformados en array a otro array.
    // de forma asincronica ya que se debe esperar a que cargue todo.
  });

  return otherArray;


}

async function convertJsonToArrayJson(archivoJson) {

  //Convierte archivo JSON en un Array de objetos de JavaScript.

  console.log(`Transformando archivo JSON en respuesta: ${archivoJson}`);

  const respuesta = await fetch(archivoJson);

  if (respuesta.status === 200) {

    console.log(`Transformacion correcta... ${respuesta.status} ${respuesta.statusText}`);
    console.log(respuesta);

  } else {
    console.log(`Error en transformacion... ${respuesta.status} ${respuesta.statusText} !!`)
    return console.log(respuesta);

  }

  console.log("Transformando respuesta a array de Objetos JavaScript...");

  const arrayJson = await respuesta.json();

  console.log(`transformacion finalizada...`);

  console.log(arrayJson);

  return arrayJson;
  // este arrayJson puede usarse directamente con una funcion asincronica


}

