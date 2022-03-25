const { User, Profile, Post } = require('../models');

const profiledata = [
    {
        display_name: 'The Goat',
        website_url: 'https://thegoat.com',
        bio: 'I love cheese, especially boursin squirty cheese. Red leicester mozzarella ricotta when the cheese comes out everybodys happy cheesecake blue castello cheddar everyone loves. Queso everyone loves chalk and cheese pecorino chalk and cheese mascarpone monterey jack blue castello. Brie squirty cheese taleggio.',
        media: 'https://youtu.be/QKae1k1BDdA',
        location: 'San Fransico',
        phone_number: '650-122-3334',
        user_id: 1,
        profession_id: 11
    },
    {   display_name:'The Shop',
        website_url: 'https://theshop.com',
        bio: 'Im baby drinking vinegar four loko ethical, cronut seitan chillwave raclette lo-fi. La croix farm-to-table affogato PBR&B selfies dreamcatcher drinking vinegar. Crucifix vegan pinterest trust fund, wayfarers readymade try-hard typewriter cliche banjo cold-pressed blue bottle unicorn. Lo-fi vice pickled etsy, tilde four loko semiotics tbh. Fixie neutra ethical, squid pop-up typewriter kale chips.',
        media: 'https://theshop.com',
        location: 'Atlanta',
        phone_number: '404-555-0105',
        user_id: 2,
        profession_id: 1
    },
    {
        display_name: 'The One Man Band',
        website_url: 'https://findtheoneman.com',
        bio: 'Ill tell you how I feel about school, Jerry. Its a waste of time. Bunch of people runnin around bumpin into each other, got a guy up front says, 2 + 2, and the people in the back say, 4. Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin.',
        media: 'https://youtu.be/d-guQ3Pki-0',
        location: 'New York',
        phone_number: '212-222-1235',
        user_id: 3,
        profession_id: 10
    },
    {
        display_name: 'Broadzilla',
        website_url: 'https://broadzillagoescrazy.com',
        bio: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​ morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
        media: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.angelfire.com%2Frock3%2Fbroadzillafanz%2Fmich.html&psig=AOvVaw29oRNjcvDIBE2WpSVFKsUz&ust=1647031395575000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNii85-0vPYCFQAAAAAdAAAAABAE',
        location: 'Austin',
        phone_number: '512-898-7878',
        user_id: 4,
        profession_id: 3
    },
    {
        display_name: 'Creative Affairs',
        website_url: 'https://google.com',
        bio: "Pecorino feta cheddar. Cow cheddar manchego gouda st. agur blue cheese boursin stilton jarlsberg. Cheesy grin cheesecake cheesecake caerphilly cheddar gouda danish fontina port-salut. Cheddar bocconcini boursin smelly cheese when the cheese comes out everybody's happy who moved my cheese.",
        media: 'https://creativeaffairslv.com',
        location: 'Las Vegas',
        phone_number: '702-555-0128',
        user_id: 5,
        profession_id: 8
    },
    {
        display_name: 'The Urban',
        website_url: 'https://engrish.com',
        bio: "Concept of the number one Hypatia extraordinary claims require extraordinary evidence Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit circumnavigated great turbulent clouds. Preserve and cherish that pale blue dot a mote of dust suspended in a sunbeam the only home we've ever known consectetur made in the interiors of collapsing stars encyclopaedia galactica?",
        media: 'https://theurbanseattle.com',
        location: 'Seattle',
        phone_number: '202-555-7896',
        user_id: 6,
        profession_id: 6
    },
    {
        display_name: 'Social Experiment',
        website_url: 'https://thesocialexp.com',
        bio: "Hard stop. This is meaningless dunder mifflin for on your plate, or i have a hard stop in an hour and half red flag single wringable neck so not the long pole in my tent. Organic growth. Incentivization. Not the long pole in my tent slipstream make it a priority. Clear blue water. Per my previous email cadence or high touch client yet i know you're busy.",
        media: 'https://youtu.be/jgQEZ3B-oTI',
        location: 'St. Louis',
        phone_number: '859-555-1245',
        user_id: 7,
        profession_id: 4
    },
    {
        display_name: 'Team Magic',
        website_url: 'https://funnyordie.com/',
        bio: "Brownie muffin fruitcake cookie dragée shortbread carrot cake. Cheesecake croissant marshmallow dessert donut macaroon. Donut candy lollipop sweet biscuit jelly-o cake lemon drops pastry.",
        media: 'https://teammagicforlife.com',
        location: 'Las Vegas',
        phone_number: '505-222-1234',
        user_id: 8,
        profession_id: 3
    },
    {
        display_name: 'Photos by Ken',
        website_url: 'https://theoatmeal.com/',
        bio: 'Jarlsberg edam cheesy feet. Croque monsieur everyone loves blue castello squirty cheese taleggio cottage cheese danish fontina cheese and biscuits. Queso the big cheese taleggio halloumi rubber cheese everyone loves cheese strings camembert de normandie.',
        media: 'http://photosbyken.com',
        location: 'San Diego',
        phone_number: '555-456-8521',
        user_id: 9,
        profession_id: 1
    },
    {
        display_name: 'Killers Bar',
        website_url: 'https://codepen.io/akm2/full/AGgarW',
        bio: 'Hard cheese feta camembert de normandie. Danish fontina cheesy feet stinking bishop ricotta cheesy grin danish fontina caerphilly fondue. Cheese and biscuits say cheese cheddar melted cheese cheeseburger pecorino squirty cheese melted cheese. Melted cheese paneer cheese and wine cheese slices say cheese.',
        media: 'http://killerbar.com',
        location: 'Jacksonville',
        phone_number: '555-852-6321',
        user_id: 10,
        profession_id: 17
    }
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;