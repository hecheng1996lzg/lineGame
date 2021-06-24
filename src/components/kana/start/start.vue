<template>
  <div class="start">
    <transition-group v-if="countDown!==0" name="cell" tag="ul" class="container">
      <li class="item" v-for="word in words" :key="word.index">
        <div class="item-content" @setBlurImg="setBlurImg" :blur-src="blurSrc" ref="blur" :bR="'0px'" :bS="'none'"
             :blurValue="50">
          <span>{{word.text}}</span>
        </div>
      </li>
    </transition-group>
    <ul v-else class="container">
      <li v-for="word in words" :key="word.index" @click="itemSelect(word)" class="item"
          :class="{active:word.state===2,complete:word.state===3}">
        <Blur class="item-content" @setBlurImg="setBlurImg" :blur-src="blurSrc" ref="blur" :bR="'0px'" :bS="'none'"
              :blurValue="50">
          <span>{{word.text}}</span>
        </Blur>
      </li>
    </ul>
    <transition name="countDown">
      <div class="countDown" v-if="countDown">
        <h1>{{countDown}}</h1>
      </div>
    </transition>
  </div>
</template>

<script>
  import Blur from '../../blur/blur';
  // import {getKanaList} from '../../../api/kana';

  export default {
    name: "start",
    props: {
      blurSrc: {
        type: String
      },
      model1: {
        type: String
      },
      model2: {
        type: String
      }
    },
    data() {
      return {
        kanas: [],
        keys: ['hiragana', 'katakana', 'romaji'],
        words: [],
        blurFlag: false,
        countDown: 3,
        preItem: false,
      }
    },
    mounted() {
      this.$emit('gameInit');
      this.initKanas();
      this.countDownStart();
    },
    methods: {
      initKanas() {
        this.kanas = [
          {
            "id": 1,
            "katakana": "ア",
            "hiragana": "あ",
            "romaji": "a"
          },
          {
            "id": 2,
            "katakana": "イ",
            "hiragana": "い",
            "romaji": "i"
          },
          {
            "id": 3,
            "katakana": "ウ",
            "hiragana": "う",
            "romaji": "u"
          },
          {
            "id": 4,
            "katakana": "エ",
            "hiragana": "え",
            "romaji": "e"
          },
          {
            "id": 5,
            "katakana": "オ",
            "hiragana": "お",
            "romaji": "o"
          },
          {
            "id": 6,
            "katakana": "カ",
            "hiragana": "か",
            "romaji": "ka"
          },
          {
            "id": 7,
            "katakana": "キ",
            "hiragana": "き",
            "romaji": "ki"
          },
          {
            "id": 8,
            "katakana": "ク",
            "hiragana": "く",
            "romaji": "ku"
          },
          {
            "id": 9,
            "katakana": "ケ",
            "hiragana": "け",
            "romaji": "ke"
          },
          {
            "id": 10,
            "katakana": "コ",
            "hiragana": "こ",
            "romaji": "ko"
          },
          {
            "id": 11,
            "katakana": "サ",
            "hiragana": "さ",
            "romaji": "sa"
          },
          {
            "id": 12,
            "katakana": "シ",
            "hiragana": "し",
            "romaji": "shi"
          },
          {
            "id": 13,
            "katakana": "ス",
            "hiragana": "す",
            "romaji": "su"
          },
          {
            "id": 14,
            "katakana": "セ",
            "hiragana": "せ",
            "romaji": "se"
          },
          {
            "id": 15,
            "katakana": "ソ",
            "hiragana": "そ",
            "romaji": "so"
          },
          {
            "id": 16,
            "katakana": "タ",
            "hiragana": "た",
            "romaji": "ta"
          },
          {
            "id": 17,
            "katakana": "チ",
            "hiragana": "ち",
            "romaji": "chi"
          },
          {
            "id": 18,
            "katakana": "ツ",
            "hiragana": "つ",
            "romaji": "tsu"
          },
          {
            "id": 19,
            "katakana": "テ",
            "hiragana": "て",
            "romaji": "te"
          },
          {
            "id": 20,
            "katakana": "ト",
            "hiragana": "と",
            "romaji": "to"
          },
          {
            "id": 21,
            "katakana": "ナ",
            "hiragana": "な",
            "romaji": "na"
          },
          {
            "id": 22,
            "katakana": "ニ",
            "hiragana": "に",
            "romaji": "ni"
          },
          {
            "id": 23,
            "katakana": "ヌ",
            "hiragana": "ぬ",
            "romaji": "nu"
          },
          {
            "id": 24,
            "katakana": "ネ",
            "hiragana": "ね",
            "romaji": "ne"
          },
          {
            "id": 25,
            "katakana": "ノ",
            "hiragana": "の",
            "romaji": "no"
          },
          {
            "id": 26,
            "katakana": "ハ",
            "hiragana": "は",
            "romaji": "ha"
          },
          {
            "id": 27,
            "katakana": "ヒ",
            "hiragana": "ひ",
            "romaji": "hi"
          },
          {
            "id": 28,
            "katakana": "フ",
            "hiragana": "ふ",
            "romaji": "fu"
          },
          {
            "id": 29,
            "katakana": "ヘ",
            "hiragana": "へ",
            "romaji": "he"
          },
          {
            "id": 30,
            "katakana": "ホ",
            "hiragana": "ほ",
            "romaji": "ho"
          },
          {
            "id": 31,
            "katakana": "マ",
            "hiragana": "ま",
            "romaji": "ma"
          },
          {
            "id": 32,
            "katakana": "ミ",
            "hiragana": "み",
            "romaji": "mi"
          },
          {
            "id": 33,
            "katakana": "ム",
            "hiragana": "む",
            "romaji": "mu"
          },
          {
            "id": 34,
            "katakana": "メ",
            "hiragana": "め",
            "romaji": "me"
          },
          {
            "id": 35,
            "katakana": "モ",
            "hiragana": "も",
            "romaji": "mo"
          },
          {
            "id": 36,
            "katakana": "ヤ",
            "hiragana": "や",
            "romaji": "ya"
          },
          {
            "id": 37,
            "katakana": "ユ",
            "hiragana": "ゆ",
            "romaji": "yu"
          },
          {
            "id": 38,
            "katakana": "ヨ",
            "hiragana": "よ",
            "romaji": "yo"
          },
          {
            "id": 39,
            "katakana": "ラ",
            "hiragana": "ら",
            "romaji": "ra"
          },
          {
            "id": 40,
            "katakana": "リ",
            "hiragana": "り",
            "romaji": "ri"
          },
          {
            "id": 41,
            "katakana": "ル",
            "hiragana": "る",
            "romaji": "ru"
          },
          {
            "id": 42,
            "katakana": "レ",
            "hiragana": "れ",
            "romaji": "re"
          },
          {
            "id": 43,
            "katakana": "ロ",
            "hiragana": "ろ",
            "romaji": "ro"
          },
          {
            "id": 44,
            "katakana": "ワ",
            "hiragana": "わ",
            "romaji": "wa"
          },
          {
            "id": 45,
            "katakana": "ヲ",
            "hiragana": "を",
            "romaji": "o"
          },
          {
            "id": 46,
            "katakana": "ン",
            "hiragana": "ん",
            "romaji": "n"
          }
        ];
        this.initWords();
      },
      initWords() {
        let model1 = this.keys[this.model1];
        let model2 = this.keys[this.model2];
        let randomIdRemoveToKana = Math.floor(Math.random() * this.kanas.length);
        this.kanas.forEach((kana, index) => {
          if (index === randomIdRemoveToKana) return;
          let word = {
            index: index * 2 - 1,
            id: kana.id,
            text: kana[model1],
            state: 1,
          };
          this.words.push(word);
          word = {
            index: index * 2,
            id: kana.id,
            text: kana[model2],
            state: 1,
          };
          this.words.push(word);
        });
      },
      setBlurImg(base64) {
        this.$refs.blur.forEach((item) => {
          item.setBase64(base64);
        })
      },
      countDownStart() {
        let timer = window.setInterval(() => {
          this.countDown--;
          if (this.countDown > 0) this.words = this.shuffle(this.words);
          if (this.countDown === 0) this.gameStart(timer);
        }, 1000);
      },
      gameStart(timer) {
        window.clearInterval(timer);
        this.$emit('gameStart');
      },
      shuffle(v) {
        for (let j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x) ;
        return v;
      },
      itemSelect(item) {
        if (item.state === 3) return;
        if (this.preItem) {
          if (this.preItem.id === item.id && this.preItem.index !== item.index) {
            this.preItem.state = 3;
            item.state = 3;
            this.$emit('gameItemComplete', this.isGameOver());
          } else {
            this.preItem.state = 1;
          }
          this.preItem = false;
        } else {
          item.state = 2;
          this.preItem = item;
        }
      },
      isGameOver() {
        return this.words.filter((v) => {
          return v.state !== 3;
        }).length === 0;
      }
    },
    components: {
      Blur
    }

  }
</script>

<style scoped>
  .start {
    position: relative;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    position: relative;
    width: 11%;
    padding-bottom: 11%;
    height: 0;
    background: rgba(255, 255, 255, .8);

    -webkit-touch-callout: none; /* iOS Safari */

    -webkit-user-select: none; /* Chrome/Safari/Opera */

    -khtml-user-select: none; /* Konqueror */

    -moz-user-select: none; /* Firefox */

    -ms-user-select: none; /* Internet Explorer/Edge */

    user-select: none; /* Non-prefixed version, currently

not supported by any browser */


  }
  .item:hover{
    cursor: pointer;
  }

  .item > .item-content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .countDown {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    color: #fff;
    background: rgba(0, 0, 0, .8);
  }

  .active.item {
    background: rgba(0, 0, 0, .8);
  }

  .active.item > .item-content {
    opacity: 0.8;
  }

  .complete.item {
    opacity: 0;
  }

  .cell-move {
    transition: transform 1s;
  }

  .countDown-enter-active, .countDown-leave-active {
    transition: opacity .5s;
  }

  .countDown-enter, .countDown-leave-to /* .countDown-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>