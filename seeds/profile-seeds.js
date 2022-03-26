const { User, Profile, Post } = require('../models');

const profiledata = [
    {
        display_name: 'The Goat',
        website_url: 'https://thegoat.com',
        bio: 'I love cheese, especially boursin squirty cheese. Red leicester mozzarella ricotta when the cheese comes out everybodys happy cheesecake blue castello cheddar everyone loves. Queso everyone loves chalk and cheese pecorino chalk and cheese mascarpone monterey jack blue castello. Brie squirty cheese taleggio.',
        media: 'https://media.kidadl.com/5fd76c6508d85f25781475d1-goats-are-naturally-funny.jpeg.webp?width=700',
        location: 'San Fransico',
        phone_number: '650-122-3334',
        user_id: 1,
        profession_id: 11
    },
    {   display_name:'The Shop',
        website_url: 'https://theshop.com',
        bio: 'Im baby drinking vinegar four loko ethical, cronut seitan chillwave raclette lo-fi. La croix farm-to-table affogato PBR&B selfies dreamcatcher drinking vinegar. Crucifix vegan pinterest trust fund, wayfarers readymade try-hard typewriter cliche banjo cold-pressed blue bottle unicorn. Lo-fi vice pickled etsy, tilde four loko semiotics tbh. Fixie neutra ethical, squid pop-up typewriter kale chips.',
        media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tAgiHlKToBvfsV3dH5YXtTLwVuocyEPS0A&usqp=CAU?width=700',
        location: 'Atlanta',
        phone_number: '404-555-0105',
        user_id: 2,
        profession_id: 1
    },
    {
        display_name: 'The One Man Band',
        website_url: 'https://findtheoneman.com',
        bio: 'Ill tell you how I feel about school, Jerry. Its a waste of time. Bunch of people runnin around bumpin into each other, got a guy up front says, 2 + 2, and the people in the back say, 4. Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin.',
        media: 'https://mlaf1df6j18h.i.optimole.com/u9FcQUI-DXKjGP_J/w:auto/h:auto/q:75/https://www.77events.co.uk/wp-content/uploads/2019/06/One-Man-Band.jpg?width=700',
        location: 'New York',
        phone_number: '212-222-1235',
        user_id: 3,
        profession_id: 10
    },
    {
        display_name: 'Broadzilla',
        website_url: 'https://broadzillagoescrazy.com',
        bio: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​ morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
        media: 'https://i.insider.com/5a048ecf7c86cc1e008b45e6?width=700',
        location: 'Austin',
        phone_number: '512-898-7878',
        user_id: 4,
        profession_id: 3
    },
    {
        display_name: 'Creative Affairs',
        website_url: 'https://google.com',
        bio: "Pecorino feta cheddar. Cow cheddar manchego gouda st. agur blue cheese boursin stilton jarlsberg. Cheesy grin cheesecake cheesecake caerphilly cheddar gouda danish fontina port-salut. Cheddar bocconcini boursin smelly cheese when the cheese comes out everybody's happy who moved my cheese.",
        media: 'https://www.gannett-cdn.com/presto/2022/03/09/PKNS/3ca28d62-e189-4411-87b0-0d0fbe514bc0-cdc16daa-e034-42fd-8cd4-021bb4f71751-KNS_Bijou_First_Concert_92.jpg?width=640',
        location: 'Las Vegas',
        phone_number: '702-555-0128',
        user_id: 5,
        profession_id: 8
    },
    {
        display_name: 'The Urban',
        website_url: 'https://engrish.com',
        bio: "Concept of the number one Hypatia extraordinary claims require extraordinary evidence Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit circumnavigated great turbulent clouds. Preserve and cherish that pale blue dot a mote of dust suspended in a sunbeam the only home we've ever known consectetur made in the interiors of collapsing stars encyclopaedia galactica?",
        media: 'https://i.insider.com/5d66b9ec6f24eb333942f773?width=700',
        location: 'Seattle',
        phone_number: '202-555-7896',
        user_id: 6,
        profession_id: 6
    },
    {
        display_name: 'Social Experiment',
        website_url: 'https://thesocialexp.com',
        bio: "Hard stop. This is meaningless dunder mifflin for on your plate, or i have a hard stop in an hour and half red flag single wringable neck so not the long pole in my tent. Organic growth. Incentivization. Not the long pole in my tent slipstream make it a priority. Clear blue water. Per my previous email cadence or high touch client yet i know you're busy.",
        media: 'https://i.pinimg.com/736x/25/51/8c/25518c03d075c38b5a07052ddc9fc913--experiment.jpg?width=640',
        location: 'St. Louis',
        phone_number: '859-555-1245',
        user_id: 7,
        profession_id: 4
    },
    {
        display_name: 'Team Magic',
        website_url: 'https://funnyordie.com/',
        bio: "Brownie muffin fruitcake cookie dragée shortbread carrot cake. Cheesecake croissant marshmallow dessert donut macaroon. Donut candy lollipop sweet biscuit jelly-o cake lemon drops pastry.",
        media: 'https://cdn.arstechnica.net/wp-content/uploads/2020/07/primingTOP.jpg?width=700',
        location: 'Las Vegas',
        phone_number: '505-222-1234',
        user_id: 8,
        profession_id: 3
    },
    {
        display_name: 'Photos by Ken',
        website_url: 'https://theoatmeal.com/',
        bio: 'Jarlsberg edam cheesy feet. Croque monsieur everyone loves blue castello squirty cheese taleggio cottage cheese danish fontina cheese and biscuits. Queso the big cheese taleggio halloumi rubber cheese everyone loves cheese strings camembert de normandie.',
        media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mKmVWH0u2XgAW8-GJfOSFwwxyJxdCQb8xQ&usqp=CAU?width=700',
        location: 'San Diego',
        phone_number: '555-456-8521',
        user_id: 9,
        profession_id: 1
    },
    {
        display_name: 'Killers Bar',
        website_url: 'https://codepen.io/akm2/full/AGgarW',
        bio: 'Hard cheese feta camembert de normandie. Danish fontina cheesy feet stinking bishop ricotta cheesy grin danish fontina caerphilly fondue. Cheese and biscuits say cheese cheddar melted cheese cheeseburger pecorino squirty cheese melted cheese. Melted cheese paneer cheese and wine cheese slices say cheese.',
        media: 'https://i0.wp.com/www.haunting.net/wp-content/uploads/2019/01/20190114_210938.jpg?fit=1500%2C1500&ssl=1?width=700',
        location: 'Jacksonville',
        phone_number: '555-852-6321',
        user_id: 10,
        profession_id: 17
    }
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;