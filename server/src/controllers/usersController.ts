const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
import { Request, Response } from 'express';
import { nanoid } from 'nanoid';

const User = require('../models/userModel');


let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


// const generateUniqueUsername = async (email: string): Promise<string> => {
//     let username: string = email.split("@")[0];
//     let isUserNameNotUnique: boolean = await User.exists({ username });
    
//     // Add a loop to generate a unique username
//     while (isUserNameNotUnique) {
//         username = `${username}_${nanoid(5)}`; // Generate a random string of 5 characters
//         isUserNameNotUnique = await User.exists({ username });
//     }

//     return username;
// }

const postUser = asyncHandler(async (req: Request, res: Response) => {

    let {fullname, email, password} = req.body;

    if (fullname.length < 3 || !fullname){
        return res.status(403).json(
            {"Error": "Name length must be than 3 letters long!"}
            );
    } 

    if (!email){
        return res.status(403).json(
            {"Error": "Your must provide an email!"}
            );
    }

    if (!emailRegex.test(email)){
        return res.status(403).json(
            {"Error": "An invalid Email!"}
            );
    }

    if (!passwordRegex.test(password)){
        return res.status(403).json(
            {"Error": "Password shold be 6 to 20 characters with numeric, uppercase, lowercase!"}
            );
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Generates Username 
    let username = email.split("@")[0];
    // const username = await generateUniqueUsername(email);
    console.log("Username: ", username)

    // Sends user infos to DB
    let user = await User.create({
        fullname, email,
        password: hashPassword,
        username,
    });

    if (user){
        res.status(201).json({_id: user.id, username: user.username})
    } else {
        res.status(400);
        throw new Error("User data are not valid!")
    }

    res.status(200).json({message: "User Registered Succesfully!"});
})


module.exports = {
    postUser
}