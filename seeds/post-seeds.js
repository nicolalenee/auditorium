const { Post } = require('../models');

const postdata = [
    {
        title: 'Check out my spot',
        content: "Police label anyone attacking Chuck Norris as a Code 45-11... a suicide When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture of himself, crouched and ready to attack. Chuck Norris has not had to pay taxes, ever, Chuck Norris is not a man, he is a machine, Chuck Norris doesn't go hunting... CHUCK NORRIS GOES KILLING, Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face, If you ask Chuck Norris what time it is, he always says, Two seconds 'til. After you ask, Two seconds 'til what? he roundhouse kicks you in the face What was going through the minds of all of Chuck Norris' victims before they died? His shoe Chuck Norris made the llama extinct. Never spit in his face. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris, Chuck Norris is ten feet tall, weighs two-tons, breathes fire, and could eat a hammer and take a shotgun blast standing.",
        user_id: 4
    },
    {
        title: 'You really need to watch this.',
        content: "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
        user_id: 1
    },
    {
        title: 'No way!',
        content: "Sesame oil ground black pepper tsukemen soy sauce butter bamboo slices Sapporo Tokushima abura soba corn Tokyo sesame oil pork bones tsukemen tsukemen ramen burger flavoured oil corn. Wood ear mushroom Nagoya soy milk curry Wakayama scallions kamaboko scallions corn yuzu chilli lard ramen burger Nissin instant cup ramen. Vinegar spinach mustard greens chilli fish broth pork cubes spinach Nissin instant cup ramen Tokyo chicken stock chilli Hakata lard minced garlic Kagoshima kamaboko flavoured oil bamboo slices.",
        user_id: 8
    },
    {
        title: 'The hottest place in town',
        content: "Lorizzle ipsizzle dolor izzle amizzle, consectetuer adipiscing elit. Nullam sapizzle velizzle, sheezy volutpat, suscipizzle ma nizzle, gravida vel, break it down. Pellentesque fo shizzle hizzle. Crunk erizzle. Fusce my shizz dolizzle dapibizzle turpizzle tempizzle tempor. Maurizzle pellentesque nibh fo shizzle turpizzle. Vestibulum in tortizzle. Pellentesque eleifend pizzle nisi. In hac break it down platea dictumst. Black dapibus. Shiznit tellus yippiyo, shizznit pot, mattizzle ac, yo mamma gizzle, sheezy. Cool suscipizzle. Integer semper shiz sed fo shizzle.",
        user_id: 3
    },
    {
        title: 'Spicy',
        content: "Spicy jalapeno bacon ipsum dolor amet filet mignon brisket chuck corned beef, frankfurter prosciutto hamburger turkey picanha ham. Strip steak spare ribs tail sirloin ham, jerky prosciutto ground round bacon rump corned beef chislic. Chislic pork belly beef strip steak. Kevin jerky salami ribeye boudin pork belly prosciutto swine shoulder pork loin jowl corned beef. Chuck t-bone tail pig brisket, ribeye alcatra.",
        user_id: 2
    },
    {
        title: 'This just happened!',
        content: "Hey there where ya goin, not exactly knowin, who says you have to call just one place home. Hes goin everywhere, B.J. McKay and his best friend Bear. He just keeps on movin, ladies keep improvin, every day is better than the last. New dreams and better scenes, and best of all I dont pay property tax. Rollin down to Dallas, whos providin my palace, off to New Orleans or who knows where. Places new and ladies, too, Im B.J. McKay and this is my best friend Bear.",
        user_id: 7
    },
    {
        title: 'You have to sample their beer.',
        content: "Liquor ipsum dolor sit amet drumguish dark and stormy port charlotte staten island ferry! Chupacabra balvenie canadian club manhattan salty dog, caribou lou, midori toro rojo old grand dad.",
        user_id: 5
    },
    {
        title: 'Amazing',
        content: "Chuck Norrs bar stools only have one leg. Chuck Norris originally appeared in the Street Fighter II video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked bout this glitch, Norris replied, That's no glitch.. Chuck Norris' hand is the only hand that can beat a Royal Flush Chuck Norris can slam a revolving door.",
        user_id: 6
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;