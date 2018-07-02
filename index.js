const _ = require('lodash');
exports.playerPicker = (req, res) => {
  const players = (_.isArray(req.body) ? req.body : [])
    .map(x => x.replace(/[^a-zA-Z0-9\.-_]/g, ''));
  if (players.length === 1) {
    const player = _.first(players);
    res.send(`Only Player: ${player}`);
  } else if (players.length > 0) {
    const player = _.sample(players);
    res.send(`Player: ${player}`);
  } else {
    res.send('No Players Sent');
  }
};
