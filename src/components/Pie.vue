<template>
  <!-- Pie insert -->
        <section>
            <div class="pieID2 pie">
            </div>
            <ul class="pieID2 legend">
              <li>
                <em>Bitcoin</em>
                <span>7108</span>
              </li>
              <li>
                <em>Litecoin</em>
                <span>200</span>
              </li>
              <li>
                <em>BCH</em>
                <span>868</span>
              </li>
              <li>
                <em>Ripple</em>
                <span>344</span>
              </li>
              <li>
                <em>Stellar</em>
                <span>1145</span>
              </li>
              <li>
                <em>Dogecoin</em>
                <span>50</span>
              </li>
            </ul>

          </section>
        <!-- -->
</template>

<script>
export default {
  name: 'Pie',
  methods: {
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
  }
}
</script>

<style>
/* pie charts */

 @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
@keyframes bake-pie {
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

section {
  margin-top: -200px;
  margin-right: -100px;
}

.pieID {
  vertical-align: top;
}

.pie {
  height: 20%;
  width: 20%;
  position: relative;
  margin: 0 30px 30px -50%;
}

.pie::before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  background: #EEE;
  border-radius: 50%;
  top: 50px;
  left: 50px;
}

.pie::after {
  content: "";
  display: block;
  width: 120px;
  height: 2px;
  border-radius: 50%;
  margin: 220px auto;
}

.slice {
  position: absolute;
  width: 200px;
  height: 200px;
  clip: rect(0px, 200px, 200px, 100px);
  animation: bake-pie 1.5s;
}

.slice span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  clip: rect(0px, 200px, 200px, 100px);
}

.legend {
  float: right;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-left: -100px;
  margin-top: -40px;
  margin-right: 50px;
  background: #FFF;
  color:#000;
  padding: 15px;
  font-size: 13px;
}

.legend li {
  width: 80px;
  height: 1.25em;
  margin-bottom: 0.4em;
  padding-left: 0.2em;
  border-left: 1.25em solid black;
}

.legend em {
  font-style: normal;
}

.legend span {
  display: none;
}
</style>
