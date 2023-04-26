<template>
    <van-address-list v-model="chosenAddressId" :list="list" disabled-text="以下地址超出配送范围" default-tag-text="默认" @add="onAdd"
        @edit="onEdit" />
</template>

<script lang='ts' setup>
import { reactive, toRefs, onBeforeMount, onMounted,ref } from 'vue'

const chosenAddressId = ref('1');
const list = reactive([
    {
        id: '1',
        name: '正德',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
    },
    {
        id: '2',
        name: 'CTU',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
    },
]);

const onAdd = () => {

};

const onEdit = (item: { id: string, name: string, tel: string, address: string, isDefault?: boolean }, index: number) => {
    console.log(item);
};

console.log('1-开始创建组件-setup')
const data = reactive({})
onBeforeMount(() => {
    console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    console.log('3.-组件挂载到页面之后执行-------onMounted')
})


</script>
<style scoped lang='less'></style>