const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Good stuff my guy!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "I'm craving a ham sandwich."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Who is going to go to Cambodia with me?"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Is Elon Musk real?"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "I definitely love you"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "How do we stop this?"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "How many green beans in mile"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I think I'm in love with you."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;