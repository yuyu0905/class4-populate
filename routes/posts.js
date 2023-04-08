var express = require('express');
var router = express.Router();
const PostsControllers = require('../controllers/posts')

router.get('/', PostsControllers.getPosts);

router.post('/', PostsControllers.createPosts);

module.exports = router;
