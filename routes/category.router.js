//Express
const express = require('express')
const router = express.Router()

const CategoryService = require('../services/category.service')

const categoryService = new CategoryService()

router.get('/', async (req, res, next) => {
    
    const { tags } = req.query

    try {
        const categories = await categoryService.getCategory({ tags })
    
        res.status(200).json({
            data: categories,
            message: 'Categorys listed'
        })
        
    } catch (error) {
        next(error)
    }
    
})

router.get('/:categoryId', async (req, res, next) => {

    const { categoryId } = req.params 
    
    try {
        const category = await categoryService.getCategoryById({ categoryId })
    
        res.status(200).json({
            data: category,
            message: 'Category retrieved'
        })
        
    } catch (error) {
        next(error)
    }
    
})


router.post('/', async (req, res, next) => {

    const { body: category } = req

    try {
        const categoryId = await categoryService.createCategory({ category })
        console.log('Category was saved to the database!');
        console.log('PRODUCTO CREADO ------ '+categoryId);
    
        res.status(201).json({
            data: categoryId,
            message: 'Category added'
        })
        
    } catch (error) {
        next(error)
    }

})

router.put('/:categoryId', async (req, res, next) => {

    const { categoryId } = req.params
    const { body: category } = req
    console.log(req.params);
    console.log(req.body);

    try {
        const categoryUpdated = await categoryService.updateCategory({ categoryId, category })
        
        res.status(200).json({
            data: categoryUpdated,
            message: 'Category updated'
        })
        
    } catch (error) {
        next(error)
    }

})

router.delete('/:categoryId', async (req, res, next) => {

    const { categoryId } = req.params

    try {
        const deletedCategoryId = await categoryService.deleteCategory({ categoryId }) 
        
        res.status(200).json({
            data: deletedCategoryId,
            message: 'Category deleted'
        })
        
    } catch (error) {
        next(error)
    }

})

module.exports = router