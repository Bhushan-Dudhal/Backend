import express from "express"
const app = express();
app.use(express.static('dist'));

app.get("/", (req, res) => {
    res.send('server is redy ')
});

app.get("/api/jokes", (req, res) => {

    const jokes = [
        {
            id: 1,
            title: " A joke",
            content: "This is a joke"
            
        },
        {
            id: 2,
           title: "Another  joke",
            content:"This is Another joke"    
            
        },
        {
            id: 3,
             title: "three joke",
            content: "This is a three joke"
            
        },

        {
            id: 4,
             title: "four joke",
            content:"This is a four joke"
            
        },


        {
            id: 5,
             title: " fifth joke",
            content: "This is a fifth joke"
            
        },
    ];
    
    res.send(jokes)
});


const port = process.env.PORT || 3000;


app.listen(port, () => {
   console.log(`server at http://localhost:${port}`); 
});