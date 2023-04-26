<template>
     <van-nav-bar title="大明军团" />
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
       
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, reactive } from 'vue';




onMounted(() => {

    localStorage.getItem("uInfo");

})

console.log("当前请求api：", import.meta.env.VITE_BASE_URL);
</script>
