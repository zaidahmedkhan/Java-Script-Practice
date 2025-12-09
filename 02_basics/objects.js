// singleton
//Object.create() // objects that are created through condtructor are calledf singleton


// object literals
const JsUser = {
    name: 'zaid',
    age: 20,
    email: 'test@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
};


// console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["age"]);


JsUser.email = "test@chatgpt.com";