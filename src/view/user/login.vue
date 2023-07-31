<template>
    <van-nav-bar title="登录" />
    <div class="gmlogin">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码，忘记了就找正德' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '@/service/http';
import type { reqRegisterUserType } from '@/service/types';
const router = useRouter();

interface FormValues {
    username: string;
    password: string;
}

const username = ref('');
const password = ref('');

// 导入路由实例


const onSubmit = (values: FormValues) => {
    console.log('submit', values);


    api.login({ name: values.username, pwd: values.password });


    //router.push('/user/index');
};

const title = () => {
    history.back;
};
</script>
  
<style scoped lang="scss">
.gmlogin {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>