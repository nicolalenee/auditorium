const { User, Profile, Post } = require('../models');

const profiledata = [
    {
        occupation: 'musician',
        industry: 'music',
        band_name: 'The Goat',
        band_url: 'https://thegoat.com',
        bio: 'I love cheese, especially boursin squirty cheese. Red leicester mozzarella ricotta when the cheese comes out everybodys happy cheesecake blue castello cheddar everyone loves. Queso everyone loves chalk and cheese pecorino chalk and cheese mascarpone monterey jack blue castello. Brie squirty cheese taleggio.',
        media: 'https://youtu.be/QKae1k1BDdA',
        location: 'San Fransico',
        phone_number: 650-122-3334,
        user_id: 1
    },
    {
        occupation: 'club owner',
        industry: 'service',
        bio: 'Im baby drinking vinegar four loko ethical, cronut seitan chillwave raclette lo-fi. La croix farm-to-table affogato PBR&B selfies dreamcatcher drinking vinegar. Crucifix vegan pinterest trust fund, wayfarers readymade try-hard typewriter cliche banjo cold-pressed blue bottle unicorn. Lo-fi vice pickled etsy, tilde four loko semiotics tbh. Fixie neutra ethical, squid pop-up typewriter kale chips.',
        media: 'https://theshop.com',
        location: 'Atlanta',
        phone_number: 404-555-0105,
        user_id: 2
    },
    {
        occupation: 'band',
        industry: 'music',
        band_name: 'The One Man Band',
        band_url: 'https://findtheoneman.com',
        bio: 'Ill tell you how I feel about school, Jerry. Its a waste of time. Bunch of people runnin around bumpin into each other, got a guy up front says, 2 + 2, and the people in the back say, 4. Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin. I mean, its not a place for smart people, Jerry. I know thats not a popular opinion, but thats my two cents on the issue.'
        media: 'https://youtu.be/d-guQ3Pki-0',
        location: 'New York',
        phone_number: 212-222-1235,
        user_id: 3
    },
    {
        occupation: 'singer',
        industry: 'music',
        band_name: 'Broadzilla',
        band_url: 'https://broadzillagoescrazy.com',
        bio: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​ morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
        media: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.angelfire.com%2Frock3%2Fbroadzillafanz%2Fmich.html&psig=AOvVaw29oRNjcvDIBE2WpSVFKsUz&ust=1647031395575000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNii85-0vPYCFQAAAAAdAAAAABAE',
        location: 'Austin',
        phone_number: 512-898-7878,
        user_id: 4
    },
    {
        occupation: 'Venue Owner',
        industry: 'venue',
        bio: "Pecorino feta cheddar. Cow cheddar manchego gouda st. agur blue cheese boursin stilton jarlsberg. Cheesy grin cheesecake cheesecake caerphilly cheddar gouda danish fontina port-salut. Cheddar bocconcini boursin smelly cheese when the cheese comes out everybody's happy who moved my cheese.",
        media: 'https://creativeaffairslv.com',
        location: 'Las Vegas',
        phone_number: 702-555-0128,
        user_id: 5
    },
    {
        occupation: 'Restaurant',
        industry: 'service',
        bio: "Concept of the number one Hypatia extraordinary claims require extraordinary evidence Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit circumnavigated great turbulent clouds. Preserve and cherish that pale blue dot a mote of dust suspended in a sunbeam the only home we've ever known consectetur made in the interiors of collapsing stars encyclopaedia galactica? Courage of our questions a very small stage in a vast cosmic arena the only home we've ever known are creatures of the cosmos astonishment nisi ut aliquid ex ea commodi consequatur and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
        media: 'https://theurbanseattle.com',
        location: 'Seattle',
        phone_number: 202-555-7896,
        user_id: 6
    },
    {
        occupation: 'band',
        industry: 'music',
        band_name: 'Social Experiment',
        band_url: 'https://thesocialexp.com',
        bio: "Hard stop. This is meaningless dunder mifflin for on your plate, or i have a hard stop in an hour and half red flag single wringable neck so not the long pole in my tent. Organic growth. Incentivization. Not the long pole in my tent slipstream make it a priority. Clear blue water. Per my previous email cadence or high touch client yet i know you're busy.",
        media: 'https://youtu.be/jgQEZ3B-oTI',
        location: 'St. Louis',
        phone_number: 859-555-1245,
        user_id: 7
    },
    {
        occupation: 'magician',
        industry: 'magic',
        band_name: 'Team Magic',
        bio: "Brownie muffin fruitcake cookie dragée shortbread carrot cake. Cheesecake croissant marshmallow dessert donut macaroon. Donut candy lollipop sweet biscuit jelly-o cake lemon drops pastry.",
        media: 'https://teammagicforlife.com',
        location: 'Las Vegas',
        phone_number: 505-222-1234,
        user_id: 8
    }
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;