const utilisateur = require("../controllers/control");
const connection = require("../database/base");

const data = class{
    static insertion=(donne)=>{
        let {nom,prenom,email,password,numero}=donne
        console.log("fgggb",donne);
        let inserer = "INSERT INTO users(nom,prenom,email,password,numero)VALUES(?,?,?,?,?);";
        connection.query(inserer,[nom,prenom,email,password,numero],(error,result)=>{
            if(error){
                console.log("erreur",error)
           }
           else{

                console.log(result);
           }

        })
    }
    static selection = ()=>{
        return new Promise((resolve,reject)=>
        connect.query('SELECT * FROM users', function(error,resultat){
               
            if(error){
                console.log(error);
                reject(error)
                  
            }
            else{
                resolve(resultat)  
            }
            
        })
        )
        
    } 
}
module.exports=data