const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'bar',
    },
    {
        tag_name: 'club',
    },
    {
        tag_name: 'outdoor venue',
    },
    {
        tag_name: 'guarantee pay',
    },
    {
        tag_name: 'percentage of door',
    },
    {
        tag_name: 'band',
    },
    {
        tag_name: 'singer',
    },
    {
        tag_name: 'photos',
    },
    {
        tag_name: 'vendor',
    },
    {
        tag_name: 'manager'
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;