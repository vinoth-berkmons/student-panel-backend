
function getCourses(req, res){
    res.json({message: "List of courses"});
}

function course() {
    return {
        getAll: getCourses
    }
}

module.exports = course();