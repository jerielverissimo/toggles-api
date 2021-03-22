module.exports = (router) =>{
    router.get('/toggles', (req, res) => {
        res.send(['Rede', 'number']);
    });
    return router;
} 
