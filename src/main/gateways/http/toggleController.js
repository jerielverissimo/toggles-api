const toggleController= {
    async add(req, res) {
        try{
            res.status(200).send('Deu Sucesso!');            
        }
        catch(error){
            console.log(error);
            res.status(500).send(`${error}`);
        }
    }
};

module.exports=toggleController;
