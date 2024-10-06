const express=require('express');
const {createItem,getItems,updateItem}=require('../controllers/itemController');


const router=express.Router();


router.get('/items',getItems);
router.post('/items',createItem);
router.put('/items/:id',updateItem);


module.exports=router;