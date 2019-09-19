var canvas = document.getElementById('canvas');
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADDOW_GAP = 10;
var CLOUD_GAP_X = 50;
var CLOUD_GAP_Y = 50;
var MESSAGE_GAP_Y = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_X = 150;
var BAR_Y = 90;
var BAR_GAP = 50;
var NAME_Y = 260;
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
//var renderBar = function(ctx, x, y, color) {
//  ctx.fillStyle = color;
//  ctx.fillRect(x, y, BAR_WIDTH, BAR_HEIGHT);
//};
var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    };
  };
    return maxElement;
};
window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADDOW_GAP, CLOUD_Y + SHADDOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  //текст таблички
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP_X, CLOUD_GAP_Y);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP_X, CLOUD_GAP_Y + MESSAGE_GAP_Y);
  //диаграмма
//  var players = ['Вы', 'Он', 'Она', 'Оно'];
  for (var i = 0; i < players.length; i++) {

  ctx.fillStyle = '#000';
  ctx.fillText(players[i], CLOUD_X + CLOUD_GAP_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT + CLOUD_Y - 10);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  var maxTime = getMaxElement(times);
  ctx.fillRect(CLOUD_X + CLOUD_GAP_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, times[i] * BAR_HEIGHT / maxTime);
};

};
