<template>
    <vue-flip :active-click="true" width="30%" class="card">
<!-- Card Front -->
      <div class="front" slot="front">
        <p class="card__name"><span>{{name1}}</span><br>{{name2}}<br><span><p>I N D E X</p></span></p>
        <cardtable v-bind:tc="tc" v-bind:cl="cl"></cardtable>
      </div>
<!-- Card Back -->
      <div slot="back" class="under">
          <pie v-bind:cl="cl"></pie>
      </div>
    </vue-flip>
</template>

<script>
/* eslint-disable */
import VueFlip from 'vue-flip'
import CardTable from './CardTable'
import Pie from './Pie'

export default {
  name: 'card',
  components: {
    'vue-flip': VueFlip,
    'cardtable': CardTable,
    'pie' : Pie
  },
  props: {
    name1: String,
    name2: String,
    cl: String,
    tc: String
  }
}
</script>

<style scoped>

html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  background: #1f1f1f;
  color: white;
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.front, .under {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  cursor: pointer;
}

.card:hover {
  -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
  transform: rotateY(-15deg);
  -webkit-transform: rotateY(-15deg);
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
}

.card .front {
  overflow: hidden;
  color: white;
}

.card .under {
    overflow: hidden;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    background-color: #141414 !important;
    color: white !important;
  }

.card {
  float: left;
  position: relative;
  width: calc(100% * .3333 - 30px + .3333 * 30px) !important;
  height: 360px;
  margin: 0 30px 30px 0;
  /* Prevents jerky motion when no longer hovering */
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
}

.card__name {
  font-size: 34px;
  line-height: 0.82;
  font-weight: 800;
  margin-top:5px;
  margin-bottom: 8px;
}

.card__name span {
  font-size: 19px;
}

.card__name span p {
  font-size: 14px;
  line-height: 0;
}

.card:first-child .front {
  -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
  transform: rotateY(-15deg);
  -webkit-transform: rotateY(-15deg);
  overflow: auto;
  background: #328c3b;
  width: 100%;
  border-right: 2px solid rgba(30, 84, 35);
  transition: border-width 0.25s linear;
}
.card:first-child:hover .front {
  border-width: 5px;
}

