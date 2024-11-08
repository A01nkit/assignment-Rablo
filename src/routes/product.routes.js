import {Router} from "express"
import {postAddProduct, getProducts, getProduct} from "../controllers/product.controllers.js"

const router = Router()

router.post('/add-product', postAddProduct)//create product
router.get('/products', getProducts)//get all product
router.get('/product/:productId', getProduct)//get specific product by productId
/*
router.delete('/delete-product/:productId', productController.deleteProduct)//delete specific product

*/
export default router;