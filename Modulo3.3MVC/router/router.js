const Pag1=require('../controllers/Pag1.js');
const alumnos = require ('../controllers/alumnis.js');
const busca = require ('../controllers/Pag2.js')
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
    var result=alumnos(request);
    response.end (result);

  }
  else if (request.url.startsWith('/search')){
    var search = busca(request); //aquí no está funcionando
    response.end(search);
  }
}

module.exports = router;
