const db = require('../index')
const DataTypes = db.Sequelize

const Poem = db.define('poem', {
    content: {
        type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING())),
        allowNull: false
    }
})

module.exports = Poem

// add a getter for first line of poem to create its title?