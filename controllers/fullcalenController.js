'use strict';
console.log("in full calendar controller")

exports.get_events_post = function(req, res){
  // //events
  // Event.find({user: req.user._id}, function(err, event_list){
  //   if(err){
  //     res.status(err.status || 500);
  //     res.json(err);
  //   } else {
  //     res.json(event_list);
  //   }
  // })

  var events = [
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-07-09T16:00:00',
          end: null
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-07-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-07-11',
          end: '2018-07-13'
        },
        {
          title: 'Meeting',
          start: '2018-07-12T10:30:00',
          end: '2018-07-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-07-12T12:00:00'
        },
        {
          title: 'Dinner',
          start: '2018-07-12T20:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-07-28'
        }
      ]

      res.json(events);
}

exports.getCalendar = (req, res) => {
  res.render('calendarD');
};
