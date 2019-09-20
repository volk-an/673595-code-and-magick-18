var cloudParameters = {
CLOUD_WIDTH: 420,
CLOUD_HEIGHT: 270,
CLOUD_X: 100,
CLOUD_Y: 10,
SHADDOW_GAP: 10,
CLOUD_GAP_X: 50,
CLOUD_GAP_Y: 40
};
var MESSAGE_GAP_Y = 20;
var barParameters = {
BAR_MAX_HEIGHT: 150,
BAR_WIDTH: 40,
BAR_Y: 90,
BAR_GAP: 50
}
var NAME_BOTTOM_GAP = 20;
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudParameters.CLOUD_WIDTH, cloudParameters.CLOUD_HEIGHT);
};
//var renderBar = function(ctx, x, y, color) {
//  ctx.fillStyle = color;
//  ctx.fillRect(x, y, BAR_WIDTH, BAR_HEIGHT);
//};
/*var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    };
  };
    return maxElement;
};*/
var getMaxOfArray = function(numArray) {
  return Math.max.apply(null, numArray);
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, cloudParameters.CLOUD_X + cloudParameters.SHADDOW_GAP, cloudParameters.CLOUD_Y + cloudParameters.SHADDOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloudParameters.CLOUD_X, cloudParameters.CLOUD_Y, '#fff');
  //текст таблички
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', cloudParameters.CLOUD_X + cloudParameters.CLOUD_GAP_X, cloudParameters.CLOUD_GAP_Y);
  ctx.fillText('Список результатов:', cloudParameters.CLOUD_X + cloudParameters.CLOUD_GAP_X, cloudParameters.CLOUD_GAP_Y + MESSAGE_GAP_Y);
  //диаграмма

  for (var i = 0; i < players.length; i++) {
  var playerX = cloudParameters.CLOUD_X + cloudParameters.CLOUD_GAP_X + (barParameters.BAR_WIDTH + barParameters.BAR_GAP) * i;
  ctx.fillStyle = '#000';
  ctx.fillText(players[i], playerX, cloudParameters.CLOUD_HEIGHT + cloudParameters.CLOUD_Y - NAME_BOTTOM_GAP);
  if(players[i] === 'Вы') {
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';} else {
    ctx.fillStyle = 'hsl(240, 100%, 50%)'
  };
  var maxTime = getMaxOfArray(times);
  var barHeight = times[i] * barParameters.BAR_MAX_HEIGHT / maxTime;
  ctx.fillRect(playerX, barParameters.BAR_Y + barParameters.BAR_MAX_HEIGHT - barHeight, barParameters.BAR_WIDTH, barHeight);
};
};
