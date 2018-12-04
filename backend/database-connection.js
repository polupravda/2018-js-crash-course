const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/educationfinder', {useNewUrlParser: true})
    .then(()=>{
        console.log('connected')
    })
    .catch(err => {
        console.error(err)
    })