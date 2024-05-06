import express from 'express'

const app = express();


app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: ''
        },
        {
            id: 2,
            name: 'table glass',
            price: 250,
            image: ''
        },
        {
            id: 3,
            name: 'table plastic',
            price: 150,
            image: ''
        },
        {
            id: 4,
            name: 'table metal',
            price: 300,
            image: ''
        },
        {
            id: 5,
            name: 'table polyster',
            price: 150,
            image: ''
        },
    ]

    if(req.query.search) {
        const filterProduct = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProduct);
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000);

})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
