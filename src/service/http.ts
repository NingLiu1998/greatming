// http.ts
import type { AxiosResponse } from 'axios';
//import qs from "qs"
// import 'element-plus/dist/index.css';
import { u } from './util';
import Request from './req';
import type { RequestConfig, reqRegisterUserType,reqLogin } from './types';

//参考：https://juejin.cn/post/7071518211392405541

console.log("baseUrl",import.meta.env.BASE_URL);
const request = new Request({
    baseURL: import.meta.env.BASE_URL,
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: config => config,
        // 响应拦截器
        responseInterceptors: (result: AxiosResponse) => {
            return result
        },
    },
})

//api接口正常返回最原始数据结构
export interface BaseResponse<T> {
    statusCode: number
    data: T
    succeeded: boolean
    errors?: any
    extras?: any
    timestamp: number
}


interface BaseRequestConfig<T, R> extends RequestConfig<BaseResponse<R>> {
    //这里就是请求data
    data?: T
}


/**
 * @description: 函数的描述
 * @interface D 请求参数的interface
 * @interface T 响应结构的intercept
 * @param {BaseRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const http = <D = any, T = any>(config: BaseRequestConfig<D, T>) => {
    const { method = 'GET' } = config
    if (method === 'get' || method === 'GET') {
        config.params = config.data
    }
    return request.request<BaseResponse<T>>(config)
}
class baseService {
    public static get = <Req = any, Res = any>(url: string, data: Req) => {
        return http<Req, Res>({
            url: url,
            method: 'GET',
            data: data
        })
    }

    public static post = <Req = any, Res = any>(url: string, data: Req) => {
        return http<Req, Res>({
            url: url,
            method: 'POST',
            data: data
        })
    }
}

//通用服务
class api extends baseService {
    static register = (uInfo: reqRegisterUserType) => {
        this.post('/api/system/register', {
            params: uInfo
        }).then(res => {
            u.NoticeOk('账号注册成功')
            console.log('注册', res);
        });
    }

    static login = (uInfo: reqLogin) => {
        this.post('/api/system/login', {
            params: uInfo
        }).then(res => {
            u.NoticeOk('登录成功')
            console.log('注册', res);
        });
    }
}

export { http, api }



//示例：自定义拦截和返回
//         interceptors: {
//             requestInterceptors(res) {
//                 console.log('接口请求拦截')

//                 return res
//             },
//             responseInterceptors(result) {
//                 console.log('接口响应拦截')
//                 return result
//             },
//         },
//     })
// }