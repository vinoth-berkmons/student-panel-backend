function getStudents(req, res){
    res.json({message: "get all students"});
}

function enrollToCourse(req, res){
    res.json({message: "Enrolled to course"});
}

function student() {
    return {
        getAll: getStudents,
        enrollToCourse: enrollToCourse
    }
}

module.exports = student();