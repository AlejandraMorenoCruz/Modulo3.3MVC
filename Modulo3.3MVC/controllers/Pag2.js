const lista=require('../models/search.js');
const listAlumnos=(request)=>{
  var result=listAlumnos();
  return (JSON.stringify(result));
};
module.exports=listAlumnos;
