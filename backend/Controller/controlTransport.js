const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDB', {useNewUrlParser: true,useUnifiedTopology:true});
const { MongoClient, ObjectId } = require('mongodb');
const express = require('express')
const transport = require('../model/modelTransport')


const addTransport = async (req,res) => {
  console.log("Creation: ");
  
  const {name,type,seats,price,image} = req.body;

    const newTransport = new transport({
        name,type,seats,price,image
      });
      
    console.log(req.body);

    
    const result = await newTransport.save().catch((err) => 
    {
    console.error(err);
    });

    console.log("Transport Created!");


}

const getTransport = (req, res) => {

  transport.find()
  .then((transport) => {
    res.status(200).json({
      transport: transport,
    });
  }).catch((err) => 
  {
  console.error(err);
  });
}

const deleteTransport = async (req, res) => {

  const { id } = req.params;
  console.log("Transport deleted: " + id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid' });
  }
  const transports = await transport.findOneAndDelete({ _id: id });
  if (transports) {
    res.status(200).json(transports);
  } else {
    res.status(404).json({ error: 'Not Found!' });
  }
};

const findTransport = async (req,res) => {
  const {id} = req.params;
  console.log("Found ID: " + id);
  transport.findOne({_id: id})
  .then((transport) => {
    res.status(200).json({
      transport: transport,
    });
  }).catch((err) => 
  {
  console.error(err);
  });
}


const updateTransport = async (req,res) => {
  const{id} = req.params;
  console.log("Updating Transport: " + id);
  const newtransport = {
    name:req.body.namee,
    type:req.body.type,
    seats:req.body.seats,
    price:req.body.price,
    image:req.body.image,
  }

  console.log(req.body);

  transport.findByIdAndUpdate(id,newtransport,function(err,updatedprofile)
    {
      res.json("Profile Updated")
    }
  ).clone().catch((err) => 
  {
  console.error(err);
  });
 

}

  exports.getTransport = getTransport;
  exports.addTransport = addTransport;
  exports.deleteTransport = deleteTransport;
  exports.updateTransport = updateTransport;
  exports.findTransport = findTransport;