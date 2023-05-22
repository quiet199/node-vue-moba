module.exports = app =>{

    const mongoose = require("mongoose");

    mongoose.connect("mongodb://127.0.0.1:27017/node-vue-moba",{
        useUnifiedTopology: true,
        useNewUrlParser:true
    }).then(() => console.log('DB Connected!')).catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });
}