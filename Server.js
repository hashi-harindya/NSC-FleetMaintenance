import express from "express"

let app = express()

app.get("/",
    (req, res)=>{
    console.log("That is a request")
    res.json(
        {
            "message" : "Good morning"+req.body.name
        })
});

app.post("/",
    (req, res)=>{
        console.log("This is a post request")
    });

app.delete("/",
    (req, res)=>{
     console.log("That is a delete request")
 });



app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
