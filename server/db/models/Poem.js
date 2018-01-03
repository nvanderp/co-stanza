const db = require('../index')
const DataTypes = db.Sequelize

const Poem = db.define('poem', {
    content: {
        type: DataTypes.ARRAY(DataTypes.STRING()),
        allowNull: false
    }
})

module.exports = Poem