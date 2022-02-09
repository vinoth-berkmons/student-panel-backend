const services = require('../services');

function getStudents(req, res){
    services.students.getAll.then(students => {
        res.json({sucess: true, data: students});
    }).catch(err => {
        res.status = 500;
        res.json({sucess: false, error: err});
    });
}

function getStudent(req, res){
    services.students.getOne(req.params.id).then(student => {
        res.json({sucess: true, data: student});
    }).catch(err => {
        res.status = 500;
        res.json({sucess: false, error: err});
    });
}

function enrollToCourse(req, res){
    res.json({message: "Enrolled to course"});
}

function student() {
    return {
        getAll: getStudents,
        getOne: getStudent,
        enrollToCourse: enrollToCourse,
    }
}

module.exports = student();