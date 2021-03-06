
const express = require('express')
const router = express.Router()

const ProductService = require('../../services/products.service')

const productService = new ProductService()

router.get('/', async (req, res, next) => {
    
    const { tags } = req.query

    try {
        const products = await productService.getProduct({ tags })
    
        res.status(200).json({
            data: products,
            message: 'Products listed'
        })
        
    } catch (error) {
        next(error)
    }
    
})

router.get('/:productId', async (req, res, next) => {

    const { productId } = req.params 
    
    try {
        const product = await productService.getProductById({ productId })
    
        res.status(200).json({
            data: product,
            message: 'Product retrieved'
        })
        
    } catch (error) {
        next(error)
    }
    
})


router.post('/', async (req, res, next) => {

    const { body: product } = req

    try {
        const productId = await productService.createProduct({ product })
        console.log('Product was saved to the database!');
        console.log('PRODUCTO CREADO ------ '+productId);
    
        res.status(201).json({
            data: productId,
            message: 'Product added'
        })
        
    } catch (error) {
        next(error)
    }

})

router.put('/:productId', async (req, res, next) => {

    const { productId } = req.params
    const { body: product } = req
    console.log(req.params);
    console.log(req.body);

    try {
        const productUpdated = await productService.updateProduct({ productId, product })
        
        res.status(200).json({
            data: productUpdated,
            message: 'Product updated'
        })
        
    } catch (error) {
        next(error)
    }

})

router.delete('/:productId', async (req, res, next) => {

    const { productId } = req.params

    try {
        const deletedProductId = await productService.deleteProduct({ productId }) 
        
        res.status(200).json({
            data: deletedProductId,
            message: 'Product deleted'
        })
        
    } catch (error) {
        next(error)
    }

})

module.exports = router