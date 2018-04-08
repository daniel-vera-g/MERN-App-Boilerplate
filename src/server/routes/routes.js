
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const debug = require("debug")("APP:routes");

// Schema
const model = require("../../models/model");

// Basic route Handler
router.get("/", (req, res) => {
  debug("Rendering index.js");
  res.status(200).render("index");
});

/* CRUD Operations */

// Create
router.post('path', (req, res) => {

});

// Read
router.get('path', (req, res) => {

});

// Update
router.put('path', (req, res) => {

});

// Delete
router.delete('path', (req, res) => {

});

module.exports = router;
