const { response } = require('express');

const usuariosGet = (req, res = response) => {
    
    
    
    res.json({
        msg: 'get API - usuariosGet'
    });
}

const usuariosPost = (req, res = response) => {
    res.json({
        msg: 'get API - usuariosPost'
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'get API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'get API - usuariosDelete'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}