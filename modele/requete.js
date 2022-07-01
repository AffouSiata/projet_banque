const utilisateur = require("../controllers/control");
const connection = require("../database/base");

const data = class{
    static insertion=(donne)=>{
        return new Promise((resolve,reject)=>{
            let {nom,prenom,email,password,numero}=donne
                console.log("fgggb",donne);
                let inserer = "INSERT INTO users(nom,prenom,email,password,numero)VALUES(?,?,?,?,?);";
                connection.query(inserer,[nom,prenom,email,password,numero],(error,result)=>{
                if(error){
                    reject(error)
                    // console.log("erreur",error)
                }
                else{
                    resolve(result)
                    // console.log(result);
                }

            })
        })
        
    }
    static selection = ()=>{
        return new Promise((resolve,reject)=>
        connect.query('SELECT * FROM users', function(error,result){
               
            if(error){
                console.log(error);
                reject(error)
                  
            }
            else{
                resolve(result)  
            }
            
        })
        )
        
    } 
    static connection=(nnn)=>{
        return new Promise((resolve,reject)=>{
            let  {email,password}=nnn
            console.log("connn",nnn);
            connect.query('SELECT * FROM users WHERE email=? and password=? ', [email,password],function(error,result){
                console.log("rrrrrrrrrrr",result);
                   if(result)
                    {
                        resolve(result)   
                    
                    
                    }
                    else{
                        
                        reject(error)
                    }       
        })

        })
    }
    
}
module.exports=data