# Message 全局提示

## 说明（beta版，API可能会变化）

`Message`是一种全局简单提示，默认在屏幕顶部，如果需要更强烈的提示场景应该使用`<Modal>`。

直接调用方法`Message.tip('复制成功')`来使用。

`Message`默认的显示时间是`2000ms`，如果想自定义提示的显示时间，可以通过传入第二个参数`Message.tip('复制成功', 3000)`，让组件`3000ms`后被销毁。

`Message`第三个参数和第四个参数分别是`opts`样式配置和`onClose`回调，opts可传入类名或内联样式，onClose在被销毁后触发。  `Message.tip('复制成功', 3000, {}, ()=>{})`。

## API 接口
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| text | 要显示的文字内容 | string | - | - |
| time | 显示时间，单位ms，超过后被销毁 | number | - | 2000 |
| opts | 传递配置参数 | object | - | - |
| onClose | 关闭时触发的回调函数 | function | - | - |

### opts 参数说明
| 参数名 | 说明 | 取值类型 |
| --- | --- | --- |
| className | 给message添加自定义的class名 | string |
| style | 给message添加内联样式，样式名遵循驼峰写法(原生js规范) | object |
