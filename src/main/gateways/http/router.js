module.exports = (router) =>{
    router.get('/toggles', (req, res) => {
        res.send(['Rede', 'number']);
    });

    router.post('/toggle', (req, res) => {
        res.status(200).send('Deu Sucesso!');
    });

    return router;
}