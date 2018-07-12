<template>
  <!-- cointest -->
                  <div class="skill-icon orange">
                        <div class="icon"></div>
                        <div class="coin front">
                        </div>
                        <div class="coin"></div>
                        <div class="coin"></div>
                        <div class="coin"></div>
                        <div class="coin"></div>
                        <div class="coin"></div>
                        <div class="coin"></div>
                        <div class="coin"></div>
                        <div class="coin"></div>
                        <div class="coin back">
                          <div class="icon"></div>
                        </div>

                        <div class="coin-wedge"></div>
                    </div>
                    <!-- -->
</template>

<script>
export default {
  name: 'coin'
}
</script>

<style scoped>

.skill-icon {
  position: relative;
  width: 45px;
  height: 45px;
  margin: 0px;
  margin-bottom: -10px;
  margin-left: 21%;
  -webkit-transform: perspective(400);
          transform: perspective(400);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform-origin: center center -5px;
          transform-origin: center center -5px;
  transition: -webkit-transform 1s cubic-bezier(0.2, 0.7, 0.4, 1.5);
  transition: transform 1s cubic-bezier(0.2, 0.7, 0.4, 1.5);
  transition: transform 1s cubic-bezier(0.2, 0.7, 0.4, 1.5), -webkit-transform 1s cubic-bezier(0.2, 0.7, 0.4, 1.5);
  cursor: pointer;
}
td:hover .skill-icon {
  -webkit-transform: perspective(400) rotateY(-180deg);
          transform: perspective(400) rotateY(-180deg);
}

.coin, .coin-wedge {
  position: absolute;
  top: 0;
  bottom: 0;
  background: currentColor;
}

.coin {
  left: 0;
  right: 0;
  border-radius: 100px;
}
.coin:empty {
  box-shadow: inset 0 0 0 85px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.coin:nth-child(2) {
  -webkit-transform: translateZ(-2px);
          transform: translateZ(-2px);
}
.coin:nth-child(3) {
  -webkit-transform: translateZ(-3px);
          transform: translateZ(-3px);
}
.coin:nth-child(4) {
  -webkit-transform: translateZ(-4px);
          transform: translateZ(-4px);
}
.coin:nth-child(5) {
  -webkit-transform: translateZ(-5px);
          transform: translateZ(-5px);
}
.coin:nth-child(6) {
  -webkit-transform: translateZ(-6px);
          transform: translateZ(-6px);
}
.coin:nth-child(7) {
  -webkit-transform: translateZ(-7px);
          transform: translateZ(-7px);
}
.coin:nth-child(8) {
  -webkit-transform: translateZ(-8px);
          transform: translateZ(-8px);
}
.coin:nth-child(9) {
  -webkit-transform: translateZ(-9px);
          transform: translateZ(-9px);
}
.coin:nth-child(10) {
  -webkit-transform: translateZ(-10px);
          transform: translateZ(-10px);
}

.coin-wedge {
  box-shadow: inset 0 0 0 85px rgba(0, 0, 0, 0.3);
  left: 50%;
  width: 10px;
  -webkit-transform: rotateY(90deg);
          transform: rotateY(90deg);
  -webkit-transform-origin: left center;
          transform-origin: left center;
  background: currentColor;
}

.icon {
  width: 40px;
  height: 40px;
  background: url("../assets/CoinSkillIcons.png");
  background-size: 340px 340px;
  background-position: inherit;
  margin: 0 0 0 0;
}

.front .icon {
  -webkit-transform: translateZ(1px);
          transform: translateZ(1px);
}
.last .icon {
  -webkit-transform: translateZ(-1px);
          transform: translateZ(-1px);
}

.red {
  color: #a6aab2;
}
.red .icon {
  background-position: 277px 5px;
  background-image: url("../assets/CoinSkillIcons.png");
}

.blue {
  transition-delay: 0.075s;
  color: #1CAFF6;
}
.blue .icon {
  background-image: url("../assets/CoinSkillIcons.png");
  background-position: 203px 2px;
  background-size: 400px 400px;
}

.green {
  transition-delay: 0.15s;
  color: #ffffff;
}
.green .icon {
  background-image: url("../assets/CoinSkillIcons.png");
  background-position: 282px 4px;
  background-size: 400px 400px;
}

.orange {
  transition-delay: 0.225s;
  color: #FF9900;
}
.orange .coin:empty {
  box-shadow: inset 0 0 0 85px rgba(0, 0, 0, 0.2);
}
.orange .icon {
  background-image: url("../assets/CoinSkillIcons.png");
  background-position: 144px 4px;
  background-size: 350px 350px;

}

</style>
