// 导入mitt
import mitt from "mitt";
// 调用mitt得到emitter emitter对象上能够绑定事件，触发事件
const emitter = mitt()
// 导出emitter对象
export default emitter