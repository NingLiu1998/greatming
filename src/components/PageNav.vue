<template>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>
  


<script lang="ts" scope>
import { defineProps } from 'vue';

const title = () => {
    history.back;
}

defineProps<{
    title: string
}>()

</script>
  