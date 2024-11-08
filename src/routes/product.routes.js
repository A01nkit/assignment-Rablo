import {Router} from "express"
import {postAddProduct, getProducts, getProduct, deleteProduct} from "../controllers/product.controllers.js"

const router = Router()

router.post('/add-product', postAddProduct)//create product
router.get('/products', getProducts)//get all product
router.get('/product/:productId', getProduct)//get specific product by productId

router.delete('/delete-product/:productId', deleteProduct)//delete specific product


export default router;