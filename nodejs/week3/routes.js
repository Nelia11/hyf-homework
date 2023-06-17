const express = require("express");
const contactsAPIRouter = express.Router();

const knex = require("./database");

contactsAPIRouter.get("/", async (req, res) => {
    let query = knex.select("*").from("contacts");
    
    if ("sort" in req.query) {
        const orderBy = req.query.sort.toString();
        if (orderBy.length > 0) {
        query = query.orderByRaw(orderBy);
        }
    }
    
    console.log("SQL", query.toSQL().sql);
    
    try {
        const data = await query;
        res.json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = {
    contactsAPIRouter
};