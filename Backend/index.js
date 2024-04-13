const express = require("express");
const connection = require("./config/db")
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: '*',
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());
  
  // Increase server timeout
  app.use((req, res, next) => {
      res.setTimeout(120000, () => {
        console.log('Request timed out');
        res.status(500).json({ message: 'Request timed out' });
      });
      next();
  });
  
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// app.use(express.json());
// app.use(cors());



app.get("/", (req, res) => {
    res.send("Home page")
})


app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.listen(8080, async () => {
    try{
        await connection
        console.log("DB connected")
    }
    catch(err){
        console.log("error occur")
        console.log(err)
    }
    console.log("Listning on port 8080")
})