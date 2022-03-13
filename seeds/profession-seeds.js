const { Professions } = require('../models');

const professionsdata = [
    {
        name: 'Photographer'
    },
    {
        name: 'Videographer'
    },
    {
        name: 'Artist Manager'
    },
    {
        name: 'Booking Agent'
    },
    {
        name: 'Manager'
    },
    {
        name: 'Journalist'
    },
    {
        name: 'Graphic Designer'
    },
    {
        name: 'Sound Engineer'
    },
    {
        name: 'Web Developer'
    },
    {
        name: 'Singer'
    },
    {
        name: 'Musician'
    },
    {
        name: 'Song Writer'
    },
    {
        name: 'Choreographer'
    },
    {
        name: 'Drummer'
    },
    {
        name: 'Guitarist'
    },
    {
        name: 'Bass Player'
    },
    {
        name: 'Publicist'
    }
];

const seedProfessions = () => Professions.bulkCreate(professionsdata);

module.exports = seedProfessions;