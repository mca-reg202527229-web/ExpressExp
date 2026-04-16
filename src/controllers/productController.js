const Product=require('../models/product');

const getAllProducts=async(req,res,next)=>{
    try {
        const {category,minPrice,maxPrice}=req.query;
        const filter={};

        if(category){
            filter.category=category;
        }
        if(minPrice) filter.price={$gte:Number(minPrice)};
        if(maxPrice) filter.price={...filter.price,$lte:Number(maxPrice)};
        const products=await Product.find(filter).sort({createdAt:-1});
        res.status(200).json({
            success:true,
            count:products.length,
            data:products
        });
    }catch (error) {
        next(error);  //Pass error to centraliesd error handler
    }
};

const getProductById=async(req,res,next)=>{
    try {
        const product=await Product.findById(req.params.id);
        if(!product){
            const error=new Error('Product not found');
            error.statusCode=404;
            return next(error);
        }
        res.status(200).json({
            success:true,
            data:product
        });
    }catch (error) {
        next(error);
    }
};
module.exports={getAllProducts,getProductById};


