const express =require('express')
const connectdb = require('./config/mongoose')
const dotenv=require('dotenv')
const userrouter=require('./routes/userrouter.js')
const postrouter=require('./routes/postrouter.js')
const cookieparser=require('cookie-parser')
const cors=require('cors');


dotenv.config();
connectdb();

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true, 
// }));

const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,  
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
};

app.use(cors(corsOptions));

// app.options('/posts/create', cors());


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/users',userrouter)
app.use('/posts',postrouter)

app.listen(3000);
