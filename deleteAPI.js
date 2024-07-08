const express = require('express');
const dbConnect = require('./connectionfile');
const app = express();
const mongodb=require('mongodb');

app.use(express.json());
app.delete('/:id', async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    console.log(req.params.id);
    res.send(result);
});
app.listen(5100);