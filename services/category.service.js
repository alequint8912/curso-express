
//Sequelize
const SequelizeLib = require('../lib/sequelize')

//Models
const Category = require('../models/category.model')

class CategoryService {
    constructor(){

        this.orm = new SequelizeLib()
        this.orm.connect()        
    }

    getCategory({ tags }) {
        return Category.findAll()
    }

    getCategoryById({ categoryId }) {
        return Category.findAll({
            where: {
                id: parseInt(categoryId)
            }
        })
    }

    createCategory({ category }) {        
        
        const categoryInstance = Category.build(category)
        return categoryInstance.save()        

    }

    updateCategory({ categoryId, category }) {
       
        return Category.update({ ...category }, {
            where: { id: parseInt(categoryId) }
        })
    }

    deleteCategory({ categoryId }) {
        return Category.destroy({
            where: {
                id: parseInt(categoryId)
            }
        })
    }
}

module.exports = CategoryService