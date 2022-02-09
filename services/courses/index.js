var getCourses = new Promise((function(resolve, reject) {
    resolve( [
        {id: "88888880", name: "Course 1", description: "Course 1 description", isActive: true, batch: "Sophmore", department: "Computer Science", startDate: "2022-01-31", endDate: "2022-06-31"},
        {id: "88888881", name: "Course 2", description: "Course 2 description", isActive: true, batch: "Junior", department: "Computer Science", startDate: "2022-01-31", endDate: "2022-06-31"},
        {id: "88888882", name: "Course 3", description: "Course 3 description", isActive: true, batch: "Senior", department: "Computer Science", startDate: "2022-01-31", endDate: "2022-06-31"},
        {id: "88888883", name: "Course 4", description: "Course 4 description", isActive: true, batch: "Freshmen", department: "Computer Science", startDate: "2022-01-31", endDate:"2022-06-31"},
    ]);
}))

module.exports = {
    getAll: getCourses
}