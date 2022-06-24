const connection = require("../database/base");
const data = require("../modele/requete");

const utilisateur =class{
    static accueil=(req=request,res=response)=>{
        res.render('index')
    }
    static  insertionpost=(req=request,res=response)=>{
        console.log("ggggggg",req.body);
        data.insertion(req.body)
        res.redirect('/')
    }
   
}
module.exports = utilisateur