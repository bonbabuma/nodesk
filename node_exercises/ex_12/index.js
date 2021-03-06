const express = require('express');
const app = express();
const products = {
        description: 'Products',
        items: [
          { name: 'Star Wars jacket' , price: 100},
          { name: 'FIFA 22 PS4' , price: 79},
          { name: 'Superheore t-shirt' , price: 10},
          { name: 'Jets game shirt' , price: 200},
          { name: 'Large Meat lovers pizza' , price: 12},
          { name: 'Canada Dry  bottle' , price: 2}
        ]
      }

app.listen(3000,function() {
    console.log(`Listening on Port 3000`);
})

app.get("/api/products",function(req,res) {
    res.json(products);
})