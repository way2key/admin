const User = require('../data-schematic/user-schematic');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../secret');


exports.createAStudent = (student) => {
  return new Promise( (resolve, reject) => {
    let newStudent = new User({
      firstname: student.firstname,
      lastname: student.lastname,
      hash: student.hash,
      clockMachine: student.clockMachine,
      timeplanId: student.timeplanId,
      type: 0
    });

    newStudent.save()
    .then(
      () => resolve("Stagiaire créé!")
    )
    .catch(
      error => reject(error)
    )
  })
}

exports.getAllStudents = () => {
  return new Promise( (resolve, reject) => {
    User.find({type:0})
    .then((students) => resolve(students))
    .catch(error => reject("Unable to fetch Student from db <= "+error));
  })
}

exports.allotStudent = (student) => {
  return new Promise( (resolve, reject) => {
    User.updateOne({_id:student._id},{...student, _id:student._id})
    .then(
      () => resolve('success')
    )
    .catch(
      error => reject("Unable to put student to DB :( <= "+error)
    )
  })
}

exports.getUserFromToken = (token) => {
  return new Promise( (resolve, reject) => {
    try {
      verifiedJwt = jwt.verify(token, secret);
    }
    catch {
      reject("Unable to parse token")
    }
    let userId= verifiedJwt.userId;
    User.findOne({_id: userId})
    .then((teacher) => resolve(teacher))
    .catch(error => reject(teacher));
  })
}
