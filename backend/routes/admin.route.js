const express = require("express");
const router = express.Router();
const path = require("path");
router.get('/admin',(req,res)=>{
    try {
        res.sendFile(path.join(__dirname,"../../frontend/admin.html"))
    } catch (error) {
        res.json({msg:error.message})
    }
})
module.exports=router