import express from 'express'

const app = express();


app.get('/api/products', (req, res) => {
    const products = []

    setTimeout(() => {
        res.send(products)
    },3000)

})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
