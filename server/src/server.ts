import express, { Express } from "express";
const dotenv = require('dotenv');
const DBconnection = require('./config/DBconnection')

DBconnection()
dotenv.config();

const server: Express = express();
const port = process.env.PORT || 5000;


server.use(express.json());
server.use("/api/users", require('./routes/userRoute'));


server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})