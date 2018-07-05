# Checkbox 多选框

## 说明

将`<Checkbox>`嵌套在`<Checkbox.Group>`容器内，以用于多选的场景中。单独使用时可以表示两种状态之间的切换。

通常在多选场景中我们会将`<Checkbox>`嵌套在`<Checkbox.Group>`容器中，用作多选按钮组。

`<Checkbox.Group>`容器具有向下8px的外边距。

## API 接口
### Checkbox
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | `Checkbox` 的 value，**必需传入** | string, number, boolean | - | `''` |
| checked | 是否被选中 | boolean | `true` `false` | `false` |
| disabled | 单选框失效状态 | boolean | `true` `false` | `false` |

### CheckboxGroup
`CheckboxGroup`中设置的属性，会继承到`Checkbox`子组件中。
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 用于设置当前被选中项，数组中包含与子元素的`value`属性时，该子元素被选中 | array | - | - |
| disabled | `CheckboxGroup` 的失效状态 | boolean | `true` `false` | `false` |

## Events 事件
### Checkbox
| 事件名 | 事件说明 | 返回值 | 返回值说明 |
| --- | --- | --- | --- | --- |
| onMouseEnter | `mouseenter` 事件的 handler | event | 原生的`event`事件 |
| onMouseLeave | `mouseleave` 事件的 handler | event | 原生的`event`事件 |
| onChange | `checked` 事件的 handler，当勾选状态改变时触发事件 | bool | 返回该多选框的选中状态，`true`表示选中，`false`表示未选中 |

### CheckboxGroup
| 事件名 | 事件说明 | 返回值类型 | 返回值说明 |
| --- | --- | --- | --- | --- |
| onChange | 选项变化时的回调函数 | array | 返回选中项的`value`组成的数组 |