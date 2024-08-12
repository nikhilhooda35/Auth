const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: false, unique: false },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

userSchema.methods.generateAuthToken = async function(req, res){
  try{

    const token = jwt.sign({_id:this._id},"mynameisavdheshpalimfromallahabaduttarpradesh");
    this.tokens = this.tokens.concat({token:token})
    return token;

  }catch(e){

    res.status(500).send({message: e.message, status: "Inside model JWT"})

  }
}

module.exports = mongoose.model('User', userSchema);