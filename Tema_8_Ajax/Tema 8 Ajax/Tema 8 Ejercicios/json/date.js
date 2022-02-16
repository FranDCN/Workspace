function generateData () { 
  let fecha = [];
  let info_fecha= new Date()
  fecha.push({
      "valor": info_fecha
    });  

  return {fecha};
}


module.exports = generateData;
