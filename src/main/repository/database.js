const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}; 

const database={
    async upsert(document){
        try {
        const conn = new MongoClient (uri, options)
        } catch (error) {
        
        }    
    }
};
module.exports=database;