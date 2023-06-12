const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const document = require("./documents.json");

// Support parsing JSON requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search
app.get("/search", (req, res) => {
    try {
        const query = req.query.q;

        if(!query) {
            res.status(200).json(document);
        } else {
            const result = document.filter((obj) => 
                Object.values(obj).some((value) => 
                    String(value).toLowerCase().includes(query.toLowerCase())
                )
            );
    
            result.length === 0
            ? res.sendStatus(404)
            : res.status(200).json(result);
        };
    } catch (error) {
        res.status(500).json(error)
    }
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
    try {
        const id = req.params.id;

        const result = document.find((obj) => String(obj.id) === id);
    
        result 
        ? res.status(200).json(result)
        : res.sendStatus(404);
    } catch (error) {
        res.status(500).json(error);
    }
});

// POST /search
app.post("/search", (req, res) => {
    try {
        const query = req.query.q;
        const fields = req.body.fields;
    
        if (query && fields) {
            res.status(400).json("400 Bad request. Both query parameter 'q' in the URL and 'fields' in the request body cannot be provided.");
            return;
        } else if (query) {
            const result = document.filter((obj) => 
                Object.values(obj).some((value) => 
                    String(value).toLowerCase().includes(query.toLowerCase())
                )
            );

            result.length === 0
            ? res.sendStatus(404)
            : res.status(200).json(result);
        } else if (fields) {
            const result = document.filter((obj) => 
                Object.keys(fields).every((key) => 
                    fields[key] === obj[key]));
            
            result.length === 0
            ? res.sendStatus(404)
            : res.status(200).json(result);
        }
    } catch (error) {
        res.send(500).json(error);
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});