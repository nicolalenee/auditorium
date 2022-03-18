const sequelize = require('../config/connection');
const { User, Profile, Post } = require('../models');

const userdata = [
    {
        account_type: 'Artist',
        display_name: 'The Goat',
        username: 'thegoat',
        email: 'thegoat@gmail.com',
        password: 'thego@t1234'
    },
    {
        account_type: 'Venue',
        display_name: 'The Shop',
        username: 'theshopindy',
        email: 'theshopindy@gmail.com',
        password: 'theshop!234'
    },
    {
        account_type: 'Artist',
        display_name: 'The One Man Band',
        username: 'iamtheman',
        email: 'onemanband@aol.com',
        password: 'onem@nband1234'
    },
    {
        account_type: 'Artist',
        display_name: 'Broadzilla',
        username: 'broadzilla',
        email: 'thebroadzilla@yahoo.com',
        password: 'broadzill@5678'
    },
    {
        account_type: 'Venue',
        display_name: 'CreativeAffairs',
        username: 'creativeaffairs',
        email: 'thecreativeaffairs@msn.com',
        password: 'creative@ffairs5678'
    },
    {
        account_type: 'Venue',
        display_name: 'The Urban',
        username: 'urban',
        email: 'theurban@gmail.com',
        password: 'urb@n7890'
    },
    {
        account_type: 'Artist',
        display_name: 'SocialExperiment',
        username: 'socialexperiment',
        email: 'socialexperiment@gmail.com',
        password: 'soc!alexperiment1234'
    },
    {
        account_type: 'Artist',
        display_name: 'Team Magic',
        username: 'teammagic556',
        email: 'teammagic@yahoo.com',
        password: 'teammag!c5641'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;