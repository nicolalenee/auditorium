const seedUsers = require('./user-seeds');
const seedProfiles = require('./profile-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedProfessions = require('./profession-seeds');
const seedPostTags = require('./posttag-seeds');
const seedTags = require('./tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedProfiles();
    console.log('--------------');

    await seedPosts();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    await seedProfessions();
    console.log('--------------');

    await seedPostTags();
    console.log('--------------');

    await seedTags();
    console.log('--------------');

    process.exit(0);
};

seedAll();