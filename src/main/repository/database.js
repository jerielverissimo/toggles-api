const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}; 

const database={
    async insert(document){

        const conn = new MongoClient (uri, options);

        try {
            
            await conn.connect();

            const db = conn.db('db-toggles');

            const collection = db.collection('toggles');

            await collection.insertOne(document);

        } catch (error) {

            console.log(error);
            throw new Error(error);
        
        } finally {

            await conn.close();

        }  
    },

    async find(){

        const conn = new MongoClient (uri, options);

        try {
            
            await conn.connect();

            const db = conn.db('db-toggles');

            const collection = db.collection('toggles');

            return await collection.find().toArray();

        } catch (error) {

            console.log(error);
            throw new Error(error);
        
        } finally {

            await conn.close();

        }  
    }
};
module.exports=database;