/**
 * Created by Hammad on 04/05/2017.
 */
const express=require('express');
const router=express.Router();

router.get('/',function (req,res) {
  res.send('Api Works');
});

module.exports=router;
