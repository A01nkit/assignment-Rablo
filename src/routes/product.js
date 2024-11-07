import express from "express"
import productController from "../controllers/product.js"
const router = express.Router();

router.get('/product/:productId', productController.getProduct)//get specific product
router.get('/products', productController.getProducts)//get all product
router.post('/add-product', productController.postAddProduct)//create product
router.delete('/delete-product/:productId', productController.deleteProduct)//de;ete specific product


export default router;