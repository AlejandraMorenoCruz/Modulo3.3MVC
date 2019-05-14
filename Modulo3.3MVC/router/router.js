const Pag1=require('../controllers/Pag1');
const alumnos = require ('../controllers/alumnis.js');
const router =(request, response)=>{
  if (request.url==='/pag1'){
    var result = Pag1(request);
    response.end(result);
    Pag1(require); //llama al controador
  }
  else if (require.url==='/pag2') {
    response.end (result);
    Pag2(require);
  }
  else if (request.url.startsWith('/alumnos')){
    response.end (result);
    alumnos.doLista(request);
  }
  else if (require.url.startsWith('/search')){
    var muestra = listAlumnos(request);
    response.end(muesta);
    listAlumnos(require);
  }
}

/*
function procesaAlumno(peticion) {
  console.log(peticion.url);
  let miURL = url.parse(peticion.url,TRUE);
  //î convierte la URL de texto en un objeto de js
  if (miURL.query.func === 'alta', result){
    let nuevoRegistro = {
      NombreP: miURL.query.n,
      ApellidoP:miURL.query.ap,
      ApellidoM:miURL.quiery.am
    }
    modelo.push(nuevoRegistro);
    modelo.end(result);
  }
}*/

module.exports = router;
