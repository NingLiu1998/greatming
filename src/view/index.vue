<template>
    <div class="index">
        <div class="six">
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="吏部" />
                <van-grid-item icon="photo-o" text="礼部" />
                <van-grid-item icon="photo-o" text="兵部" />
            </van-grid>
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="刑部" />
                <van-grid-item icon="photo-o" text="户部" />
                <van-grid-item icon="photo-o" text="工部" />
            </van-grid>
        </div>
        <div class="card">


            <div class="loginPanel">
                <van-cell-group inset>
                    <div class="title">
                        <h5>登录</h5>
                    </div>
                    <!-- 输入任意文本 -->
                    <van-field v-model="loginDData.name" label="用户名" />
                    <!-- 输入密码 -->
                    <van-field v-model="loginDData.pwd" type="password" label="密码" />
                    <div class="forget">
                        <div>忘记密码？</div>
                        <div>加入大明</div>
                    </div>
                </van-cell-group>
            </div>

        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, reactive } from 'vue';

const loginStatus = ref(false);
const loginDData = reactive({
    name: "",
    pwd: ""
});

onMounted(() => {

    localStorage.getItem("uInfo");

})

console.log("当前请求api：", import.meta.env.VITE_BASE_URL);
</script>
<style scoped lang='scss'>
.index {
    .card {
        margin: 1.5vh;

        .title {
            text-align: center;
        }

        .forget {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10vh;

            div {
                font-size: 1.5vh;
                color: #ccc;
                padding: 1.5vh;
                cursor: pointer;
            }
        }
    }
}
</style>