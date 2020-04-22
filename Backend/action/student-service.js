const User = require('../data-schematic/user-schematic');


exports.createAStudent = (student) => {
  return new Promise( (resolve, reject) => {
    let newStudent = new User({
      firstname: student.firstname,
      lastname: student.lastname,
      hash: student.hash,
      clockMachine: student.clockMachine,
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
    console.log(student);
    User.updateOne({_id:student._id},{...student, _id:student._id})
    .then(
      () => resolve('success')
    )
    .catch(
      error => reject("Unable to put student to DB :( <= "+error)
    )
  })
}
