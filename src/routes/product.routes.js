import {Router} from "express"
import {postAddProduct, getProduct} from "../controllers/product.controllers.js"

const router = Router()

router.post('/add-product', postAddProduct)//create product
router.get('/products', getProduct)//get all product
/*
router.get('/product/:productId'', productController.getProducts)//get specific product
router.delete('/delete-product/:productId', productController.deleteProduct)//delete specific product

*/
export default router;