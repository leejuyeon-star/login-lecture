// 서버의 중심파일

"use strict"

const express = require("express"); //  express 프로그램 가져오기
const app = express();  //  express 별명짓기

//라우터와 app.js 연결시키기코드
const home = require("./src/routes/home");  

//앱 세팅
app.set("views", "./src/views");  //뷰 세팅, 뷰폴더명 적기
app.set("view engine", "ejs"); //뷰 엔진 세팅


app.use("/", home);  // use==미들 웨어를 등록해주는 메서드 //라우터와 app.js 연결시키기코드


module.exports = app;




