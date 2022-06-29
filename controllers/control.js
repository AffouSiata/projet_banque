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
    static affiche =(req=request,res=response)=>{
        
        data.selection().then(resultat =>{
            res.render('index',{resultat:resultat})
        })
        .catch(error =>{
          res.redirect('/error404')

        })
       
        
    }
    static connectionPost=(req=request,res=response)=>{

    }
    
   
}
module.exports = utilisateur