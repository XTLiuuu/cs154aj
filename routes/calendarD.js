var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');
const friendController = require('../controllers/friendController');

var fullcalenController = require('../controllers/fullcalenController');
var isLoggedIn = function (req, res, next) {
    console.log("checking to see if they are authenticated!")
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
      console.log("user has been Authenticated")
      return next();
    }
    console.log("user has not been authenticated...")
    // if they aren't redirect them to the home page
    res.redirect('/auth/google');
}

/* GET home page. */
router.get('/calendarD', isLoggedIn, fullcalenController.getCalendar);
router.get('/sendCalendar/:friend_id', isLoggedIn, fullcalenController.sendCalendar);
router.post('/get_events', isLoggedIn, fullcalenController.get_events_post);
router.get('/show_sending_event/:friend_id/:event_id', isLoggedIn, friendController.attachCurrFriend,fullcalenController.show_sending_event);
router.post('/show_sending_event/:friend_id/send_Event', isLoggedIn, profileController.attachProfile, fullcalenController.send_event);
router.get('/update_event/:event_id', isLoggedIn, fullcalenController.update_event_get);
router.post('/update_event/:event_id', isLoggedIn, fullcalenController.update_event_post);
module.exports = router;
