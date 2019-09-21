'use strict';
var cloudParameters = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10,
  SHADDOW_GAP: 10,
  GAP_X: 50,
  GAP_Y: 40
};
var MESSAGE_GAP_Y = 20;
var barParameters = {
  MAX_HEIGHT: 150,
  WIDTH: 40,
  Y: 90,
  GAP: 50
};
var NAME_BOTTOM_GAP = 20;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudParameters.WIDTH, cloudParameters.HEIGHT);
};
// var renderBar = function(ctx, x, y, color) {
//  ctx.fillStyle = color;
//  ctx.fillRect(x, y, BAR_WIDTH, BAR_HEIGHT);
// };
/* var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    };
  };
    return maxElement;
};*/
var getMaxOfArray = function (numArray) {
  return Math.max.apply(null, numArray);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, cloudParameters.X + cloudParameters.SHADDOW_GAP, cloudParameters.Y + cloudParameters.SHADDOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloudParameters.X, cloudParameters.Y, '#fff');
  // текст таблички
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', cloudParameters.X + cloudParameters.GAP_X, cloudParameters.GAP_Y);
  ctx.fillText('Список результатов:', cloudParameters.X + cloudParameters.GAP_X, cloudParameters.GAP_Y + MESSAGE_GAP_Y);
  // диаграмма

  players.forEach(function (player, i) {
    var coordX = cloudParameters.X + cloudParameters.GAP_X + (barParameters.WIDTH + barParameters.GAP) * i;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], coordX, cloudParameters.HEIGHT + cloudParameters.Y - NAME_BOTTOM_GAP);
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    var maxTime = getMaxOfArray(times);
    var barHeight = times[i] * barParameters.MAX_HEIGHT / maxTime;
    var coordY = barParameters.Y + barParameters.MAX_HEIGHT - barHeight;
    ctx.fillRect(coordX, coordY, barParameters.WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), coordX, coordY - 10);
  });
};
