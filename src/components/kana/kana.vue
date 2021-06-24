<template>
  <div id="kana" class="blur-bg">
    <blur id="blur" :blurSrc="blurSrc" :bR="'0px'" :blurValue="9" :bS="'none'">
      <ul class="info">
        <li class="info-circle bg-color-red">
          <h2>{{gameTime}}s</h2>
          <span>时间</span>
        </li>
        <li class="info-circle bg-color-blue">
          <h2>{{gameScore}}</h2>
          <span>分数</span>
        </li>
        <li class="info-circle bg-color-green">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-circle" width="84" height="84">
            <circle class="circle"  cx="42" cy="42" r="41" style="position: absolute"/>
            <circle class="circle" :class="{start:gameXAnState===1,restart:gameXAnState===2}" cx="42" cy="42" r="41"
                    stroke="rgb(51, 210, 145)" stroke-linecap="round"
                    stroke-width="2" fill="rgba(0,0,0,0)" transform="rotate(-90 42 42)"/>
          </svg>
          <h2>{{gameX}}x</h2>
          <span>倍率</span>
        </li>
      </ul>
    </blur>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view :blurSrc="blurSrc" class="main-content" @gameStart="gameStart"
                     @gameItemComplete="gameItemComplete" @gameInit="gameInit"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import blurSrc from '../../assets/images/ero1.jpg';
  import Blur from '.././blur/blur';

  export default {
    name: "kana",
    data() {
      return {
        blurSrc,
        gameTimer: null,
        gameTime: 0,
        gameScore: 0,
        gameX: 1,
        gameXPrevTimer: null,
        gameXAnState: 0           // 连击倒计时动画
      }
    },
    computed: {
      itemScore() {
        return 10 * this.gameX;
      }
    },
    methods: {
      gameInit(){
        window.clearInterval(this.gameTimer);
        window.clearInterval(this.gameXPrevTimer);
        this.gameTime = 0;
        this.gameScore = 0;
        this.gameX = 1;
        this.gameXAnState = 0;
        this.gameTimer = null;
        this.gameXPrevTimer = null;
      },
      gameStart() {
        this.gameInit();
        this.gameTimer = window.setInterval(() => {
          this.gameTime++;
        }, 1000);
      },
      gameItemComplete(gameState) {
        this.gameScore += this.itemScore;

        this.gameX += 0.1;
        this.gameX = this.gameX.toFixed(1) - 0;
        window.clearTimeout(this.gameXPrevTimer);
        this.gameXPrevTimer = window.setTimeout(() => {
          this.gameX = 1;
        }, 10000);
        this.gameXAnState = this.gameXAnState === 1 ? 2 : 1;
        if(gameState){
          this.gameScore = parseInt(this.gameScore);
          this.gameTime = parseInt(this.gameTime);
          this.$router.push({
            name: 'rank',
            params: {score: this.gameScore, time: this.gameTime}
          });
        }
      }
    },
    components: {
      Blur
    }
  }
</script>

<style scoped>
  #kana {
    flex: 1;
    background-image: url("../../assets/images/ero1.jpg");
  }

  #blur {
    box-shadow: none;
  }

  .info {
    display: flex;
    justify-content: center;
    padding: 10px;
    background: rgba(255, 255, 255, .3);
  }

  .info-circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin: 6px;
    border: 2px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    text-align: center;
  }

  .info-circle.bg-color-green {
    width: 84px;
    height: 84px;
    border: none;
  }

  .info-circle > h2 {
    margin-bottom: 3px;
    color: #fff;
  }

  .info-circle > span {
    width: 100%;
    background: white;
  }

  .info-circle:nth-of-type(1) > span {
    color: rgb(225, 20, 127);
  }

  .info-circle:nth-of-type(2) > span {
    color: rgb(2, 166, 288);
  }

  .info-circle:nth-of-type(3) > span {
    color: rgb(51, 210, 145);
  }

  .svg-circle {
    position: absolute;
  }

  .main {
    margin: 10px;
  }

  .fade-enter-to, .fade-leave {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateY(-20px) scale(.95);
    opacity: 0;
  }

  @keyframes start {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 257.48;
    }
  }

  @keyframes restart {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 257.48;
    }
  }

  .circle {
    stroke: rgba(255, 255, 2555, 1);
    stroke-width: 2;
    fill: none;
    stroke-dasharray: 257.48;
    stroke-dashoffset: 0;
  }

  .circle.start {
    stroke: rgba(30, 117, 81, 0.5);
    animation: start 10s linear;
    animation-fill-mode: forwards;
  }

  .circle.restart {
    stroke: rgba(30, 117, 81, 0.5);
    animation: restart 10s linear;
    animation-fill-mode: forwards;
  }
</style>