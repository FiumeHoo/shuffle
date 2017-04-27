// 获取元素位置的方法
function getPos(obj) {
  var iTop = obj.offsetTop;
  var iLeft = obj.offsetLeft;
  return {
    top:iTop,
    left:iLeft
  };
};

// 获取每个 li 的位置
var card_group = $('.card');
var positions = [];
for (var i = 0; i<card_group.length; i++) {
  var oPosition = [getPos(card_group[i]).left, getPos(card_group[i]).top];
  positions.push(oPosition);
}

// random move
function shuffle() {
  var shuffled_positions = positions.slice(0);
  var shuffled_positions = fisherYates(shuffled_positions);

  $(".card").each(function(){
    $(this).animate({
      left: shuffled_positions[0][0],
      top: shuffled_positions[0][1],
    }, 500);
    shuffled_positions.splice(0, 1);
  });
}

// 洗牌算法
function fisherYates ( arr ) {
  var i = arr.length;
  if ( i == 0 ) return false;
  while ( --i ) {
    var j = Math.floor( Math.random() * ( i + 1 ) );
    var tempi = arr[i];
    var tempj = arr[j];
    arr[i] = tempj;
    arr[j] = tempi;
  }
  return arr;
}

// 自动执行
$(document).ready(function(){
  setTimeout(function () {
    $('.sec4 .card').addClass('turn-back');
  }, 1000);
  setTimeout(function () {
    for (var i = 0; i < 5; i++){
      shuffle();
    }
    $('.sec4 .card').click(turn);
  }, 1500);
});

// 卡牌翻转
function turn(e){
  var curClassName = e.currentTarget.className.substr(5, 5);
  $('.sec4 ' + '.'+ curClassName).removeClass('turn-back');
}