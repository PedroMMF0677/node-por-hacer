const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];
let descripcion = argv.d;
let status = argv.c;

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado(status);
        for (let tarea of listado) {
            console.log('======== POR HACER =========='.green)
            console.log(tarea.descripcion)
            console.log('Estado: ', tarea.completado)
            console.log('============================='.green)
        }
        break;
    case 'actualizar':
        let tarea2 = porHacer.actualizar(descripcion);
        for (let tarea of tarea2) {
            console.log('======== POR HACER =========='.blue)
            console.log(tarea.descripcion)
            console.log('Estado: ', tarea.completado)
            console.log('============================='.blue)
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(descripcion);
        console.log(borrado);
        break;
    default:
        console.log(`comando "${comando}" no reconocido`)
        break;
}