const port = 3000

const app = require('express')()
const bodyParser = require('express').json()
const bancoProducts = require('./banco')

app.use(bodyParser)

app.get('/products', (req, res, next) => {
    res.send(bancoProducts.getProducts())
    next()
})

app.get('/products/:id', (req, res, next) => {
    res.send(bancoProducts.getProduct(req.params.id))
    next()
})

app.post('/products', (req, res, next) => {

    bancoProducts.save(req.body)
    res.send({ status: 200, message: 'Save With Success' })
    next()
})

app.delete('/products/:id',(req,res,next)=>{
    bancoProducts.remove(req.params.id)
    res.send({ status: 200, message: 'Remove With Success' })
    next()
})


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})