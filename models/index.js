const User = require('./User');
const Profile = require('./Profile');
const Post =  require('./Post');
const Comment = require('./Comment');
const Professions = require('./Professions');
const Tag = require('./Tag');
const PostTag = require('./PostTag');

// Create Associations between Models
User.hasOne(Profile, {
    foreignKey: 'user_id'
})

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});


Tag.belongsTo(Post, {
    foreignKey: 'post_id'
})

Post.belongsToMany(Tag, {
    through: PostTag,
    as: 'tagged_post',
    foreignKey: 'post_id' 
});
Tag.belongsToMany(Post, {
    through: PostTag,
    as: 'tagged_post',
    foreignKey: 'tag_id'
});

PostTag.belongsTo(Tag,{
    foreignKey: 'tag_id'
});

PostTag.belongsTo(Post,{
    foreignKey: 'post_id'
});

Post.hasMany(PostTag, {
    foreignKey: 'post_id'
});

Tag.hasMany(PostTag, {
    foreignKey: 'tag_id'
});
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});



Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});


Profile.belongsTo(User, {
    foreignKey: 'user_id'
});

Profile.belongsToMany(User, {
    through: Professions,
    as: 'profession',
    foreignKey: 'profile_id'
});

User.belongsToMany(Profile, {
    through: Professions,
    as: 'profession',
    foreignKey: 'user_id'
});

Professions.belongsTo(User, {
    foreignKey: 'user_id'
});

Professions.belongsTo(Profile, {
    foreignKey: 'profile_id'
});

User.hasOne(Professions, {
    foreignKey: 'user_id'
});

Profile.hasOne(Professions, {
    foreignKey: 'profile_id'
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