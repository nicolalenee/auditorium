const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Donizzle hizzle auctor maurizzle.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Mammasay mammasa mamma oo sa pharetra, gangsta egestas facilisis malesuada, get down get down phat consequat get down get down, mollis we gonna chung break yo neck, yall my shizz izzle sure.',
        user_id: 4,
        post_id: 8
    },
    {
        comment_text: 'Ut boom shackalack ultricizzle leo. Quisque vulputate, orci a suscipizzle vulputate, enizzle cool commodo dang, thats the shizzle eleifend dizzle funky fresh nizzle metus.',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'Daahng dawg izzle dui fizzle ligula dapibizzle uhuh ... yih!',
        user_id: 8,
        post_id: 3
    },
    {
        comment_text: 'Rizzle nizzle dolizzle non enim mattizzle pharetra.',
        user_id: 7,
        post_id: 6
    },
    {
        comment_text:'Thats the shizzle go to hizzle. Vestibulizzle ma nizzle tellivizzle fo shizzle nibh yo commodo. Gizzle ipsizzle dolizzle the bizzle crackalackin, boofron adipiscing boofron.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Vestibulizzle in shit sed maurizzle its fo rizzle tristique. Nunc nizzle stuff sizzle check it out erizzle izzle porta.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Etizzle laorizzle urna izzle nisl. Shit quizzle arcu',
        user_id: 4,
        post_id: 8
    },
    {
        comment_text: 'Praesent dawg mi break yo neck, yall mah nizzle posuere bibendizzle. Go to hizzle lacinia for sure lectus.',
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: 'In gravida fo shizzle my nizzle nizzle dope',
        user_id: 5,
        post_id: 10
    },
    {
        comment_text: 'Nunc ass arcu. Donizzle phat. Maecenizzle placerat mauris at lectizzle. Doggy izzle tortor.',
        user_id: 9, 
        post_id: 9
    },
    {
        comment_text: 'Crunk elizzle arcu, elementizzle bling bling, eleifend away, mollis in, est. Aliquizzle erat . Yo nizzle bizzle turpis.',
        user_id: 10,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;