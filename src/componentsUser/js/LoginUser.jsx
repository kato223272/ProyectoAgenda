function ejecutarBase(){
    const mysql = require('mysql');
    const bd = mysql.createConnection({

        host: 'pi-bs.cqcdzfbv1wzk.us-east-1.rds.amazonaws.com',
    
        user: 'admin',
    
        password: '#LgSc06042004#',
    
        database: 'Proyecto_Integrador',
    
        insecureAuth: true
    
    });

    bd.connect(function(err){
        if(err){
            console.log(err);
        }

        else{
            bd.query('select * from Proyecto_Integrador.Empresa;',function(err,resultado){
                if(err){
                    console.log(err);
                }

                else{
                    for(var empresa of resultado){
                        console.log(empresa);
                    }
                }
            });
        }
    });
}

export default ejecutarBase;