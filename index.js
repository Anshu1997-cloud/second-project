const express = require('express');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors')
const { connection } = require('./db');
const { UserModel } = require('./model/userModel');
const {productRouter} = require('./Routes/productRoute')

const app = express();

const PORT = process.env.PORT || 4500

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
     origin : "*",
     credentials: true,
}));
app.use("/products" , productRouter)
// app.all("*" , (req, res) => res.send("That route doesnot exist"))

app.post("/register", async (req, res) => {
    const {  username ,email, password} = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        bcrypt.hash(password, 5, async function (err, hash) {
            if (err) {
                return res.status(500).json({ error: 'Something went wrong while hashing' });
            }

            const newUser = new UserModel({ username, email, password: hash });
            await newUser.save();

            res.status(201).json({ message: 'New user has been created' });
        });
    } catch (error) {
        console.error('Error in registering the user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                const token = jwt.sign({ userID: user._id, user: user.username }, 'masai');
                res.status(200).json({ message: 'Login successful', token });
            } else {
                res.status(401).json({ error: 'Wrong password' });
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Server is running on http://localhost:${PORT}, connected to the database`);
    } catch (error) {
        console.error(error);
    }
});

