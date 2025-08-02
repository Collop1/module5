const friends = require('../models/friends')

// default endpoint, gets all friends
const getAllFriends = (req, res) => {
    res.json(friends)
}

// filter endpoint, gets friends matching the gender from 'gender' and 'letter' query parameter ie. /friends/filter?gender=male&letter=R
const filterFriends = (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    let appliedFilters = [];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender.toLowerCase() == filterGender.toLowerCase());
        appliedFilters.push(`gender "${filterGender}"`);
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.toLowerCase().startsWith(filterLetter.toLowerCase()));
        appliedFilters.push(`name starting with "${filterLetter}"`);
    }

    if (matchingFriends.length > 0) {
        // Return valid data when there are matches
        res.status(200).json(matchingFriends);
    } else {
        // Create a dynamic error message based on applied filters
        const filterDescription = appliedFilters.join(" and ");
        res.status(404).json({
            error: `No friends matching ${filterDescription}`
        });
    }
}

// Get information about this request from the headers
const getRequestInfo = (req, res) => {
    console.log(req.headers)

    // Returns info on the user-agent, content-type and accept headers
    res.json({
        "user-agent": req.headers["user-agent"],
        "content-type": req.headers["content-type"],
        "accept": req.headers["accept"]
    });
}

// Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
const getFriendById = (req, res) => {
    console.log(req.params)
    let friendId = parseInt(req.params.id, 10);

    let foundFriend = friends.find(friend => friend.id === friendId);

    if (foundFriend) {
        res.json(foundFriend);
    } else {
        res.status(404).json({error: 'Friend not found'});
    }
}

// a POST request with data sent in the body of the request, representing a new friend to add to our list
const addNewFriend = (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(newFriend)
}

// PUT request which will update data for an existing friend based on the ID in the URL
const updateFriendById = (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    // Replace the old friend data for friendId with the new data from updatedFriend
    let index = friends.findIndex(friend => friend.id === parseInt(friendId, 10));
    if (index === -1) {
        return res.status(404).json({error: 'Friend not found'});
    }

    if (updatedFriend) {
        friends[index] = {...friends[index], ...updatedFriend};
        res.json({result: 'Updated friend with ID ' + friendId, data: friends[index]});
    } else {
        res.status(404).json({error: 'Friend not found'});
    }
}

module.exports = {
    getAllFriends,
    filterFriends,
    getRequestInfo,
    getFriendById,
    addNewFriend,
    updateFriendById
};