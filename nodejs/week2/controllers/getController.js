const document = require("../documents.json");

const qGetDoc = async (req, res) => {
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
            ? res.status(404).json("Your search returned no results")
            : res.status(200).json(result);
        };
    } catch (error) {
        res.status(500).json(error)
    }
};

const idGetDoc = async (req, res) => {
    try {
        const id = req.params.id;

        const result = document.find((obj) => String(obj.id) === id);
    
        result 
        ? res.status(200).json(result)
        : res.status(404).json("We didn't find document with requested id");
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    qGetDoc,
    idGetDoc
};