const alumnos = require('../Data/nuevo.json');
const lista=(request)=>{
  var result=alumnos;
  //var alum = JSON.parse('../Data/nuevo.json');
  return (JSON.stringify(result));
};
exports.doLista=function (req){
  return (lista(req));
}
