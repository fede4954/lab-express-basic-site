const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

//Routes
app.get('/', (_, response) => {
    response.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (_, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (_, response) => {
    response.sendFile(__dirname + '/views/works.html')
})

app.listen(3000, () => { 
    console.log('Server active in port 3000')
})
  
  
  

  