const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs')//because we want to use a partials;
const port=8000;

const staticpath=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.use(express.static(staticpath));
app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.get('/',(req,res)=>{
    res.render('index',{
        title:"Wether-Dekho",
        logo:"Mausam Vibhag"
    });
});


app.get("/about",(req,res)=>{
    res.render('about',{
        logo:"Mausam Vibhag"
    });
});

app.get("/wether",(req,res)=>{
    res.render('wether',{
        logo:"Mausam Vibhag"
    })
});

app.get("/articles",(req,res)=>{
    res.render('articles',{
        logo:"Mausam Vibhag"
    })
});

app.get("*",(req,res)=>{
    res.render('404.hbs',{
        logo:"Mausam Vibhag"
    });
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:8000/`);
});