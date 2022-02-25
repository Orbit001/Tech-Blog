const { User } = require('../models');

const userData = [
    {
        username: "shotoman",
        twitter: "shoto07",
        github: "shoto07",
        email: "shoto007@gmail.com",
        password: "sh0to!123"
    },
    {
        username: "billiamoxy",
        twitter: "oxy_biliam",
        github: "oxybiliam",
        email: "oxygenbil@gmail.com",
        password: "oxy8illiam1!"
    },
    {
        username: "justinbb1",
        twitter: "justin_bb",
        github: "justin_bb",
        email: "bb_justin1@gmail.com",
        password: "!1bb_justin"
    },
    {
        username: "moohow",
        twitter: "moohow1",
        github: "moohow2",
        email: "moohow12@gmail.com",
        password: "mo0how?1"
    },
    {
        username: "supersayan",
        twitter: "sup3rsayan",
        github: "sup3rsayan0",
        email: "sup3rsayan03@gmail.com",
        password: "sup3rs@yan0"
    },
    {
        username: "lime",
        twitter: "limex",
        github: "limex",
        email: "lime2x@gmail.com",
        password: "liM3!"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;