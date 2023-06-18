const knex = require("./database");
const { validateSortParameter, validateSortColumn } = require("./sanitizeQuery");

const getContacts = async (req, res) => {
    let query = knex.select("*").from("contacts");
    
    if ("sort" in req.query) {
        const orderBy = req.query.sort.toString();

        if(!validateSortParameter(orderBy)) {
            return res.status(400).json({"message": "Please, use only letters and underscores!"});
        };

        if (orderBy.length > 0) {
            if(!validateSortColumn(orderBy)) {
                return res.status(400).json({"message": "Please, use only valid name of column!"})
            };
            //using placeholders instead of variable interpolation
            query = query.orderByRaw("??", [orderBy]); 
        };
    };
    
    console.log("SQL", query.toSQL().sql);
    
    try {
        const data = await query;
        res.json({ data });
    } catch (e) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { 
    getContacts 
};