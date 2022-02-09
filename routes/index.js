const student = require('./students');
const course = require('./courses');

function setRoutes(app) {
  app.get('/students', student.getAll );
  app.post('/students/addCourse', student.enrollToCourse );
  app.get('/courses', course.getAll );
}

module.exports.initialize = setRoutes;