exports.scheduleMeetings = function(meetings) {
    'use strict';

    if (!(meetings instanceof Array)) {
        throw "'meetings' should be an array";
    }

    var rooms = [];

    meetings.forEach(function(newMeeting) {
        var availableRoom = rooms.findIndex(
            function(room) {
                return !room.some(
                    function(scheduledMeeting) {
                        return (newMeeting[0] >= scheduledMeeting[0] && newMeeting[0] <= scheduledMeeting[1]) ||
                            (newMeeting[1] >= scheduledMeeting[0] && newMeeting[1] <= scheduledMeeting[1]);
                    });
            });

        if (availableRoom === -1) {
            // no available room found. create new one.
            rooms.push([newMeeting]);
        } else {
            // add meeting to existing room
            rooms[availableRoom].push(newMeeting);
        }
    });

    return rooms;
};
