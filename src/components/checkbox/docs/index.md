# Checkbox 多选框

## 说明

将`<Checkbox>`嵌套在`<Checkbox.Group>`容器内，以用于互斥的选择场景中。由于所有选项对用户可见，所以建议当选项过多时，转而使用`Select`选择器。

通常我们会将`<Checkbox.Button>`嵌套在`<Checkbox.Group>`容器中，用作单选按钮组。

`<Checkbox.Group>`容器具有向下8px的外边距。

## API
### Checkbox
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | `Checkbox` 的 value，**必需传入** | string, number, boolean | - | `''` |
| checked | 是否被选中 | boolean | `true` `false` | `false` |
| disabled | 单选框失效状态 | boolean | `true` `false` | `false` |
| onChange | `checked` 事件的 handler，当被选中时触发事件 | function | - | - |

### CheckboxButton
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | `CheckboxButton` 的 value，**必需传入** | string, number, boolean | - | `''` |
| checked | 是否被选中 | boolean | `true` `false` | `false` |
| disabled | 单选按钮失效状态 | boolean | `true` `false` | `false` |
| onChange | `checked` 事件的 handler，当被选中时触发事件 | function | - | - |

### CheckboxGroup
`CheckboxGroup`中设置的属性，会继承到`Checkbox`与`CheckboxButton`子组件中。
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | `CheckboxGroup` 下所有 `input[type="checkbox"]` 的 name 属性 | string | - | - |
| size | 只对 `CheckboxButton` 生效，设置按钮大小 | string | `large` `small` | - |
| value | 用于设置当前选中的值，与子元素`value`相同时选中 | string | - | - |
| disabled | `CheckboxGroup` 的失效状态 | boolean | `true` `false` | `false` |
| onChange | 选项变化时的回调函数 | function | - | - |
