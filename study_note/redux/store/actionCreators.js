
// export function addAction(num) {
//     return {
//         type: "ADD_NUMBER",
//         num
//     }
// }
// const action1 = { type: "ADD_NUMBER", num: 10 }; 一般不这么写;

import { ADD_NUMBER, SUB_NUMBER } from "./constants.js"
export const addAction = num => ({
    type: ADD_NUMBER,
    num
})
// 这里一定要加外面那层(), 这样里面那个值才是一个对象
export const subAction = num => ({
    type: SUB_NUMBER,
    num
})
