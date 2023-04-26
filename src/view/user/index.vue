<template>
  <div>
    <img class="user-poster" src="http://cdn2.xintianyuehui.cn/cur/tylogo.webp" />
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        生涯
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        军营
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        个人设置
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        其他游戏
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="军饷订单" is-link />
      <van-cell icon="records" title="收货地址" is-link to="/address" />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的军饷" is-link />
      <van-cell icon="gold-coin-o" title="出勤记录" is-link />
      <van-cell icon="gift-o" title="获奖记录" is-link />
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
