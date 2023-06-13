const express = require("express");
const {qGetDoc, idGetDoc} = require("./controllers/getController");
const {searchByPost} = require("./controllers/postController");

const router = express.Router();

// GET /search
router.get("/search", qGetDoc);

// GET /documents/:id
router.get("/documents/:id", idGetDoc);

// POST /search
router.post("/search", searchByPost);

module.exports = router;