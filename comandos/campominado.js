const Discord = require('discord.js')
const Minesweeper = require('discord.js-minesweeper');

exports.run = async(bot, message, args) => {
    var rows = parseInt(args[0]);
    var columns = parseInt(args[1]);
    var mines = parseInt(args[2]);
    if (!rows) {
      rows = 10
    }
 
    if (!columns) {
      columns = 10
    }
 
    if (!mines) {
      mines = 5
    }
 
    const minesweeper = new Minesweeper({ rows, columns, mines });
    const matrix = minesweeper.start();
 
    return matrix
      ? message.channel.send(matrix)
      : message.channel.send(':warning: Você forneceu dados inválidos.');
}
module.exports.command = {
    name: 'minesweeper',
    aliases: ['ms'],
    description: 'Joga o jogo campo minado!',
    category: "fun",
    usage: '',
    enabled: true,
    permlevel: 1
}