.card:first-child .card__name {
  text-shadow:  1px 1px rgba(30, 84, 35, 0.8) , 2px 2px rgba(30, 85, 35, 0.802) , 3px 3px rgba(31, 86, 36, 0.804) , 4px 4px rgba(31, 86, 36, 0.806) , 5px 5px rgba(31, 87, 36, 0.808) , 6px 6px rgba(31, 88, 37, 0.81) , 7px 7px rgba(32, 89, 37, 0.812) , 8px 8px rgba(32, 90, 37, 0.814) , 9px 9px rgba(32, 90, 38, 0.816) , 10px 10px rgba(33, 91, 38, 0.818) , 11px 11px rgba(33, 92, 38, 0.82) , 12px 12px rgba(33, 93, 39, 0.822) , 13px 13px rgba(33, 94, 39, 0.824) , 14px 14px rgba(34, 94, 39, 0.826) , 15px 15px rgba(34, 95, 40, 0.828) , 16px 16px rgba(34, 96, 40, 0.83) , 17px 17px rgba(34, 96, 40, 0.832) , 18px 18px rgba(35, 97, 41, 0.834) , 19px 19px rgba(35, 98, 41, 0.836) , 20px 20px rgba(35, 99, 41, 0.838) , 21px 21px rgba(35, 99, 42, 0.84) , 22px 22px rgba(36, 100, 42, 0.842) , 23px 23px rgba(36, 101, 42, 0.844) , 24px 24px rgba(36, 101, 42, 0.846) , 25px 25px rgba(36, 102, 43, 0.848) , 26px 26px rgba(37, 103, 43, 0.85) , 27px 27px rgba(37, 103, 43, 0.852) , 28px 28px rgba(37, 104, 44, 0.854) , 29px 29px rgba(37, 105, 44, 0.856) , 30px 30px rgba(38, 105, 44, 0.858) , 31px 31px rgba(38, 106, 44, 0.86) , 32px 32px rgba(38, 107, 45, 0.862) , 33px 33px rgba(38, 107, 45, 0.864) , 34px 34px rgba(38, 108, 45, 0.866) , 35px 35px rgba(39, 108, 45, 0.868) , 36px 36px rgba(39, 109, 46, 0.87) , 37px 37px rgba(39, 110, 46, 0.872) , 38px 38px rgba(39, 110, 46, 0.874) , 39px 39px rgba(40, 111, 46, 0.876) , 40px 40px rgba(40, 111, 47, 0.878) , 41px 41px rgba(40, 112, 47, 0.88) , 42px 42px rgba(40, 113, 47, 0.882) , 43px 43px rgba(40, 113, 47, 0.884) , 44px 44px rgba(41, 114, 48, 0.886) , 45px 45px rgba(41, 114, 48, 0.888) , 46px 46px rgba(41, 115, 48, 0.89) , 47px 47px rgba(41, 115, 48, 0.892) , 48px 48px rgba(41, 116, 49, 0.894) , 49px 49px rgba(42, 117, 49, 0.896) , 50px 50px rgba(42, 117, 49, 0.898) , 51px 51px rgba(42, 118, 49, 0.9) , 52px 52px rgba(42, 118, 50, 0.902) , 53px 53px rgba(42, 119, 50, 0.904) , 54px 54px rgba(43, 119, 50, 0.906) , 55px 55px rgba(43, 120, 50, 0.908) , 56px 56px rgba(43, 120, 51, 0.91) , 57px 57px rgba(43, 121, 51, 0.912) , 58px 58px rgba(43, 121, 51, 0.914) , 59px 59px rgba(43, 122, 51, 0.916) , 60px 60px rgba(44, 122, 51, 0.918) , 61px 61px rgba(44, 123, 52, 0.92) , 62px 62px rgba(44, 123, 52, 0.922) , 63px 63px rgba(44, 124, 52, 0.924) , 64px 64px rgba(44, 124, 52, 0.926) , 65px 65px rgba(45, 125, 52, 0.928) , 66px 66px rgba(45, 125, 53, 0.93) , 67px 67px rgba(45, 126, 53, 0.932) , 68px 68px rgba(45, 126, 53, 0.934) , 69px 69px rgba(45, 127, 53, 0.936) , 70px 70px rgba(45, 127, 53, 0.938) , 71px 71px rgba(46, 128, 54, 0.94) , 72px 72px rgba(46, 128, 54, 0.942) , 73px 73px rgba(46, 128, 54, 0.944) , 74px 74px rgba(46, 129, 54, 0.946) , 75px 75px rgba(46, 129, 54, 0.948) , 76px 76px rgba(46, 130, 55, 0.95) , 77px 77px rgba(47, 130, 55, 0.952) , 78px 78px rgba(47, 131, 55, 0.954) , 79px 79px rgba(47, 131, 55, 0.956) , 80px 80px rgba(47, 132, 55, 0.958) , 81px 81px rgba(47, 132, 56, 0.96) , 82px 82px rgba(47, 132, 56, 0.962) , 83px 83px rgba(47, 133, 56, 0.964) , 84px 84px rgba(48, 133, 56, 0.966) , 85px 85px rgba(48, 134, 56, 0.968) , 86px 86px rgba(48, 134, 56, 0.97) , 87px 87px rgba(48, 135, 57, 0.972) , 88px 88px rgba(48, 135, 57, 0.974) , 89px 89px rgba(48, 135, 57, 0.976) , 90px 90px rgba(48, 136, 57, 0.978) , 91px 91px rgba(49, 136, 57, 0.98) , 92px 92px rgba(49, 137, 58, 0.982) , 93px 93px rgba(49, 137, 58, 0.984) , 94px 94px rgba(49, 137, 58, 0.986) , 95px 95px rgba(49, 138, 58, 0.988) , 96px 96px rgba(49, 138, 58, 0.99) , 97px 97px rgba(49, 138, 58, 0.992) , 98px 98px rgba(50, 139, 59, 0.994) , 99px 99px rgba(50, 139, 59, 0.996) , 100px 100px rgba(50, 140, 59, 0.998);
}
.card:nth-child(2) .front {
  -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
  transform: rotateY(-15deg);
  -webkit-transform: rotateY(-15deg);
  overflow: auto;
  background: #3e5eb3;
  border-right: 2px solid rgba(42, 64, 122);
  transition: border-width 0.25s linear;
}
.card:nth-child(2):hover .front {
  border-width: 5px;
}
.card:nth-child(2) .card__name {
  text-shadow:  1px 1px rgba(42, 64, 122, 0.8) , 2px 2px rgba(42, 64, 123, 0.802) , 3px 3px rgba(43, 65, 124, 0.804) , 4px 4px rgba(43, 65, 125, 0.806) , 5px 5px rgba(43, 66, 125, 0.808) , 6px 6px rgba(43, 66, 126, 0.81) , 7px 7px rgba(44, 67, 127, 0.812) , 8px 8px rgba(44, 67, 128, 0.814) , 9px 9px rgba(44, 67, 129, 0.816) , 10px 10px rgba(45, 68, 129, 0.818) , 11px 11px rgba(45, 68, 130, 0.82) , 12px 12px rgba(45, 69, 131, 0.822) , 13px 13px rgba(45, 69, 132, 0.824) , 14px 14px rgba(46, 69, 132, 0.826) , 15px 15px rgba(46, 70, 133, 0.828) , 16px 16px rgba(46, 70, 134, 0.83) , 17px 17px rgba(46, 71, 135, 0.832) , 18px 18px rgba(47, 71, 135, 0.834) , 19px 19px rgba(47, 71, 136, 0.836) , 20px 20px rgba(47, 72, 137, 0.838) , 21px 21px rgba(47, 72, 138, 0.84) , 22px 22px rgba(48, 73, 138, 0.842) , 23px 23px rgba(48, 73, 139, 0.844) , 24px 24px rgba(48, 73, 140, 0.846) , 25px 25px rgba(48, 74, 140, 0.848) , 26px 26px rgba(49, 74, 141, 0.85) , 27px 27px rgba(49, 74, 142, 0.852) , 28px 28px rgba(49, 75, 142, 0.854) , 29px 29px rgba(49, 75, 143, 0.856) , 30px 30px rgba(50, 75, 144, 0.858) , 31px 31px rgba(50, 76, 144, 0.86) , 32px 32px rgba(50, 76, 145, 0.862) , 33px 33px rgba(50, 76, 146, 0.864) , 34px 34px rgba(50, 77, 146, 0.866) , 35px 35px rgba(51, 77, 147, 0.868) , 36px 36px rgba(51, 77, 147, 0.87) , 37px 37px rgba(51, 78, 148, 0.872) , 38px 38px rgba(51, 78, 149, 0.874) , 39px 39px rgba(52, 78, 149, 0.876) , 40px 40px rgba(52, 79, 150, 0.878) , 41px 41px rgba(52, 79, 151, 0.88) , 42px 42px rgba(52, 79, 151, 0.882) , 43px 43px rgba(52, 80, 152, 0.884) , 44px 44px rgba(53, 80, 152, 0.886) , 45px 45px rgba(53, 80, 153, 0.888) , 46px 46px rgba(53, 81, 153, 0.89) , 47px 47px rgba(53, 81, 154, 0.892) , 48px 48px rgba(53, 81, 155, 0.894) , 49px 49px rgba(54, 81, 155, 0.896) , 50px 50px rgba(54, 82, 156, 0.898) , 51px 51px rgba(54, 82, 156, 0.9) , 52px 52px rgba(54, 82, 157, 0.902) , 53px 53px rgba(54, 83, 157, 0.904) , 54px 54px rgba(55, 83, 158, 0.906) , 55px 55px rgba(55, 83, 158, 0.908) , 56px 56px rgba(55, 83, 159, 0.91) , 57px 57px rgba(55, 84, 159, 0.912) , 58px 58px rgba(55, 84, 160, 0.914) , 59px 59px rgba(55, 84, 160, 0.916) , 60px 60px rgba(56, 85, 161, 0.918) , 61px 61px rgba(56, 85, 161, 0.92) , 62px 62px rgba(56, 85, 162, 0.922) , 63px 63px rgba(56, 85, 162, 0.924) , 64px 64px rgba(56, 86, 163, 0.926) , 65px 65px rgba(57, 86, 163, 0.928) , 66px 66px rgba(57, 86, 164, 0.93) , 67px 67px rgba(57, 86, 164, 0.932) , 68px 68px rgba(57, 87, 165, 0.934) , 69px 69px rgba(57, 87, 165, 0.936) , 70px 70px rgba(57, 87, 166, 0.938) , 71px 71px rgba(58, 87, 166, 0.94) , 72px 72px rgba(58, 88, 167, 0.942) , 73px 73px rgba(58, 88, 167, 0.944) , 74px 74px rgba(58, 88, 168, 0.946) , 75px 75px rgba(58, 88, 168, 0.948) , 76px 76px rgba(58, 89, 169, 0.95) , 77px 77px rgba(59, 89, 169, 0.952) , 78px 78px rgba(59, 89, 170, 0.954) , 79px 79px rgba(59, 89, 170, 0.956) , 80px 80px rgba(59, 89, 170, 0.958) , 81px 81px rgba(59, 90, 171, 0.96) , 82px 82px rgba(59, 90, 171, 0.962) , 83px 83px rgba(59, 90, 172, 0.964) , 84px 84px rgba(60, 90, 172, 0.966) , 85px 85px rgba(60, 91, 173, 0.968) , 86px 86px rgba(60, 91, 173, 0.97) , 87px 87px rgba(60, 91, 173, 0.972) , 88px 88px rgba(60, 91, 174, 0.974) , 89px 89px rgba(60, 92, 174, 0.976) , 90px 90px rgba(60, 92, 175, 0.978) , 91px 91px rgba(61, 92, 175, 0.98) , 92px 92px rgba(61, 92, 175, 0.982) , 93px 93px rgba(61, 92, 176, 0.984) , 94px 94px rgba(61, 93, 176, 0.986) , 95px 95px rgba(61, 93, 177, 0.988) , 96px 96px rgba(61, 93, 177, 0.99) , 97px 97px rgba(61, 93, 177, 0.992) , 98px 98px rgba(62, 93, 178, 0.994) , 99px 99px rgba(62, 94, 178, 0.996) , 100px 100px rgba(62, 94, 179, 0.998);
}

