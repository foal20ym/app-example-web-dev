const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:5173"],
}
app.use(cors(corsOptions));

const port = 8080;

 const posts = [
    {
     id: 0,
     title: "test test",
     author: "Alex",
     content: "Hej nice lecture ",
     publishedDate: Date.now().toString(),
   },
   {
     id: 1,
     title: "Learning React",
     author: "Alice",
     content: "React makes it easy to build interactive user interfaces.",
     publishedDate: Date.now().toString(),
   },
   {
     id: 2,
     title: "Why TypeScript?",
     author: "Bob",
     content: "TypeScript adds static typing to JavaScript.",
     publishedDate: Date.now().toString(),
   },
   {
     id: 3,
     title: "Understanding MVC",
     author: "Charlie",
     content: "MVC separates an application into different responsibilities.",
     publishedDate: Date.now().toString(),
   }
 ];

app.get("/posts", (req,res) => {
    res.json(posts)
})

app.get("/posts/:id", (req, res) => {
  const postId = Number(req.params.id)
  const post = posts.find((item) => item.id === postId)

  if(!post){
    return res.status(404).json({message: "Post not found"})
  }

  return res.json(post)
})

app.listen(port, () => {
    console.log("http://localhost:8080/")
})