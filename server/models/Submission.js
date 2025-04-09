const {DataTypes} = require('sequelize');
const sequelize= require('../config/db');

const Submission= sequelize.define('Submission', {
    candidateName: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    candidateEmail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    testId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    answers: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports= Submission;