const toggleController= {
    async add(req, res) {
        console.log(req.body);
        res.status(200).send('Deu Sucesso!');
    }
};

module.exports=toggleController;
