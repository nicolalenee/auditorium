const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'bar',
        id: 1
    },
    {
        tag_name: 'club',
        id: 2
    },
    {
        tag_name: 'outdoor venue',
        id: 3
    },
    {
        tag_name: 'guarantee pay',
        id: 4
    },
    {
        tag_name: 'percentage of door',
        id: 5
    },
    {
        tag_name: 'band',
        id: 6
    },
    {
        tag_name: 'singer',
        id: 7
    },
    {
        tag_name: 'photos',
        id: 8
    },
    {
        tag_name: 'vendor',
        id: 9
    },
    {
        tag_name: 'manager',
        id: 10
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;