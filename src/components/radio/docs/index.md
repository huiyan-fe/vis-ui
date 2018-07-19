# Radio 单选框

## 说明

`<Radio>`单独使用没有什么卵用，所以单独的`<Radio>`组件没有受控状态。

通常我们会将`<Radio>`嵌套在`<Radio.Group>`容器内，以用于互斥的选择场景中。由于所有选项对用户可见，所以建议当选项过多时，转而使用`Select`选择器。

除了传统单选按钮`<Radio>`，将具有按钮样式的`<Radio.Button>`嵌套在`<Radio.Group>`容器中，用作单选按钮组。

`<Radio.Group>`容器具有向下8px的外边距。

## API 接口
### Radio
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | `Radio` 的 value，**必需传入** | string, number, boolean | - | `''` |
| checked | 是否被选中 | boolean | `true` `false` | `false` |
| disabled | 单选框失效状态 | boolean | `true` `false` | `false` |

### RadioButton
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | `RadioButton` 的 value，**必需传入** | string, number, boolean | - | `''` |
| checked | 是否被选中 | boolean | `true` `false` | `false` |
| disabled | 单选按钮失效状态 | boolean | `true` `false` | `false` |

### RadioGroup
`RadioGroup`中设置的属性，会继承到`Radio`与`RadioButton`子组件中。  
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | `RadioGroup` 下所有 `input[type="radio"]` 的 name 属性 | string | - | - |
| size | 只对 `RadioButton` 生效，设置按钮大小 | string | `large` `small` | - |
| defaultValue | 用于设置初始状态默认选中的值，与子元素`value`相同时选中 | string, number, boolean | - | - |
| value | 将RadioGroup变为受控组件，选中状态由外部value指定值控制 | string, number, boolean | - | - |
| disabled | `RadioGroup` 的失效状态 | boolean | `true` `false` | `false` |

## Events 事件
### Radio
| 事件名 | 事件说明 | 返回值 | 返回值说明 |
| --- | --- | --- | --- |
| onMouseEnter | `mouseenter` 事件的 handler | event | 原生的`event`事件 |
| onMouseLeave | `mouseleave` 事件的 handler | event | 原生的`event`事件 |
| onChange | `checked` 事件的 handler，当被选中时触发事件 | string, number, boolean | 返回该选项的`value` |

### RadioButton
| 事件名 | 事件说明 | 返回值 | 返回值说明 |
| --- | --- | --- | --- |
| onMouseEnter | `mouseenter` 事件的 handler | event | 原生的`event`事件 |
| onMouseLeave | `mouseleave` 事件的 handler | event | 原生的`event`事件 |
| onChange | `checked` 事件的 handler，当被选中时触发事件 | string, number, boolean | 返回该选项的`value` |

### RadioGroup
| 事件名 | 事件说明 | 返回值类型 | 返回值说明 |
| --- | --- | --- | --- |
| onChange | 选项变化时的回调函数 | string, number, boolean | 返回选中项的`value` |