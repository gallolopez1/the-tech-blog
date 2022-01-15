const { Post } = require('../models');

const postdata = [{
        title: 'Donec posuere metus vitae ipsum.',
        description: 'Something',
        user_id: 2
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        description: 'Something',
        user_id: 3
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        description: 'Something',
        user_id: 1
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        description: 'Something',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;