const { Post } = require('../models');

const postData = [
    {
        title: "Ukraine Has Been Invaded, HTML Down",
        post_content: "Due to the imminent danger of the major data hosting in Kiev, Html is not supported currently in Eastern Europe",
        user_id: 3
    },
    {
        title: "A Beluga Whale Does A Backflip",
        post_content: "Watchers at Walt Disney world were amazed when a wilde Beluga Whale did a complete backflip at the park, especially since the park does not have any Beluga Whales",
        user_id: 1
    },
    {
        title: "I Just Won The Lottery",
        post_content: "I literally just won seven hundred million dollars in the national PowerBall drawing.",
        user_id: 2

    },
    {
        title: "I Bought A 3090!!",
        post_content: "After a long time of failed checkouts and false hopes, I finally managed to secure a 3090 from Nvidia directly! Best $1500 I ever spent.",
        user_id: 5
    },
    {
        title: "How To Talk To Women",
        post_content: "They are literally people, just dont be weird.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;