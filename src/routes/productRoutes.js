const express=require('express');
const router=express.Router();

const {getAllProducts,getProductById}=require('../controllers/productController.js');

router.route('/').get(getAllProducts);
router.route('/:id').get(getProductById);

module.exports=router;
