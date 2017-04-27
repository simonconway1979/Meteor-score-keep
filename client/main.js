import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Simon',
  score: 99
}, {
  _id: '2',
  name: 'David',
  score: 101
}, {
  _id: '3',
  name: 'Mary',
  score: 100
}];

const renderPlayers = function (players) {
  let numbers = [{val: 1}, {val: 2}, {val: 3}, {val: 101}];

  return players.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });

};

Meteor.startup(function () {
  let title = 'Score Keep';
  let name = 'Simon';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
