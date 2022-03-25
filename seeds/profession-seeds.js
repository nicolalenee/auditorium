const { Professions } = require('../models');

const professionsdata = [
    {
        name: 'Photographer',
        id: 1
    },
    {
        name: 'Videographer',
        id: 2
    },
    {
        name: 'Artist Manager',
        id: 3
    },
    {
        name: 'Booking Agent',
        id: 4
    },
    {
        name: 'Manager',
        id: 5
    },
    {
        name: 'Journalist',
        id: 6
    },
    {
        name: 'Graphic Designer',
        id: 7
    },
    {
        name: 'Sound Engineer',
        id: 8
    },
    {
        name: 'Web Developer',
        id: 9
    },
    {
        name: 'Singer',
        id: 10
    },
    {
        name: 'Musician',
        id: 11
    },
    {
        name: 'Song Writer',
        id: 12
    },
    {
        name: 'Choreographer',
        id: 13
    },
    {
        name: 'Drummer',
        id: 14
    },
    {
        name: 'Guitarist',
        id: 15
    },
    {
        name: 'Bass Player',
        id: 16
    },
    {
        name: 'Publicist',
        id: 17
    }
];

const seedProfessions = () => Professions.bulkCreate(professionsdata);

module.exports = seedProfessions;