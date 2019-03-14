import test from 'ava';
const axios = require('axios');

test('verif presence formulaire ', async t => {
  await axios.get('http://localhost:3000')
  .then(function (response) {
    // handle success
    console.log(response.data.toString());
    if(response.data.toString().includes("<form")){
      t.pass();
    }
    else{
      t.fail();
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    t.fail();
  })
});
//On fait une requpete Get pour récupérer les informations.
//On check dans la response s'il ya le formulaire ou pas
