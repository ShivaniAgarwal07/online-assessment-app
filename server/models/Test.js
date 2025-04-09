const {DataTypes} = require('sequelize');
const sequelize= require('../config/db');

const Test= sequelize.define('Test', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    questions: {
        type: DataTypes.JSONB, //JSONB - to allow nested data like an array of question objects
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Test;

/*
structure of the questions field:- 

[
    {
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correctIndex": 1
    },
    ...
]

*/