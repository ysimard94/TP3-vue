module.exports = (connex, Sequelize) => {
    const Product = connex.define('product', {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.REAL
        },
        category: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.STRING
        }
    })
    return Product
}