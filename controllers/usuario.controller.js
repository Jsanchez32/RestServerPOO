const getUsers = (req,res)=>{
    res.json({
        "message":"home page"
    });
}
const postUsers = (req,res)=>{
    res.json({
        "message":"post page"
    });
}
const deleteUsers = (req,res)=>{
    res.json({
        "message":"delete page"
    });
}
const putUsers = (req,res)=>{
    res.json({
        "message":"put page"
    });
}
const patchUsers = (req,res)=>{
    res.json({
        "message":"patch page"
    });
}

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}