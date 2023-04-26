<template>
    <van-address-edit :area-list="areaList" show-delete show-set-default :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave" @delete="onDelete" />
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue'


//文档：https://vant-contrib.gitee.io/vant/#/zh-CN/address-edit
const areaList = reactive([]);

const onSave = () => {

    console.log(areaList);
}
const onDelete = () => {

}





onBeforeMount(() => {
    console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    console.log('3.-组件挂载到页面之后执行-------onMounted')
})

</script>
<style scoped lang='less'></style>