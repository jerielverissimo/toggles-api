const toggleController=require("./toggleController");

module.exports = (router) =>{
    router.get('/toggles', (req, res) => {
        res.send(['Rede', 'number']);
    });

    router.post('/toggle', (req, res) => {
        toggleController.add(req, res)
    });

    return router;
}