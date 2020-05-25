const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea'

};

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', { descripcion })
    .command('listar', 'lista todos los elementos', { completado })
    .command('actualizar', 'actualiza un elemento', { descripcion, completado })
    .command('borrar', 'Elimina un elemento por hacer', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}