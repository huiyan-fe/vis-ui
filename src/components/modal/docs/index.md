# Modal 模态框

## 说明

`Modal` 适用于强烈的用户提醒场景，或者是需要用户确认的场景。

## API 接口
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 模态框头部的标题展示文字 | string | - | `''` |
| visible | 控制模态框是否显示 | bool | `true` `false` | `false` |
| footer | 底部内容，当不需要默认底部按钮时，可以设为`footer={null}` | string|ReactNode | - | - |
| maskClosable | 点击蒙层是否允许关闭 | bool | `true` `false` | `true` |
| mini | 通过添加`mini`属性来展示迷你样式的模态框，在迷你模式下，模态框没有取消按钮 | bool | `true` `false` | `false` |
| hideCancel | 当添加`hideCancel`属性后，模态框的取消按钮被隐藏 | bool | `true` `false` | `false` |

## Events 事件
| 事件名 | 事件说明 | 返回值类型 | 返回值说明 |
| --- | --- | --- | --- |
| onCancel | 当点击取消按钮或是右上角的关闭按钮时触发 | - | - |
| onSubmit | 当点击确定按钮时的触发事件 | - | - |
