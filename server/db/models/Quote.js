const db = require('../index')
const DataTypes = db.Sequelize;

const Quote = db.define('quote', {
    content: {
        type: DataTypes.TEXT(),
        allowNull: false
    }
})

module.exports = Quote