.card:nth-child(3) {
  margin-right: 0;
}
.card:nth-child(3) .front {
  -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
  transform: rotateY(-15deg);
  -webkit-transform: rotateY(-15deg);
  overflow: auto;
  background: #97799b;
  border-right: 2px solid rgba(111, 85, 114);
  transition: border-width 0.25s linear;
}
.card:nth-child(3):hover .front {
  border-width: 5px;
}
.card:nth-child(3) .card__name {
  text-shadow:  1px 1px rgba(111, 85, 114, 0.8) , 2px 2px rgba(112, 86, 115, 0.802) , 3px 3px rgba(112, 86, 115, 0.804) , 4px 4px rgba(113, 87, 116, 0.806) , 5px 5px rgba(113, 87, 116, 0.808) , 6px 6px rgba(114, 88, 117, 0.81) , 7px 7px rgba(114, 88, 118, 0.812) , 8px 8px rgba(115, 89, 118, 0.814) , 9px 9px rgba(116, 89, 119, 0.816) , 10px 10px rgba(116, 90, 119, 0.818) , 11px 11px rgba(117, 90, 120, 0.82) , 12px 12px rgba(117, 91, 120, 0.822) , 13px 13px rgba(118, 91, 121, 0.824) , 14px 14px rgba(118, 92, 122, 0.826) , 15px 15px rgba(119, 92, 122, 0.828) , 16px 16px rgba(119, 93, 123, 0.83) , 17px 17px rgba(120, 93, 123, 0.832) , 18px 18px rgba(120, 93, 124, 0.834) , 19px 19px rgba(121, 94, 124, 0.836) , 20px 20px rgba(121, 94, 125, 0.838) , 21px 21px rgba(122, 95, 125, 0.84) , 22px 22px rgba(122, 95, 126, 0.842) , 23px 23px rgba(123, 96, 126, 0.844) , 24px 24px rgba(123, 96, 127, 0.846) , 25px 25px rgba(124, 97, 127, 0.848) , 26px 26px rgba(124, 97, 128, 0.85) , 27px 27px rgba(125, 97, 128, 0.852) , 28px 28px rgba(125, 98, 129, 0.854) , 29px 29px rgba(126, 98, 129, 0.856) , 30px 30px rgba(126, 99, 130, 0.858) , 31px 31px rgba(127, 99, 130, 0.86) , 32px 32px rgba(127, 99, 131, 0.862) , 33px 33px rgba(128, 100, 131, 0.864) , 34px 34px rgba(128, 100, 131, 0.866) , 35px 35px rgba(128, 101, 132, 0.868) , 36px 36px rgba(129, 101, 132, 0.87) , 37px 37px rgba(129, 101, 133, 0.872) , 38px 38px rgba(130, 102, 133, 0.874) , 39px 39px rgba(130, 102, 134, 0.876) , 40px 40px rgba(131, 103, 134, 0.878) , 41px 41px rgba(131, 103, 135, 0.88) , 42px 42px rgba(131, 103, 135, 0.882) , 43px 43px rgba(132, 104, 135, 0.884) , 44px 44px rgba(132, 104, 136, 0.886) , 45px 45px rgba(133, 104, 136, 0.888) , 46px 46px rgba(133, 105, 137, 0.89) , 47px 47px rgba(133, 105, 137, 0.892) , 48px 48px rgba(134, 106, 137, 0.894) , 49px 49px rgba(134, 106, 138, 0.896) , 50px 50px rgba(135, 106, 138, 0.898) , 51px 51px rgba(135, 107, 139, 0.9) , 52px 52px rgba(135, 107, 139, 0.902) , 53px 53px rgba(136, 107, 139, 0.904) , 54px 54px rgba(136, 108, 140, 0.906) , 55px 55px rgba(137, 108, 140, 0.908) , 56px 56px rgba(137, 108, 141, 0.91) , 57px 57px rgba(137, 109, 141, 0.912) , 58px 58px rgba(138, 109, 141, 0.914) , 59px 59px rgba(138, 109, 142, 0.916) , 60px 60px rgba(138, 110, 142, 0.918) , 61px 61px rgba(139, 110, 142, 0.92) , 62px 62px rgba(139, 110, 143, 0.922) , 63px 63px rgba(139, 111, 143, 0.924) , 64px 64px rgba(140, 111, 143, 0.926) , 65px 65px rgba(140, 111, 144, 0.928) , 66px 66px rgba(140, 111, 144, 0.93) , 67px 67px rgba(141, 112, 145, 0.932) , 68px 68px rgba(141, 112, 145, 0.934) , 69px 69px rgba(141, 112, 145, 0.936) , 70px 70px rgba(142, 113, 146, 0.938) , 71px 71px rgba(142, 113, 146, 0.94) , 72px 72px rgba(142, 113, 146, 0.942) , 73px 73px rgba(143, 114, 147, 0.944) , 74px 74px rgba(143, 114, 147, 0.946) , 75px 75px rgba(143, 114, 147, 0.948) , 76px 76px rgba(144, 114, 148, 0.95) , 77px 77px rgba(144, 115, 148, 0.952) , 78px 78px rgba(144, 115, 148, 0.954) , 79px 79px rgba(145, 115, 149, 0.956) , 80px 80px rgba(145, 116, 149, 0.958) , 81px 81px rgba(145, 116, 149, 0.96) , 82px 82px rgba(146, 116, 149, 0.962) , 83px 83px rgba(146, 116, 150, 0.964) , 84px 84px rgba(146, 117, 150, 0.966) , 85px 85px rgba(146, 117, 150, 0.968) , 86px 86px rgba(147, 117, 151, 0.97) , 87px 87px rgba(147, 117, 151, 0.972) , 88px 88px rgba(147, 118, 151, 0.974) , 89px 89px rgba(148, 118, 152, 0.976) , 90px 90px rgba(148, 118, 152, 0.978) , 91px 91px rgba(148, 119, 152, 0.98) , 92px 92px rgba(149, 119, 152, 0.982) , 93px 93px rgba(149, 119, 153, 0.984) , 94px 94px rgba(149, 119, 153, 0.986) , 95px 95px rgba(149, 120, 153, 0.988) , 96px 96px rgba(150, 120, 154, 0.99) , 97px 97px rgba(150, 120, 154, 0.992) , 98px 98px rgba(150, 120, 154, 0.994) , 99px 99px rgba(150, 121, 154, 0.996) , 100px 100px rgba(151, 121, 155, 0.998)
}
.card:nth-child(4) .front {
  -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
  transform: rotateY(-15deg);
  -webkit-transform: rotateY(-15deg);
  overflow: auto;
  background: #aa7061;
  border-right: 2px solid rgba(124, 78, 67);
  transition: border-width 0.25s linear;
}
.card:nth-child(4):hover .front {
  border-width: 5px;
}
.card:nth-child(4) .card__name {
  text-shadow:  1px 1px rgba(124, 78, 67, 0.8) , 2px 2px rgba(125, 79, 67, 0.802) , 3px 3px rgba(125, 79, 68, 0.804) , 4px 4px rgba(126, 80, 68, 0.806) , 5px 5px rgba(127, 80, 69, 0.808) , 6px 6px rgba(127, 80, 69, 0.81) , 7px 7px rgba(128, 81, 70, 0.812) , 8px 8px rgba(129, 81, 70, 0.814) , 9px 9px rgba(129, 82, 70, 0.816) , 10px 10px rgba(130, 82, 71, 0.818) , 11px 11px rgba(131, 83, 71, 0.82) , 12px 12px rgba(131, 83, 72, 0.822) , 13px 13px rgba(132, 84, 72, 0.824) , 14px 14px rgba(132, 84, 72, 0.826) , 15px 15px rgba(133, 85, 73, 0.828) , 16px 16px rgba(134, 85, 73, 0.83) , 17px 17px rgba(134, 86, 74, 0.832) , 18px 18px rgba(135, 86, 74, 0.834) , 19px 19px rgba(135, 86, 74, 0.836) , 20px 20px rgba(136, 87, 75, 0.838) , 21px 21px rgba(137, 87, 75, 0.84) , 22px 22px rgba(137, 88, 76, 0.842) , 23px 23px rgba(138, 88, 76, 0.844) , 24px 24px rgba(138, 89, 76, 0.846) , 25px 25px rgba(139, 89, 77, 0.848) , 26px 26px rgba(139, 89, 77, 0.85) , 27px 27px rgba(140, 90, 77, 0.852) , 28px 28px rgba(140, 90, 78, 0.854) , 29px 29px rgba(141, 91, 78, 0.856) , 30px 30px rgba(141, 91, 78, 0.858) , 31px 31px rgba(142, 91, 79, 0.86) , 32px 32px rgba(143, 92, 79, 0.862) , 33px 33px rgba(143, 92, 79, 0.864) , 34px 34px rgba(144, 92, 80, 0.866) , 35px 35px rgba(144, 93, 80, 0.868) , 36px 36px rgba(145, 93, 80, 0.87) , 37px 37px rgba(145, 94, 81, 0.872) , 38px 38px rgba(146, 94, 81, 0.874) , 39px 39px rgba(146, 94, 81, 0.876) , 40px 40px rgba(147, 95, 82, 0.878) , 41px 41px rgba(147, 95, 82, 0.88) , 42px 42px rgba(147, 95, 82, 0.882) , 43px 43px rgba(148, 96, 83, 0.884) , 44px 44px rgba(148, 96, 83, 0.886) , 45px 45px rgba(149, 96, 83, 0.888) , 46px 46px rgba(149, 97, 84, 0.89) , 47px 47px rgba(150, 97, 84, 0.892) , 48px 48px rgba(150, 97, 84, 0.894) , 49px 49px rgba(151, 98, 84, 0.896) , 50px 50px rgba(151, 98, 85, 0.898) , 51px 51px rgba(152, 98, 85, 0.9) , 52px 52px rgba(152, 99, 85, 0.902) , 53px 53px rgba(152, 99, 86, 0.904) , 54px 54px rgba(153, 99, 86, 0.906) , 55px 55px rgba(153, 100, 86, 0.908) , 56px 56px rgba(154, 100, 86, 0.91) , 57px 57px rgba(154, 100, 87, 0.912) , 58px 58px rgba(155, 101, 87, 0.914) , 59px 59px rgba(155, 101, 87, 0.916) , 60px 60px rgba(155, 101, 88, 0.918) , 61px 61px rgba(156, 102, 88, 0.92) , 62px 62px rgba(156, 102, 88, 0.922) , 63px 63px rgba(157, 102, 88, 0.924) , 64px 64px rgba(157, 102, 89, 0.926) , 65px 65px rgba(157, 103, 89, 0.928) , 66px 66px rgba(158, 103, 89, 0.93) , 67px 67px rgba(158, 103, 89, 0.932) , 68px 68px rgba(159, 104, 90, 0.934) , 69px 69px rgba(159, 104, 90, 0.936) , 70px 70px rgba(159, 104, 90, 0.938) , 71px 71px rgba(160, 104, 90, 0.94) , 72px 72px rgba(160, 105, 91, 0.942) , 73px 73px rgba(161, 105, 91, 0.944) , 74px 74px rgba(161, 105, 91, 0.946) , 75px 75px rgba(161, 106, 91, 0.948) , 76px 76px rgba(162, 106, 92, 0.95) , 77px 77px rgba(162, 106, 92, 0.952) , 78px 78px rgba(162, 106, 92, 0.954) , 79px 79px rgba(163, 107, 92, 0.956) , 80px 80px rgba(163, 107, 92, 0.958) , 81px 81px rgba(163, 107, 93, 0.96) , 82px 82px rgba(164, 107, 93, 0.962) , 83px 83px rgba(164, 108, 93, 0.964) , 84px 84px rgba(164, 108, 93, 0.966) , 85px 85px rgba(165, 108, 94, 0.968) , 86px 86px rgba(165, 108, 94, 0.97) , 87px 87px rgba(165, 109, 94, 0.972) , 88px 88px rgba(166, 109, 94, 0.974) , 89px 89px rgba(166, 109, 95, 0.976) , 90px 90px rgba(166, 109, 95, 0.978) , 91px 91px rgba(167, 110, 95, 0.98) , 92px 92px rgba(167, 110, 95, 0.982) , 93px 93px rgba(167, 110, 95, 0.984) , 94px 94px rgba(168, 110, 96, 0.986) , 95px 95px rgba(168, 111, 96, 0.988) , 96px 96px rgba(168, 111, 96, 0.99) , 97px 97px rgba(169, 111, 96, 0.992) , 98px 98px rgba(169, 111, 96, 0.994) , 99px 99px rgba(169, 112, 97, 0.996) , 100px 100px rgba(170, 112, 97, 0.998)
}
.card:nth-child(5)  .front {
  -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
  transform: rotateY(-15deg);
  -webkit-transform: rotateY(-15deg);
  overflow: auto;
  background: #505050;
  border-right: 2px solid rgba(42, 42, 42);
  transition: border-width 0.25s linear;
}
.card:nth-child(5):hover .front {
  border-width: 5px;
}
.card:nth-child(5) .card__name {
  text-shadow:  1px 1px rgba(42, 42, 42, 0.8) , 2px 2px rgba(43, 43, 43, 0.802) , 3px 3px rgba(43, 43, 43, 0.804) , 4px 4px rgba(44, 44, 44, 0.806) , 5px 5px rgba(44, 44, 44, 0.808) , 6px 6px rgba(45, 45, 45, 0.81) , 7px 7px rgba(45, 45, 45, 0.812) , 8px 8px rgba(46, 46, 46, 0.814) , 9px 9px rgba(46, 46, 46, 0.816) , 10px 10px rgba(47, 47, 47, 0.818) , 11px 11px rgba(47, 47, 47, 0.82) , 12px 12px rgba(48, 48, 48, 0.822) , 13px 13px rgba(48, 48, 48, 0.824) , 14px 14px rgba(49, 49, 49, 0.826) , 15px 15px rgba(49, 49, 49, 0.828) , 16px 16px rgba(50, 50, 50, 0.83) , 17px 17px rgba(50, 50, 50, 0.832) , 18px 18px rgba(51, 51, 51, 0.834) , 19px 19px rgba(51, 51, 51, 0.836) , 20px 20px rgba(52, 52, 52, 0.838) , 21px 21px rgba(52, 52, 52, 0.84) , 22px 22px rgba(53, 53, 53, 0.842) , 23px 23px rgba(53, 53, 53, 0.844) , 24px 24px rgba(54, 54, 54, 0.846) , 25px 25px rgba(54, 54, 54, 0.848) , 26px 26px rgba(55, 55, 55, 0.85) , 27px 27px rgba(55, 55, 55, 0.852) , 28px 28px rgba(56, 56, 56, 0.854) , 29px 29px rgba(56, 56, 56, 0.856) , 30px 30px rgba(56, 56, 56, 0.858) , 31px 31px rgba(57, 57, 57, 0.86) , 32px 32px rgba(57, 57, 57, 0.862) , 33px 33px rgba(58, 58, 58, 0.864) , 34px 34px rgba(58, 58, 58, 0.866) , 35px 35px rgba(59, 59, 59, 0.868) , 36px 36px rgba(59, 59, 59, 0.87) , 37px 37px rgba(59, 59, 59, 0.872) , 38px 38px rgba(60, 60, 60, 0.874) , 39px 39px rgba(60, 60, 60, 0.876) , 40px 40px rgba(61, 61, 61, 0.878) , 41px 41px rgba(61, 61, 61, 0.88) , 42px 42px rgba(61, 61, 61, 0.882) , 43px 43px rgba(62, 62, 62, 0.884) , 44px 44px rgba(62, 62, 62, 0.886) , 45px 45px rgba(63, 63, 63, 0.888) , 46px 46px rgba(63, 63, 63, 0.89) , 47px 47px rgba(63, 63, 63, 0.892) , 48px 48px rgba(64, 64, 64, 0.894) , 49px 49px rgba(64, 64, 64, 0.896) , 50px 50px rgba(64, 64, 64, 0.898) , 51px 51px rgba(65, 65, 65, 0.9) , 52px 52px rgba(65, 65, 65, 0.902) , 53px 53px rgba(66, 66, 66, 0.904) , 54px 54px rgba(66, 66, 66, 0.906) , 55px 55px rgba(66, 66, 66, 0.908) , 56px 56px rgba(67, 67, 67, 0.91) , 57px 57px rgba(67, 67, 67, 0.912) , 58px 58px rgba(67, 67, 67, 0.914) , 59px 59px rgba(68, 68, 68, 0.916) , 60px 60px rgba(68, 68, 68, 0.918) , 61px 61px rgba(68, 68, 68, 0.92) , 62px 62px rgba(69, 69, 69, 0.922) , 63px 63px rgba(69, 69, 69, 0.924) , 64px 64px rgba(69, 69, 69, 0.926) , 65px 65px rgba(70, 70, 70, 0.928) , 66px 66px rgba(70, 70, 70, 0.93) , 67px 67px rgba(70, 70, 70, 0.932) , 68px 68px rgba(71, 71, 71, 0.934) , 69px 69px rgba(71, 71, 71, 0.936) , 70px 70px rgba(71, 71, 71, 0.938) , 71px 71px rgba(72, 72, 72, 0.94) , 72px 72px rgba(72, 72, 72, 0.942) , 73px 73px rgba(72, 72, 72, 0.944) , 74px 74px rgba(72, 72, 72, 0.946) , 75px 75px rgba(73, 73, 73, 0.948) , 76px 76px rgba(73, 73, 73, 0.95) , 77px 77px rgba(73, 73, 73, 0.952) , 78px 78px rgba(74, 74, 74, 0.954) , 79px 79px rgba(74, 74, 74, 0.956) , 80px 80px rgba(74, 74, 74, 0.958) , 81px 81px rgba(75, 75, 75, 0.96) , 82px 82px rgba(75, 75, 75, 0.962) , 83px 83px rgba(75, 75, 75, 0.964) , 84px 84px rgba(75, 75, 75, 0.966) , 85px 85px rgba(76, 76, 76, 0.968) , 86px 86px rgba(76, 76, 76, 0.97) , 87px 87px rgba(76, 76, 76, 0.972) , 88px 88px rgba(77, 77, 77, 0.974) , 89px 89px rgba(77, 77, 77, 0.976) , 90px 90px rgba(77, 77, 77, 0.978) , 91px 91px rgba(77, 77, 77, 0.98) , 92px 92px rgba(78, 78, 78, 0.982) , 93px 93px rgba(78, 78, 78, 0.984) , 94px 94px rgba(78, 78, 78, 0.986) , 95px 95px rgba(78, 78, 78, 0.988) , 96px 96px rgba(79, 79, 79, 0.99) , 97px 97px rgba(79, 79, 79, 0.992) , 98px 98px rgba(79, 79, 79, 0.994) , 99px 99px rgba(79, 79, 79, 0.996) , 100px 100px rgba(80, 80, 80, 0.998)
}

