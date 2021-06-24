<template>
  <blur :blurSrc="blurSrc" :blurValue="30">
    <div class="welcome">
      <h2>选择关联</h2>
      <ul class="type-select">
        <li :class="{active:modelActive(0)}" @click="()=>{this.models = [0,1]}">
          <div class="type-select-item">
            <div class="check">
              <span class="iconfont icon-tianjiachenggong"></span>
            </div>
            <div class="content">
              平假名
              <span class="iconfont icon-zhihuan"></span>
              片假名
            </div>
          </div>
        </li>
        <li :class="{active:modelActive(1)}" @click="()=>{this.models = [1,2]}">
          <div class="type-select-item">
            <div class="check">
              <span class="iconfont icon-tianjiachenggong"></span>
            </div>
            <div class="content">
              片假名
              <span class="iconfont icon-zhihuan"></span>
              罗马音
            </div>
          </div>
        </li>
        <li :class="{active:modelActive(2)}" @click="()=>{this.models = [2,0]}">
          <div class="type-select-item">
            <div class="check">
              <span class="iconfont icon-tianjiachenggong"></span>
            </div>
            <div class="content">
              罗马音
              <span class="iconfont icon-zhihuan"></span>
              平假名
            </div>
          </div>
        </li>
      </ul>
      <button class="lg" @click="start">开始游戏</button>
    </div>
  </blur>
</template>

<script>
  import Blur from '../../blur/blur';

  export default {
    name: "welcome",
    props: {
      blurSrc: {
        type: String
      }
    },
    data() {
      return {
        models: [0, 1]  //平假名及片假名
      }
    },
    computed: {
      modelActive() {
        return (i) => {
          return this.models[0] === i;
        }
      }
    },
    methods: {
      start() {
        this.$router.push({
          name: 'start',
          params: {model1: this.models[0].toString(), model2: this.models[1].toString()}
        });
      }
    },
    mounted(){
      this.$emit('gameInit');
    },
    components: {
      Blur
    }
  }
</script>

<style scoped>
  .welcome {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
  }

  h2 {
    text-align: center;
    color: #fff;
  }

  .type-select > li {
    border-radius: 5px;
  }

  .type-select-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding-left: 20px;
    height: 60px;
    color: #fff;
    border-radius: 5px;
    background: rgba(0, 0, 0, .1);
  }

  .check > span {
    font-size: 24px;
    opacity: 0;
  }

  .content {
    margin-left: 20px;
    font-size: 16px;
  }

  .type-select > li.active .check > span {
    opacity: 1;
  }

  .type-select > li.active {
    background: rgba(0, 0, 0, .5);
  }
</style>