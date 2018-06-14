/*Refresh when above 770 pixels */
var ww = $(window).width();
var limit = 769;

function refresh() {
   ww = $(window).width();
   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
}

var tOut;
$(window).resize(function() {
    var resW = $(window).width();
    clearTimeout(tOut);
    if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {
        tOut = setTimeout(refresh, 100);
    }
});
/* End of refresh */

/* Fade */
$(document).ready(function(){
        $("#div1").fadeIn(6000);
        $("#div2").fadeIn(7000);
        $("#div3").fadeIn(9000);
});

/* Cards */

var Flipper = (function() {
  var card = $('.card');
  var flipper = card.find('.card__flipper');
  var win = $(window);

  var flip = function() {
    var thisCard = $(this);
    var thisFlipper = thisCard.find('.card__flipper');
    var offset = thisCard.offset();
    var xc = win.width() / 2;
    var yc = win.height() / 2;
    var docScroll = $(document).scrollTop();
    var cardW = thisCard.outerWidth() / 2;
    var cardH = thisCard.height() / 2;

    var transX = xc - offset.left - cardW;
    var transY = docScroll + yc - offset.top - cardH;
//     if (offset.top > card.height()) transY = docScroll - offset.top + cardH;
    if (win.width() <= 700) transY = 0;

    if (card.hasClass('active')) unflip();

    thisCard.css({'z-index': '3'}).addClass('active');

    thisFlipper.css({
      'transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)',
      '-webkit-transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)',
      '-ms-transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)'
    }).addClass('active');

    return false;
  };

  var unflip = function(e) {
    card.css({'z-index': '1'}).removeClass('active');
    flipper.css({
      'transform': 'none',
      '-webkit-transform': 'none',
      '-ms-transform': 'none'
    }).removeClass('active');
  };

  var bindActions = function() {
    card.on('click', flip);
    win.on('click', unflip);
  }

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

}());

Flipper.init();

/* End Cards */

/* Pie Charts */

function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;
  $("."+sliceID).css({
    "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
  });
  $("."+sliceID+" span").css({
    "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
    "background-color": color
  });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s"+dataCount+"-"+sliceCount;
  var maxSize = 179;
  if(sliceSize<=maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}
function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for(var i=0; i<listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "cornflowerblue",
    "olivedrab",
    "orange",
    "tomato",
    "crimson",
    "purple",
    "turquoise",
    "forestgreen",
    "navy",
    "gray"
  ];
  for(var i=0; i<listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
    offset += size;
  }
}

createPie(".pieID.legend", ".pieID.pie");
createPie(".pieID2.legend", ".pieID2.pie");
createPie(".pieID3.legend", ".pieID3.pie");
createPie(".pieID4.legend", ".pieID4.pie");
createPie(".pieID5.legend", ".pieID5.pie");
createPie(".pieID6.legend", ".pieID6.pie");
