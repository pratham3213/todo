import express from "express";
import mongoose from "mongoose";
import cors from 'cors';



var app=express()

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/mern-todo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log('Connected to DB')}).catch(console.error);

import Todo from "./models/todo.js";

app.get('/todos', async (req, res)=>{
    var todos= await Todo.find();
    res.json(todos);
});

app.post('/todo/new', (req,res)=>{
    var todo=new Todo({
        text: req.body.text
    });

    todo.save();
    res.json(todo);
})

app.delete('/todo/delete/:id', async (req,res)=>{
    var result= await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
});

app.put('/todo/complete/:id', async (req,res)=>{
    var todo=await Todo.findById(req.params.id);
    todo.complete==!todo.complete;
    todo.save();
    res.json(todo);
})

app.listen(3001, ()=>{console.log("Server is running")} );