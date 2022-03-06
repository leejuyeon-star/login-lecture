"use strict"

// "/"경로의 컨트롤러
const hello = (req, res)=> {
    res.render("home/index");
};

// "login"경로의 컨트롤러
const login = (req, res)=>{
    res.render("home/login");
};


module.exports = {
    hello,
    login,
}
