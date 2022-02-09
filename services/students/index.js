var getStudents = new Promise((function (resolve, reject) {
    resolve([
        {
            id: "98888880", firstName: "Student 1", lastName: "intial", email: "student1@stu.com", mobile: "+919999999999", gender: "male", dob: "1995-05-05", status: "Sophmore", department: "Computer Science", courses: [
                { id: "88888880", name: "Course 1" }
            ]
        },
        {
            id: "98888881", firstName: "Student 2", lastName: "intial", email: "student2@stu.com", mobile: "+919999999991", gender: "female", dob: "1995-06-05", status: "Sophmore", department: "Computer Science", courses: [
                { id: "88888880", name: "Course 1" }
            ]
        },
    ]);
}))

var getStudent = function (id) {
    return new Promise(function (resolve, reject) {
        resolve(
            {
                id: id, firstName: "Student 1", lastName: "intial", email: "student1@stu.com", mobile: "+919999999999", gender: "male", dob: "1995-05-05", status: "Sophmore", department: "Computer Science", courses: [
                    { id: "88888880", name: "Course 1" }
                ]
            },
        );
    });
};

module.exports = {
    getAll: getStudents,
    getOne: getStudent
}