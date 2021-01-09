const { crearArchivo , listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

let comando = argv._[0];

switch( comando ){
    case 'listar' :
        listarTabla(argv.base,argv.limite)
            .then(lista => console.log(lista))
            .catch(e => console.log(e));
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(e=>console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


