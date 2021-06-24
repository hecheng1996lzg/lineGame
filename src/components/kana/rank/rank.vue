<template>
  <blur :blurSrc="blurSrc" :blurValue="30">
    <div class="rank">
      <h2>排行榜</h2>
      <table class="rank-container">
        <thead>
        <tr>
          <th width="16%">名次</th>
          <th>昵称</th>
          <th>分数</th>
          <th>时间</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, key) in ranks" :key="key" :class="{active:key===playerId}">
          <td><span>{{ put0(item.place) }}</span></td>
          <td><span>{{item.name}}</span></td>
          <td><span>{{item.score}}</span></td>
          <td><span>{{item.time}}</span></td>
        </tr>
        </tbody>
      </table>
    </div>
  </blur>
</template>

<script>
  import Blur from '../../blur/blur';

  export default {
    name: "rank",
    props: {
      blurSrc: {
        type: String
      },
      score: {
        type: Number,
      },
      time: {
        type: Number,
      }
    },
    data() {
      return {
        ranksTemplate: [
          {
            name: 'kiryuu',
            score: 330,
            time: 363
          },
          {
            name: 'akiyama',
            score: 300,
            time: 396
          },
          {
            name: 'kasei',
            score: 300,
            time: 600
          },
        ],
        ranks: [],
        player: null,
        playerId: null,
      }
    },
    components: {
      Blur
    },
    mounted() {
      let user = JSON.parse(localStorage.getItem('nihongo'));
      this.ranks = this.getRankStorage();
      this.player = {
        name: user.name,
        score: this.score,
        time: this.time
      };

      let i = 0;
      for (i; i < this.ranks.length; i++) {
        let rank = this.ranks[i];
        if (this.player.score > rank.score || (this.player.score === rank.score && this.player.time <= rank.time)) {
          this.playerId = i;
          break;
        }
      }
      if (this.playerId === null) this.playerId = i;

      this.ranks.splice(this.playerId, 0, this.player);

      this.setRankStorage();

      let position = 0;
      this.ranks.forEach((v, k) => {
        let pre = null;
        if (k > 0) {
          pre = this.ranks[k - 1];
        }
        if (pre) {
          if (pre.score > v.score || (pre.score === v.score && pre.time < v.time)) {
            position++;
          }
        } else {
          position++;
        }

        this.ranks[k].place = position;
      });

      this.$emit('gameInit');
    },
    computed: {
      put0() {
        return (num) => {
          return num < 10 ? '0' + num : num;
        }
      }
    },
    methods: {
      getRankStorage() {
        let kanaRankStorage = JSON.parse(localStorage.getItem('kana_rank_storage'));
        kanaRankStorage = kanaRankStorage ? kanaRankStorage : this.ranksTemplate;
        return kanaRankStorage
      },
      setRankStorage() {
        localStorage.setItem('kana_rank_storage', JSON.stringify(this.ranks));
      }
    }

  }
</script>

<style scoped>
  .rank {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
  }

  h2 {
    text-align: center;
    color: #333;
  }

  .rank-container {
    color: #333;
  }

  .rank-container th {
    font-weight: initial;
    padding-bottom: 3px;
  }

  .rank-container > thead > tr > th:nth-of-type(n+2) {
    text-align: left;
    text-indent: 2ch;
  }

  .rank-container > tbody > tr > td {
    padding: 5px 0 3px;
  }

  .rank-container > tbody > tr > td:nth-of-type(1) {
    text-align: center;
  }

  .rank-container > tbody > tr > td:nth-of-type(n+2) {
    text-indent: 2ch;
  }

  .rank-container {
    border-collapse: collapse;
  }

  .rank-container > thead > tr {
    border-bottom: 1px solid rgba(255, 255, 255, .8);
  }

  .rank-container > tbody > tr.active {
    background: rgba(255, 255, 255, .3);
  }

</style>