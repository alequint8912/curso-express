//Models
const Product = require('./product.model')
const User = require('./user.model')
const Category = require('./category.model')

//Models Enum
const { MODELS } = require('../utils/enum')

//Sequelize connection
const SequelizeLib = require("../lib/sequelize");
const orm = new SequelizeLib();
//orm.connect()


//Sync methods
const syncAll = async () => {
    try {
        await orm.sync({ alter: true })
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.log(error);
    }
}

const syncModel = async (model) => {
    orm.connect()
    switch (model) {
        case MODELS.PRODUCT:
            {
                await Product.sync({ alter: true })
                //console.log("The table for the Product model was just created!");
                break;
            }
        case MODELS.USER:
            {
                await User.sync({ alter: true })
                //console.log("The table for the User model was just created!");
                break;
            }
        case MODELS.CATEGORY:
            {
                await Category.sync({ alter: true })
                //console.log("The table for the User model was just created!");
                break;
            }
    
        default:
            break;
    }
}

module.exports = {
    syncAll,
    syncModel
}