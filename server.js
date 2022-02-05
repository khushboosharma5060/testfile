// const express = require('express')
// const app = express()
// const port = 3000

const { zalgo } = require("colors");
const { subnetMatch } = require("ipaddr.js");

// app.get('/', (req, res) => {
//   res.send('my name is Raju')
// })

// app.listen(port, () => {
//   console.log('server is runing')
// // }

















const express = require('express')
const bodyParser = require("body-parser");
const Api = express()
Api.use(bodyParser.json());
const port = 3200

let output = [];

Api.post('/addPerson', (req, resp) => {
    const input = req.body
    output.push(input)
    resp.send("ok")
}); 

 
Api.get('/getPerson', (req, resp) => {
    resp.send(output);

});

Api.get('/getPerson/:id', (req, resp) => {

    const id = req.params.id
    const answer = output.find(obj => {
        if(String(obj.id) === id){
            return true
        } else {
            return false
        }
    });
    resp.send(answer )
});

Api.delete('/deletePersone/:id', (req, resp) => {
    const id = req.params.id
    const sum = output.findIndex(obj => obj.id === id)
    output.splice(sum, 1)
    resp.send("ok")
})

Api.put('/updatePersone/:id', (req, resp) => {
    const id = req.params.id
    
    const objIndex = output.findIndex(obj => String(obj.id) === id)
    output[objIndex].name = req.body.name, 
    output[objIndex].location = req.body.location
    
        resp.send(output[objIndex])
});


Api.listen(port, () => {
    console.log('server is going on')
});





















const express = require('express');
const Api = express();
const bodyParser = require("body-parser");
Api.use(bodyParser.json());
const port = 3200;

const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydatabase'

let collection;
async function main() {
    await client.connect();
    const db = client.db(dbName);
    collection = db.collection('persons');

}
main();




Api.post('/addPerson', (req, resp) => {
    collection.insertOne(req.body);
    resp.send("ok");
});



Api.get('/getPerson', async (req, resp) => {
    const persons = await collection.find({}).toArray();
    resp.send(persons);
});


Api.get('/getPerson/:id', async (req, resp) => {
    const id = req.params.id
    
    const person = await collection.find({id: +req.params.id}).toArray();
    resp.send(person);
});


Api.put('/updatePerson/:id', (req, resp) => {

    const sum = output.findIndex(obj => String(obj.id) === req.params.id)
    output[sum].bookName = req.body.bookName,
    output[sum].authorName = req.body.authorName
    
        resp.send(output[sum]);
    });



Api.delete('/deletePerson/:id', (req, resp) => {

    const dltPerson = output.findIndex(obj => obj.id === req.params.id);
        output.splice(dltPerson)
        resp.send('deleteted')
});
    Api.listen(port, () => {
        console.log(`server is runing on port ${port}`)
    });







// const express = require('express');
//  const Api = express();
// const bodyParser = require("body-parser");
// Api.use(bodyParser.json());
// const port = 3200;

// const {MongoClient} = require('mongodb')
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'mydatabase'

// let collection;
// async function main() {
//     await client.connect();
//     const db = client.db(dbName);
//     collection = db.collection('persons');

// }
// main();

































// const input = [{name : 'Raju', gender : 'male'}, 
//                {name : 'khushboo', gender : 'female'}, 
//                {name : 'Arya', gender : 'female'}];

// const output = {};
// input.map(sum => {
//     if(output[sum.gender]){
//     output[sum.gender] = [...output[sum.gender],sum]
//     } else {
//     output[sum.gender] = [sum]
//     }
// });
// console.log(output);
                                                                 

