const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require('cors')
const saltRounds = 10;

const app = express();

var http = require('http').Server(app)
var io = require('socket.io')(http)
var path = require('path')

app.use(bodyParser.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/jamShack")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: String,
    password: String
})

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    productName: String,
    price: String,
    productImage: String,
    contact: String,
    name: String,
    email: String
})

const requestSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    message: String,
    contact: String,
    name: String,
    email: String,
    replies: [{
        email: String,
        name: String,
        message: String
    }]
})

const User = new mongoose.model("User", userSchema);
const Product = new mongoose.model("Product", productSchema);
const Rent = new mongoose.model("Rent", productSchema);
const Request = new mongoose.model("Request", requestSchema);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/userData', (req, res) => {
    User.find({ email: req.query.email }, function (err, foundUser) {
        console.log(foundUser[0]);
        res.send(foundUser[0]);
    })
})

app.post('/register', async (req, res) => {
    bcrypt
        .hash(req.body.password, saltRounds)
        .then(async (hash) => {
            hashedP = hash;
            try {
                var user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                });
                await user.save();
                res.status(200).send("Registered");
            }
            catch (err) {
                if (err.keyValue.email) {
                    res.status(401).send("Invalid User");
                }
            }
        })
        .catch(err => console.error(err.message))
})

app.post("/login", async (req, res) => {
    const foundUser = await User.find({ email: req.body.email });
    if (foundUser.length > 0) {
        const hash = foundUser[0].password;
        bcrypt
            .compare(req.body.password, hash)
            .then(response => {
                if (response) {
                    res.status(200).send("Success");
                }
                else {
                    res.status(401).send("Fail");
                }
            })
            .catch(err => console.error(err.message))
    }
    else {
        res.status(401).send("Fail");
    }
});

app.post('/addForSale', async (req, res) => {
    var flag = 1
    while (flag) {
        try {
            const newProduct = new Product({
                id: (Math.random() * 1000000).toFixed(0),
                productName: req.body.productName,
                price: req.body.price,
                productImage: req.body.productImage,
                contact: req.body.contact ? req.body.contact : null,
                name: req.body.name,
                email: req.body.email,
            })
            await newProduct.save();
            flag = 0;
            res.status(200).send("Added")
        }
        catch (err) {
            if (err.keyValue.id) {
                flag = 1;
            } else {
                res.status(500).send("Error")
            }
        }
    }
})

app.get('/saleProducts', async (req, res) => {
    const allProducts = await Product.find();
    res.send(allProducts);
})

app.get('/productDetails', async (req, res) => {
    const productDetail = await Product.find({ id: req.query.id });
    res.send(productDetail[0]);
})

app.post('/addForRent', async (req, res) => {
    var flag = 1
    while (flag) {
        try {
            const newRent = new Rent({
                id: (Math.random() * 1000000).toFixed(0),
                productName: req.body.productName,
                price: req.body.price,
                productImage: req.body.productImage,
                contact: req.body.contact ? req.body.contact : null,
                name: req.body.name,
                email: req.body.email,
            })
            await newRent.save();
            flag = 0;
            res.status(200).send("Added")
        }
        catch (err) {
            if (err.keyValue.id) {
                flag = 1;
            } else {
                res.status(500).send("Error")
            }
        }
    }
})

app.get('/rentProducts', async (req, res) => {
    const allProducts = await Rent.find();
    res.send(allProducts);
})

app.get('/rentProductDetails', async (req, res) => {
    const productDetail = await Rent.find({ id: req.query.id });
    res.send(productDetail[0]);
})

app.post('/addRequest', async (req, res) => {
    var flag = 1
    while (flag) {
        try {
            const newRequest = new Request({
                id: (Math.random() * 1000000).toFixed(0),
                message: req.body.message,
                contact: req.body.contact ? req.body.contact : null,
                name: req.body.name,
                email: req.body.email,
                replies: []
            })
            await newRequest.save();
            flag = 0;
            res.status(200).send("Added")
        }
        catch (err) {
            if (err.keyValue.id) {
                flag = 1;
            } else {
                res.status(500).send("Error")
            }
        }
    }
})

app.post('/replyRequest', async (req, res) => {
    var request = await Request.find({ id: req.body.id });
    if (request.length > 0) {
        const newReplies = request[0].replies;
        newReplies.push({
            email: req.body.email,
            name: req.body.name,
            message: req.body.message
        })
        const doc = await Request.findOneAndUpdate({ id: req.body.id }, { replies: newReplies }, {
            returnOriginal: false
        });
        res.status(200).send("Replied");
    } else {
        res.status(404).send("Request not find");
    }
})

app.get('/requestDetails', async (req, res) => {
    var request = await Request.find({ id: req.body.id });
    if (request.length > 0) {
        res.status(200).send(request[0]);
    } else {
        res.status(404).send("Request not find");
    }
})

//http://localhost:3000/chat?cred={"id":"309232","name":"Tushar"}

io.of('/chat')
    .on('connection', function (socket) {
        const roomId = JSON.parse(socket.handshake.query.cred)
        console.log("Connected");
        console.log('Input param : ' + roomId.id);
        socket.join("room-" + String(roomId.id))
        
        socket.on('chatFromClient', function (data) {
            socket.in("room-" + String(roomId.id)).emit('chatFromServer',data + " from " + roomId.name)
        })
})

http.listen(5000, () => {
    console.log("Server started at 5000");
})