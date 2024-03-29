const {Router} = require ('express');
const {getUsers,deleteUsers,patchUsers,postUsers,putUsers} = require('../controllers/usuario.controller.js'); 

const router = Router();

router.get("/", getUsers); 
router.post("/",postUsers);
router.delete("/",deleteUsers);
router.put("/",putUsers);
router.patch("/",patchUsers);


module.exports = router;