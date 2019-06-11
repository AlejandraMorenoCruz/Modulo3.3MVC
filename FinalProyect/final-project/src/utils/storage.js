function store(key, data){
  localStorage.setItem(key, JSON.stringify(data));
}

function retreive (key){
  return JSON.parse(localStorage.gerItem(key));
}
export default{
  store,
  retreive,
}
