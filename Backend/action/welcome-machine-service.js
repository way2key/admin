const moment = require('moment');

exports.welcomeAMachine = (machine) => {
  return new Promise( (resolve, reject) => {
    let payload = {name: machine.name, temps: moment().format()}
    if(payload){
      resolve(payload);
    }else{
      reject("erreur d'accueil");
    }
  })
}
