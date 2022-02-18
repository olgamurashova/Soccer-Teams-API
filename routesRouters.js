const express = require('express');
const tigersRouter = express.Router();
const lionsRouter = express.Router();

const {teamLions} = require('/teamLions.js');
const {teamTigers} = require('/teamTigers.js');

//teamLions

lionsRouter.param('id', (req, res, next, id) => {
    if (!players[id]) {
        res.status(404).send;
    } else {
        req.id = players[id];
        next();
    }
}); 
//1 getting all players

lionsRouter.get('/', (req, res, next) => {
    if(players) {
    res.send(players);
    } else {
        res.status(404).send();
    }
});

//2 getting a single player by id

lionsRouter.get('/:id', (req, res, next) => {
    const playerId = req.params.id;
    if (playerId) {
        res.send(playerId);
    } else {
        res.status(404).send();
    }
});

//3 getting a player by their name

lionsRouter.get('/:id/name', (req, res, next) => {
    const playerName = req.id.name;
    if (playerName) {
        res.send(playerName);
    } else {
        res.status(404).send();
    }
})

//4 updating a player eg. /players/1?name=liambloom&age=32&position=goalkeeper

lionsRouter.put('/:id', (req, res, next) => {
    const playerId = Number(req.params.id);
    const newPlayer = req.query;
    players[playerId] = newPlayer;
    if (!newPlayer === -1);
    res.send(newPlayer); 
});

// 5 updating a player's name/age/position
lionsRouter.put('/:id/name', (req, res, next) => {
    const playerId = Number(req.params.id);
    const playerName = req.body.name;
    players[playerId] = playerName;
    res.send(players[playerId]);

});

//6 create a new player
lionsRouter.post('/:id', (req, res, next) => {
    const newPlayer = req.query.player;
    if(newPlayer.name && newPlayer.age && newPlayer.position && newPlayer.goals) {
        newPlayer.id = nextPlayerid++;
        players.push(newPlayer);
        res.send(newPlayer);
    } else {
        res.status(400).send();
    }  
});

//7 delete a player
lionsRouter.delete('/:id', (req, res, next) => {
    const playerId =  Number(req.params.id);
    const playerIndex = players.findIndex(player => playerId === player.id);
    if (!playerIndex === -1) {
        players.splice(playerIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

//teamTigers

tigersRouter.param('id', (req, res, next, id) => {
    if (!players[id]) {
        res.status(404).send;
    } else {
        req.id = players[id];
        next();
    }
}); 
//1 getting all players

tigersRouter.get('/', (req, res, next) => {
    if(players) {
    res.send(players);
    } else {
        res.status(404).send();
    }
});

//2 getting a single player by id

tigersRouter.get('/:id', (req, res, next) => {
    const playerId = req.params.id;
    if (playerId) {
        res.send(playerId);
    } else {
        res.status(404).send();
    }
});
    

//3 getting a player by their name

tigersRouter.get('/:id/name', (req, res, next) => {
    const playerName = req.id.name;
    if (playerName) {
        res.send(playerName);
    } else {
        res.status(404).send();
    }
})

//4 updating a player eg. /players/1?name=liambloom&age=32&position=goalkeeper

tigersRouter.put('/:id', (req, res, next) => {
    const playerId = Number(req.params.id);
    const newPlayer = req.query;
    players[playerId] = newPlayer;
    if (!newPlayer === -1);
    res.send(newPlayer); 
});

// 5 updating a player's name/age/position
tigersRouter.put('/:id/name', (req, res, next) => {
    const playerId = Number(req.params.id);
    const playerName = req.body;
    players[playerId] = playerName;
    res.send(players[playerId]);
});

//6 create a new player
tigersRouter.post('/:id', (req, res, next) => {
    const newPlayer = req.query;
    if(newPlayer.name && newPlayer.age && newPlayer.position && newPlayer.goals) {
        newPlayer.id = nextPlayerid++;
        players.push(newPlayer);
        res.send(newPlayer);
    } else {
        res.status(400).send();
    }  
});

//7 delete a player
tigersRouter.delete('/:id', (req, res, next) => {
    const playerId =  Number(req.params.id);
    const playerIndex = players.findIndex(player => playerId === player.id);
    if (!playerIndex === -1) {
        players.splice(playerIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

module.exports = tigersRouter;
module.exports = lionsRouter;
