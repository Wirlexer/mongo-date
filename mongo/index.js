const {MongoClient} = require('mongodb')
const client = new MongoClient('mongodb+srv://Exer:exer76ru@cluster0.xyhme.mongodb.net/mongo?retryWrites=true&w=majority')

const start = async () => {
    try {
        await client.connect()
        console.log('Соединение установлено')
        //
        await client.db().dropCollection('users')
        //
        await client.db().createCollection('users')
        const users = client.db().collection('users')
await users.insertMany([
    {name: "Urab", age:27},
    {name: "Kyohinc", age:20},
    {name: "Wanerni", age:21},
    {name: "Llahic", age:23},
    {name: "Ficomit", age:51},
    {name: "Enrod", age:15},
    {name: "Psth", age:45},
    {name: "Udi", age:27},
    {name: "Migi", age:54},
    {name: "Kya", age:33},
    {name: "Ket", age:17},
    {name: "Rizela", age:25},
    {name: "Ayuli", age:29},
    {name: "Conaschi", age:46},
    {name: "Chaiar", age:18},
])
const user =  await users.find(
    { age: { $gte: 21, $lte: 30 } }
).toArray(function(err, users) {
    console.log(users);
})
    } catch(e) {
        console.log(e)
    }
}

start()