const express = require('express');
const app = express();
const mongo = require('mongoose');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser').urlencoded();

mongo.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("MongoDB Connect Now");
});

app.set('view engine', 'ejs');
app.use(bodyParser);
const route = require('./controllers/index');

app.use('/', route.HomeRoute);
app.use('/users', route.UserRoute);





app.listen(PORT, () => console.log(`Express Server Start http://localhost:${PORT}/`));
