const { insert } = require("../../repository/database");
const database=require("../../repository/database");

const toggleController= {
    async add(req, res) {
        try{
            const payload = req.body;
            console.log(payload);
            await database.insert(payload);
            res.status(200).send('Deu Sucesso!');            
        }
        catch(error){
            console.log(error);
            return res.status(500).send(`${error}`);
        }
    },

    async list(req, res) {
        try{
            let result = await database.find();
            result = result.map(document => ({name: document.name, value:document.value}));
            res.status(200).send(result);            
        }
        catch(error){
            console.log(error);
            return res.status(500).send(`${error}`);
        }
    }
};

module.exports=toggleController;
