var student = require('./student')
var teacher = require('./teacher')

teacher.add("James");

function add (teacherName, students){
  teacher.add(teacherName);

  students.forEach(function(item, index){
    students.add(item);
  })
}

exports.add = add;

// module.exports = add;