.card:nth-child(6) .front {
  -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
  transform: rotateY(-15deg);
  -webkit-transform: rotateY(-15deg);
  overflow: auto;
  background: #8c7713;
  border-right: 2px solid rgba(73, 62, 10);
  transition: border-width 0.25s linear;
}
.card:nth-child(6):hover .front {
  border-width: 5px;
}
.card:nth-child(6) .card__name {
  text-shadow:  1px 1px rgba(73, 62, 10, 0.8) , 2px 2px rgba(74, 63, 10, 0.802) , 3px 3px rgba(75, 64, 10, 0.804) , 4px 4px rgba(76, 65, 10, 0.806) , 5px 5px rgba(77, 65, 11, 0.808) , 6px 6px rgba(78, 66, 11, 0.81) , 7px 7px rgba(79, 67, 11, 0.812) , 8px 8px rgba(80, 68, 11, 0.814) , 9px 9px rgba(81, 69, 11, 0.816) , 10px 10px rgba(82, 69, 11, 0.818) , 11px 11px rgba(83, 70, 11, 0.82) , 12px 12px rgba(83, 71, 11, 0.822) , 13px 13px rgba(84, 72, 12, 0.824) , 14px 14px rgba(85, 72, 12, 0.826) , 15px 15px rgba(86, 73, 12, 0.828) , 16px 16px rgba(87, 74, 12, 0.83) , 17px 17px rgba(88, 75, 12, 0.832) , 18px 18px rgba(89, 75, 12, 0.834) , 19px 19px rgba(90, 76, 12, 0.836) , 20px 20px rgba(90, 77, 12, 0.838) , 21px 21px rgba(91, 78, 12, 0.84) , 22px 22px rgba(92, 78, 13, 0.842) , 23px 23px rgba(93, 79, 13, 0.844) , 24px 24px rgba(94, 80, 13, 0.846) , 25px 25px rgba(95, 80, 13, 0.848) , 26px 26px rgba(95, 81, 13, 0.85) , 27px 27px rgba(96, 82, 13, 0.852) , 28px 28px rgba(97, 82, 13, 0.854) , 29px 29px rgba(98, 83, 13, 0.856) , 30px 30px rgba(98, 84, 13, 0.858) , 31px 31px rgba(99, 84, 14, 0.86) , 32px 32px rgba(100, 85, 14, 0.862) , 33px 33px rgba(101, 86, 14, 0.864) , 34px 34px rgba(101, 86, 14, 0.866) , 35px 35px rgba(102, 87, 14, 0.868) , 36px 36px rgba(103, 87, 14, 0.87) , 37px 37px rgba(104, 88, 14, 0.872) , 38px 38px rgba(104, 89, 14, 0.874) , 39px 39px rgba(105, 89, 14, 0.876) , 40px 40px rgba(106, 90, 14, 0.878) , 41px 41px rgba(107, 91, 15, 0.88) , 42px 42px rgba(107, 91, 15, 0.882) , 43px 43px rgba(108, 92, 15, 0.884) , 44px 44px rgba(109, 92, 15, 0.886) , 45px 45px rgba(109, 93, 15, 0.888) , 46px 46px rgba(110, 93, 15, 0.89) , 47px 47px rgba(111, 94, 15, 0.892) , 48px 48px rgba(111, 95, 15, 0.894) , 49px 49px rgba(112, 95, 15, 0.896) , 50px 50px rgba(113, 96, 15, 0.898) , 51px 51px rgba(113, 96, 15, 0.9) , 52px 52px rgba(114, 97, 15, 0.902) , 53px 53px rgba(114, 97, 16, 0.904) , 54px 54px rgba(115, 98, 16, 0.906) , 55px 55px rgba(116, 98, 16, 0.908) , 56px 56px rgba(116, 99, 16, 0.91) , 57px 57px rgba(117, 99, 16, 0.912) , 58px 58px rgba(118, 100, 16, 0.914) , 59px 59px rgba(118, 100, 16, 0.916) , 60px 60px rgba(119, 101, 16, 0.918) , 61px 61px rgba(119, 101, 16, 0.92) , 62px 62px rgba(120, 102, 16, 0.922) , 63px 63px rgba(121, 102, 16, 0.924) , 64px 64px rgba(121, 103, 16, 0.926) , 65px 65px rgba(122, 103, 17, 0.928) , 66px 66px rgba(122, 104, 17, 0.93) , 67px 67px rgba(123, 104, 17, 0.932) , 68px 68px rgba(123, 105, 17, 0.934) , 69px 69px rgba(124, 105, 17, 0.936) , 70px 70px rgba(125, 106, 17, 0.938) , 71px 71px rgba(125, 106, 17, 0.94) , 72px 72px rgba(126, 107, 17, 0.942) , 73px 73px rgba(126, 107, 17, 0.944) , 74px 74px rgba(127, 108, 17, 0.946) , 75px 75px rgba(127, 108, 17, 0.948) , 76px 76px rgba(128, 109, 17, 0.95) , 77px 77px rgba(128, 109, 17, 0.952) , 78px 78px rgba(129, 110, 18, 0.954) , 79px 79px rgba(129, 110, 18, 0.956) , 80px 80px rgba(130, 110, 18, 0.958) , 81px 81px rgba(130, 111, 18, 0.96) , 82px 82px rgba(131, 111, 18, 0.962) , 83px 83px rgba(131, 112, 18, 0.964) , 84px 84px rgba(132, 112, 18, 0.966) , 85px 85px rgba(132, 113, 18, 0.968) , 86px 86px rgba(133, 113, 18, 0.97) , 87px 87px rgba(133, 113, 18, 0.972) , 88px 88px rgba(134, 114, 18, 0.974) , 89px 89px rgba(134, 114, 18, 0.976) , 90px 90px rgba(135, 115, 18, 0.978) , 91px 91px rgba(135, 115, 18, 0.98) , 92px 92px rgba(136, 115, 18, 0.982) , 93px 93px rgba(136, 116, 19, 0.984) , 94px 94px rgba(137, 116, 19, 0.986) , 95px 95px rgba(137, 117, 19, 0.988) , 96px 96px rgba(138, 117, 19, 0.99) , 97px 97px rgba(138, 117, 19, 0.992) , 98px 98px rgba(139, 118, 19, 0.994) , 99px 99px rgba(139, 118, 19, 0.996) , 100px 100px rgba(140, 119, 19, 0.998);
}
.card:last-child {
  margin-right: 0;
}

@media (min-width: 701px ) and (max-width: 1100px) {
  .card[style] {
    width: 46% !important;
    height: 365px !important;
    display: flex;
    flex: auto;
    margin-left: 2%;
    margin-right: 2%;
}
  .card .front,
  .card .back {
    height: 365px;
  }
}

@media (max-width: 700px) {
  .card[style] {
    width: 100% !important;
    height: 365px !important;
    margin-right: 0;
    float: none;
  }
  .card .front,
  .card .back {
    height: 365px;
  }
}

</style>
