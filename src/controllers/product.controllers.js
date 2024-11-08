import { asyncHandler } from "../util/asyncHandler.js";
import { ApiError } from "../util/ApiError.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../util/ApiResponse.js";

const postAddProduct = asyncHandler( async (req, res) => {
    //Getting product from frontend as json
    const {productid, name, price, featured, rating, company} = req.body
    console.log(req.body);
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
    console.log(existedProduct);
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


export {postAddProduct}
