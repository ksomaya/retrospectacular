var db = require('./wrapper');

db.checkIndexExists('retrospectives')
    .then(function (result) {
        console.log('check index exists', result);
    })
    .fail(function (err) {
        console.log(err);
    });

db.checkIndexStatus('retrospectives')
    .then(function (result) {
        console.log('check index status ', result);
    })
    .fail(function (err) {
        console.log(err);
    });

var teamData = {
    name: 'Bogus team'
};

db.postData(teamData).ofType('team').into('retrospectives')
    .then(function (result) {
        console.log(result);
    })
    .fail(function (err) {
        console.log(err);
    });

var retroData = {
    'teamId': 102,
    'type': 'pro',
    'message': 'Learning new things'
};

db.postData(retroData).ofType('ticket').into('retrospectives')
    .then(function (result) {
        console.log(result);
    })
    .fail(function (err) {
        console.log(err);
    });

db.getAll('tickets').from('retrospectives')
    .then(function (result) {
        console.log(result);
    })
    .fail(function (err) {
        console.log(err);
    });

exports.getResults = function (req, res) {
    res.json('boom');
};
