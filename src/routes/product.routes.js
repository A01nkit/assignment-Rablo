import {Router} from "express"
import {postAddProduct} from "../controllers/product.controllers.js"

const router = Router()

router.post('/add-product', postAddProduct)//create product
/*
router.get('/product/:productId', productController.getProduct)//get specific product
router.get('/products', productController.getProducts)//get all product
router.delete('/delete-product/:productId', productController.deleteProduct)//delete specific product

*/
export default router;