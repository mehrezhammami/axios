const axios = require('axios')
const requestone=axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ec8e32e4fece669272e3f1901469e166')
const requestTow=axios.get('http://api.openweathermap.org/data/2.5/weather?q=Tunisia&APPID=ec8e32e4fece669272e3f1901469e166')

axios
  .all([requestone,requestTow])
  .then(axios.spread((firstResponse,secondReponse) => {
      console.log(firstResponse.data);
      console.log(secondReponse.data)
    })
  )
  .catch(errors => {
    console.error(errors);
  });