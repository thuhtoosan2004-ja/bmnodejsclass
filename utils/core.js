const Msg = (res,mes = "", result= {})=>{
    res.status(200).json({con : true,mesg : mes,result},)
}

module.exports = {
    Msg
}