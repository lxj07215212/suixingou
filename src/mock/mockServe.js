import Mock from 'mockjs'
// webpack 默认对外暴露的有：图片、json数据
import banner from './banner.json'
import floor from './floor.json'
// mock数据：第一个参数是请求的地址，第二个参数是请求的数据
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});