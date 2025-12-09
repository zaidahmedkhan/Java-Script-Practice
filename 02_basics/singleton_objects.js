// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = 1;
tinderUser.email = "something@gmail.com"


const course = {
    courseName : "JS IN HINDI",
    price: 999,
    courseInstructor: "zaid",
}

console.log(course.courseName);

const {courseName : name} = course;

console.log(name);

