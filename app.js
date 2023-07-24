require('dotenv').config();
const express=require('express')
const  path=require('path')
const hbs=require('hbs')
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const bodyparser=require("body-parser");
const cookieparser=require("cookie-parser");


// const session=require("express-session");


const app=express();
const port =process.env.PORT || 80;
const {json}=require("express")
//for serving static files
// app.use(express.static(path.join(__dirname, 'static'));

// app.use(express.static(path.join(__dirname, 'static')));

// app.get("/",(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname+'/static/index.html'));
// });
// app.get("/login",(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname+'/static/login.html'));
// });
// app.get("/stores",(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname+'/static/stores.html'));
// });
// app.get("/about_us",(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname+'/static/about_us.html'));
// });

// app.use(express.static(path.join(__dirname, 'static'));
app.use(express.static(path.join(__dirname, '/templates/image')));
app.use(express.static(path.join(__dirname, '/templates/css')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());

//PUG SPECIFIC STUF 
//set template engine for pug
app.set('view engine','hbs')

//set the views directory
app.set('views', path.join(__dirname,'/templates/views'))
hbs.registerPartials(path.join(__dirname,'/templates/partials'))

console.log(process.env.SECRET_KEY)

// our pug demo end point
app.get("/",(req,res)=>{
    res.status(200).render('index')
});
app.get("/about_us",(req,res)=>{
    res.status(200).render('about_us');
    // console.log(`this is cookie ${req.cookies.jwt}`);
});
app.get("/login",(req,res)=>{
    res.status(200).render('login')
});
app.get("/stores",(req,res)=>{
    res.status(200).render('stores')
});
app.get("/register",(req,res)=>{
    res.status(200).render('register')
});




// app.get("/",(req,res)=>{
//     res.status(200).send("hello world");
// });
// app.get("/about",(req,res)=>{
//     res.send("hello world this is about");
// });
// app.post("/about",(req,res)=>{
//     res.send("hello world post")
// });

 

app.listen(port ,()=>{
    console.log(`successful on ${port}`)
})

// TtPnErFbgSX3wxziK72aWZA62MQNM1liPU_uPRVcHUk