const User = require("../model/schema/userSchema");

const register = async (req, res) => {
  const { email, password } = req.body;
  
  if(!email){
    return res.status(400).send({error: "Email field must have a value"})
  }

  if(!password){
    return res.status(400).send({error: "Password field must have a value"})
  }

  try{
    if(await User.findOne({ email })){
      return res.status(400).send({error: "Email already registered"})
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.status(201).send({user: user})
  } catch(err) {
    return res.status(500).send({error: err.message})
  }
};

module.exports = {
  register,
};
