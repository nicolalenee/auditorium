const sequelize = require('../config/connection');
const { User, Profile, Post } = require('../models');

const userdata = [
    {
        account_type: 'Artist',
        display_name: 'The Goat',
        username: 'thegoat',
        email: 'thegoat@gmail.com',
        password: 'thegoat1234'
    },
    {
        account_type: 'Venue',
        display_name: 'The Shop',
        username: 'theshopindy',
        email: 'theshopindy@gmail.com',
        password: 'theshop1234'
    },
    {
        account_type: 'Artist',
        display_name: 'The One Man Band',
        username: 'iamtheman',
        email: 'onemanband@aol.com',
        password: 'onemanband1234'
    },
    {
        account_type: 'Artist',
        display_name: 'Broadzilla',
        username: 'broadzilla',
        email: 'thebroadzilla@yahoo.com',
        password: 'broadzilla5678'
    },
    {
        account_type: 'Venue',
        display_name: 'CreativeAffairs',
        username: 'creativeaffairs',
        email: 'thecreativeaffairs@msn.com',
        password: 'creativeaffairs5678'
    },
    {
        account_type: 'Venue',
        display_name: 'The Urban',
        username: 'urban',
        email: 'theurban@gmail.com',
        password: 'urban7890'
    },
    {
        account_type: 'Artist',
        display_name: 'SocialExperiment',
        username: 'socialexperiment',
        email: 'socialexperiment@gmail.com',
        password: 'socialexperiment1234'
    }
    {
        account_type: 'Artist',
        display_name: 'Team Magic',
        username: 'teammagic556',
        email: 'teammagic@yahoo.com',
        password: 'teammagic5641'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;