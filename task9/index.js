const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const db = "mongodb+srv://ayo:4hpSbUaOWdFkk8FW@cluster0.umgd2.mongodb.net/PeopleApi"

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Mongodb connected')
});



const PeopleRoute = require('./Routes/peopleRoute');
app.use('/people', PeopleRoute);


app.use((req, res, next)=>{
    res.status(404);
    res.send({
        error: 'Not Found'
    })
    next(err)
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.send({
        error: {
            status: error.status || 500,
            message: error.message
        }
    })
})

app.listen(3000);