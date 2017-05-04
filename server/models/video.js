/**
 * Created by Hammad on 04/05/2017.
 */
var mongoose=require('mongoose');

const schema =mongoose.Schema;

const videoSchema=new Schema({
    title:String,
    url:String,
    description:String
});

module.exports=mongoose.model('video',videoSchema,'videos');
