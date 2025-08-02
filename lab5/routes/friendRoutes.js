const express = require("express");
const router = express.Router();
const friendsController = require('../controllers/friendsController');

// default endpoint, gets all friends
router.get('/', friendsController.getAllFriends);

// filter endpoint
// /friends/filter?gender=male&letter=R
router.get('/filter', friendsController.filterFriends);

// Get information about this request from the headers
// /friends/info
router.get('/info', friendsController.getRequestInfo);

// Dynamic request param endpoint - get the friend matching the specific ID
// /friends/3
router.get('/:id', friendsController.getFriendById);

// POST request to add a new friend
router.post('/', friendsController.addNewFriend);

// PUT request to update an existing friend
router.put('/:id', friendsController.updateFriendById);

module.exports = router;