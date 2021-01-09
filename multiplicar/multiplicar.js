const FileSistem = require('fs');

let listarTabla = (base, limite) =>{
    return new Promise((resolve,reject)=>{
        if( !Number(base) ){
            reject(`${ base } no es un numero `);
        }else if( !Number(limite) ){
            reject(`${ limite } no es un numero `);
        }
        
        lista = '';
        for( i=0 ; i <= limite ; i++ ){
            lista += `${ base } * ${ i } = ${ base * i} \n`;
        }
        resolve(lista);
    });
}

let crearArchivo = (base, limite) =>{
    return new Promise((resolve, reject)=>{
        
        if( !Number(base)){
            reject('No es un número');
            return;
        }
        
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += ` ${ base } * ${ i } = ${ base * i } \n`;
        }

        FileSistem.writeFile(`tabla-${base}.txt`,data,(err)=>{
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports ={
    crearArchivo,
    listarTabla
}
 
