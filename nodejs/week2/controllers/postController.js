const document = require("../documents.json");

const searchByPost = async (req, res) => {
    try {
        const query = req.query.q;
        const fields = req.body.fields;

        if (!query && !fields) {
            res.status(400).json("400 Bad request. Please, provide either a query parameter or a request body.");
            return;
        } else if (query && fields) {
            res.status(400).json("400 Bad request. Both query parameter 'q' in the URL and 'fields' in the request body cannot be provided.");
            return;
        } else if (query) {
            const result = document.filter((obj) => 
                Object.values(obj).some((value) => 
                    String(value).toLowerCase().includes(query.toLowerCase())
                )
            );

            result.length === 0
            ? res.status(404).json("Your search returned no results")
            : res.status(200).json(result);
        } else if (fields) {
            const result = document.filter((obj) => 
                Object.keys(fields).every((key) => 
                    fields[key] === obj[key]));
            
            result.length === 0
            ? res.status(404).json("Your search returned no results")
            : res.status(200).json(result);
        }
    } catch (error) {
        res.send(500).json(error);
    }
};

module.exports = {searchByPost};