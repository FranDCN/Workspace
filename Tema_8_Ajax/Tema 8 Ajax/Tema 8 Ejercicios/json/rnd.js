function generateData () { 
  let votos = [];
  let valor= Math.floor(Math.random() * 100)
  votos.push({
      "numero": valor
    });  

  return {votos};
}


module.exports = generateData;
