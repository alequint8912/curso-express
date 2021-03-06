
//Sequelize
const SequelizeLib = require('../lib/sequelize')

//Models
const Product = require('../models/product.model')

class ProductService {

    constructor(){

        this.orm = new SequelizeLib()
        this.orm.connect()        
    }

    getProduct({ tags }) {
        return Product.findAll()
    }

    getProductById({ productId }) {
        return Product.findAll({
            where: {
                id: parseInt(productId)
            }
        })
    }

    createProduct({ product }) {        
        
        const productInstance = Product.build(product)
        return productInstance.save()        

    }

    updateProduct({ productId, product }) {
       
        return Product.update({ ...product }, {
            where: { id: parseInt(productId) }
        })
    }

    deleteProduct({ productId }) {
        return Product.destroy({
            where: {
                id: parseInt(productId)
            }
        })
    }

}

module.exports = ProductService