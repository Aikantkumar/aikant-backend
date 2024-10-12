import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// the word "use" is used for middlewares(like cors) and configurations
// app.use(cors()) ---> normal way of using it.but if we want to define that which frontend we want to connect then:-
app.use(cors({
    origin: process.env.CORS_ORIGIN
})) 
// WE DEFINED CORS_ORIGIN IN env file as '*' bcz we are allowing frontend request from anywhere.

// now we know that our backend will get data in the form of json or body so we need to handle that:-
app.use(express.json({limit: "16kb"}))
// now data will also come to backend in form of 'url' so to handle that:-
// app.use(express.urlencoded()) this is also enough
app.use(express.urlencoded({extended:true, limit:"16kb"}))

app.use(express.static("public"))

app.use(cookieParser())


export {app}