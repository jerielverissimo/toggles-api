const toggleController=require("./toggleController");

module.exports = (router) =>{
    router.get('/toggles', (req, res) => {
        toggleController.list(req, res)
    });

    router.post('/toggle', (req, res) => {
        toggleController.add(req, res)
    });

    return router;
}