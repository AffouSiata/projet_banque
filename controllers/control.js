const connection = require("../database/base");
const data = require("../modele/requete");

const utilisateur =class{
    static accueil=(req=request,res=response)=>{
        res.render('index')
    }
    static  insertionpost=(req=request,res=response)=>{
        console.log("ggggggg",req.body);
        data.insertion(req.body).then(result=>{
            res.redirect('/')
        })
        .catch(error=>{
            console.log("error",error);
        })
       
    }
    static affiche =(req=request,res=response)=>{
        
        data.selection().then(result =>{
            res.render('index',{result:result})
        })
        .catch(error =>{
          res.redirect('/error404')

        })
       
        
    }
    static connectionPost=(req=request,res=response)=>{
        
        data.connection(req.body).then(result=>{
            res.redirect('/')
        })
        .catch(error=>{
            console.log(error);
        })
            
              
        
        
    }
    
   
}
module.exports = utilisateur