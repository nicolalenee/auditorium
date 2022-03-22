const User = require('./User');
const Profile = require('./Profile');
const Post =  require('./Post');
const Comment = require('./Comment');
const Professions = require('./Professions');
const Tag = require('./Tag');
const PostTag = require('./PostTag');

// Create Associations between Models
User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

User.hasMany(Professions, {
    foreignKey: 'user_id'
});

// User.hasOne(Profile, {
//     foreignKey: 'profile_id'
// })

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});

Profile.hasMany(Post, {
    foreignKey: 'user_id'
});

Profile.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.belongsToMany(Tag, {
    through: PostTag,
    foreignKey: 'post_tag'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Professions.belongsTo(User, {
    foreignKey: 'user_id'
});

Tag.belongsToMany(Post, {
    through: PostTag,
    foreignKey: 'tag_id'
});

module.exports = { 
    User, 
    Profile, 
    Post, 
    Comment, 
    Professions,
    Tag,
    PostTag    
};