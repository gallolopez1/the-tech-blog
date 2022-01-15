const { Comment } = require('../models');

const commentdata = [{
        comment_text: 'Nunc rhoncus dui vel sem.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'Aliquam erat volutpat. In congue.',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
        user_id: 4,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;