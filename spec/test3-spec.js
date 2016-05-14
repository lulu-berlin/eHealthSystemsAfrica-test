'use strict';

var meetings_rooms = require('../src/js/meetings-rooms');

describe('scheduleMeetings', function() {
    var scheduleMeetings = meetings_rooms.scheduleMeetings;

    it("should return an array of one room with one meeting when one meeting is scheduled",
        function() {
            var meeting1 = [new Date(2016, 5, 13, 18, 0, 0, 0), new Date(2016, 5, 13, 18, 30, 0, 0)];
            var rooms = scheduleMeetings([meeting1]);
            // number of rooms assigned
            expect(rooms.length).toBe(1);
            // number of meetings in the first room
            expect(rooms[0].length).toBe(1);
            // first meeting of the first room
            expect(rooms[0][0]).toBe(meeting1);
        });

    it("should return an array of one room with two meeting when two non colliding meetings are scheduled",
        function() {
            var meeting1 = [new Date(2016, 5, 13, 18, 0, 0, 0), new Date(2016, 5, 13, 18, 30, 0, 0)];
            var meeting2 = [new Date(2016, 5, 13, 15, 0, 0, 0), new Date(2016, 5, 13, 15, 30, 0, 0)];
            var rooms = scheduleMeetings([meeting1, meeting2]);
            expect(rooms.length).toBe(1);
            expect(rooms[0].length).toBe(2);
            expect(rooms[0][0] === meeting1 || rooms[0][1] === meeting1).toBe(true);
            expect(rooms[0][0] === meeting2 || rooms[0][1] === meeting2).toBe(true);
        });

    it("should return an array of two rooms with one meeting each when two colliding meetings are scheduled, " +
        "the first starting earlier",
        function() {
            var meeting1 = [new Date(2016, 5, 13, 18, 0, 0, 0), new Date(2016, 5, 13, 19, 0, 0, 0)];
            var meeting2 = [new Date(2016, 5, 13, 18, 30, 0, 0), new Date(2016, 5, 13, 19, 30, 0, 0)];
            var rooms = scheduleMeetings([meeting1, meeting2]);
            expect(rooms.length).toBe(2);
            expect(rooms[0].length).toBe(1);
            expect(rooms[1].length).toBe(1);
            expect(rooms[0][0] === meeting1 || rooms[1][0] === meeting1).toBe(true);
            expect(rooms[0][0] === meeting2 || rooms[1][0] === meeting2).toBe(true);
        });

    it("should return an array of two rooms with one meeting each when two colliding meetings are scheduled, " +
        "the second starting earlier",
        function() {
            var meeting1 = [new Date(2016, 5, 13, 18, 30, 0, 0), new Date(2016, 5, 13, 19, 30, 0, 0)];
            var meeting2 = [new Date(2016, 5, 13, 18, 0, 0, 0), new Date(2016, 5, 13, 19, 0, 0, 0)];
            var rooms = scheduleMeetings([meeting1, meeting2]);
            expect(rooms.length).toBe(2);
            expect(rooms[0].length).toBe(1);
            expect(rooms[1].length).toBe(1);
            expect(rooms[0][0] === meeting1 || rooms[1][0] === meeting1).toBe(true);
            expect(rooms[0][0] === meeting2 || rooms[1][0] === meeting2).toBe(true);
        });

    it("should return an array of three rooms with one meeting each " +
        "when three identical meetings are scheduled",
        function() {
            var meeting = [new Date(2016, 5, 13, 18, 30, 0, 0), new Date(2016, 5, 13, 19, 30, 0, 0)];
            var rooms = scheduleMeetings([meeting, meeting, meeting]);
            // number of rooms assigned
            expect(rooms.length).toBe(3);
            expect(rooms[0].length).toBe(1);
            expect(rooms[1].length).toBe(1);
            expect(rooms[2].length).toBe(1);
            expect(rooms[0][0]).toBe(meeting);
            expect(rooms[1][0]).toBe(meeting);
            expect(rooms[2][0]).toBe(meeting);
        });

    it("should return an array of two rooms with one meeting each " +
        "when two meetings are scheduled, the second containing the first",
        function() {
            var meeting1 = [new Date(2016, 5, 13, 18, 30, 0, 0), new Date(2016, 5, 13, 19, 0, 0, 0)];
            var meeting2 = [new Date(2016, 5, 13, 18, 0, 0, 0), new Date(2016, 5, 13, 19, 30, 0, 0)];
            var rooms = scheduleMeetings([meeting1, meeting2]);
            expect(rooms.length).toBe(2);
            expect(rooms[0].length).toBe(1);
            expect(rooms[1].length).toBe(1);
            expect(rooms[0][0] === meeting1 || rooms[1][0] === meeting1).toBe(true);
            expect(rooms[0][0] === meeting2 || rooms[1][0] === meeting2).toBe(true);
        });
});
