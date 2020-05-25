const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (error) => {
        if (error) throw new error('No se pudo grabar', error);
    });
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = (status) => {
    listadoPorHacer = require('../db/data.json');
    if (status !== undefined) {
        let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === status);
        console.log(nuevoListado)
        listadoPorHacer = nuevoListado;
    }
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
    } else {
        return false;
    }


    return listadoPorHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
    } else {
        return false;
    }
    return true;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}