const bcryptjs =require("bcryptjs");
const Msg = (res,mes = "", result= {})=>{
    res.status(200).json({con : true,mesg : mes,result},)
}

const Encoder= {
    encode : (password)=>
        bcryptjs.hashSync(password,10),

    compare : (plain,hash)=> bcryptjs.compareSync(plain,hash)
}

module.exports = {
    Msg,
    Encoder
}