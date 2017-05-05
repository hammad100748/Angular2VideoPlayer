/**
 * Created by Hammad on 04/05/2017.
 */
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/video');

const db= 'mongodb://root:abcd@ds131151.mlab.com:31151/videoplayer';
mongoose.promise=global.promise;

mongoose.connect(db,function (err) {
  if(err){
    console.log(err);
  }
});

// Get All Videos
router.get('/videos',function (req,res) {
  Video.find({})
    .exec(function (err,videos) {
      if(err){
        console.log(err);
      }else{
        res.json(videos);
      }
    });
});

// Get Single Video by Id
router.get('/video/:id',function (req,res) {
  Video.findById(req.params.id)
    .exec(function (err,video) {
      if(err){
        console.log(err);
      }else{
        res.json(video);
      }
    });
});

// Insert New Video
router.post('/video',function (req,res) {
  var newVideo= new Video();
  newVideo.title=req.body.title;
  newVideo.url=req.body.url;
  newVideo.description=req.body.description;

  newVideo.save(function (err,insertVideo) {
    if(err){

    }else{
      res.json(insertVideo);
    }
  });

});

// Update A Video By Id
router.put('/video/:id',function (req,res) {
  Video.findById(req.params.id,function (err,updatedVideo) {
    if (err) {
      res.status(500).send(err);
    } else {
      updatedVideo.title=req.body.title;
      updatedVideo.url=req.body.url;
      updatedVideo.description=req.body.description;
    }

    updatedVideo.save(function (err,updatedVideo) {
      if (err) {
        res.status(500).send(err);
      }else{
        res.json(updatedVideo);
      }
    });

  })
});

router.delete('/video/:id',function (req,res) {
  Video.findByIdAndRemove(req.params.id,function (err,deletedVideo) {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(deletedVideo);
    }
  });
});

module.exports=router;
