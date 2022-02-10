const services = require('../services');

async function getStudents(req, res) {
    try {
        const students = await services.students.getAll();
        res.json({ success: true, data: students });
    }
    catch (err) {
        console.error(`error fetching students: ${err}`);
        res.status = 500;
        res.json({ sucess: false, error: err });
    }
}

async function getStudent(req, res) {
    try {
        const student = await services.students.getOne(req.params.id);
        res.json({ success: true, data: student });
    }
    catch (err) {
        console.error(`error fetching student: ${err}`);
        res.status = 500;
        res.json({ sucess: false, error: err });
    }
}

async function enrollToCourse(req, res) {
    try {
        const student = await services.students.getOne(req.body.studentId);
        const course = await services.courses.getOne(req.body.courseId);
        const isCourseFound = student.courses.find(course => course.id === req.body.courseId);
        if (isCourseFound) {
            throw `Student with id ${req.body.studentId} is already enrolled to course with id ${req.body.courseId}`;
        }
        const newStudent = await services.students.addCourse(student.id, course.id, course.name);
        res.json({ success: true, data: newStudent });
    }
    catch (err) {
        console.error(`adding course to student: ${err}`);
        res.status = 500;
        res.json({ sucess: false, error: err });
    }
}

function student() {
    return {
        getAll: getStudents,
        getOne: getStudent,
        enrollToCourse: enrollToCourse,
    }
}

module.exports = student();