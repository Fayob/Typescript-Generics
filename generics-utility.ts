interface CourseGoal {
    title: string
    description: string
    completionDate: Date
}

function createCourseGoal(title:string, description: string, date: Date){
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completionDate = date
    return courseGoal  // if this doesn't work (due to the fact it's a partial courseGoal) use the one below
    return courseGoal as CourseGoal 
}

// console.log( createCourseGoal("title", "Another string to describe", new Date()));



// another built in generic utility
const Names: Readonly<string[]> = ["Max", "Manu", "Anna"]
// Names.push("James")
// Names.push("Susan")
