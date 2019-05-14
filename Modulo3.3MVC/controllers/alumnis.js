const modelP1= require('../models/modeloPag1.js');
const url= require('url');
const alumnos=(request)=>{
  var result = modelP1();
  processaGet(request, result);
  return (JSON.stringify(result));
}
function processaGet (peticion, result){
  let miURL= url.parse(peticion.url, true);
  if(miURL.query.func==='alta'){
    if(miURL.query.Nombre!==""&& miURL.query.ApellidoPaterno!==""&& miURL.query.ApellidoMaterno!==""){
      let nuevoAlumno={
        NombreP: miURL.query.Nombre,
        ApellidoP: miURL.query.ApellidoPaterno,
        ApellidoM: miURL.query.ApellidoMaterno
      }
      result.push(nuevoAlumno);
    }
  }
}

module.exports = alumnos;




/*exports.doLista=function (req){
  return (lista(req));
}
*/
