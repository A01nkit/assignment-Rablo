import { asyncHandler } from "../util/asyncHandler.js";
import { ApiError } from "../util/ApiError.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../util/ApiResponse.js";

const postAddProduct = asyncHandler( async (req, res) => {
    //Getting product from frontend as json
    const {productid, name, price, featured, rating, company} = req.body
    
    //validation check - required data is available or not
    if ( 
        [productid, name, price, company].some((field) =>
        String(field)?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    //Validation check - data already existed or not
    const existedProduct = await Product.findOne({
        $or: [{ productid }]
    })
    
    if (existedProduct) {
        throw new ApiError(409, "Product already existed")
    }
 
    //create user object - create entry call in db
    const product = await Product.create({
        productid,
        name,
        price,
        featured,
        rating,
        company
    })

    //check for product creation
    const createdProduct = await Product.findById(product._id)
    if (!createdProduct) {
        throw new ApiError(500, "Something went wrong while creating the product")
    }

    //return res if created 
    return res.status(201).json(
        new ApiResponse(200, createdProduct, "Product created successfully")
    )


})

const getProducts = asyncHandler( async (req, res) => {
    const products = await Product.find({})

    console.log(products);
    return res.status(200).json(
        new ApiResponse(200, products, "Here, are all the products from db")
    )
})

const getProduct = asyncHandler( async (req, res) => {
    const productid = req.params['productId']
    const existedProduct = await Product.findOne({
        $or: [{ productid }]
    })
    // If product do not exist
    if (!existedProduct) {
        throw new ApiError(409, "Product do not exist")
    }
    return res.status(201).json(
        new ApiResponse(200, existedProduct, "Product created successfully")
    )
    

})

export {postAddProduct, getProducts, getProduct}
