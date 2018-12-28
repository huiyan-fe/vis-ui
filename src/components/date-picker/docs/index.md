# DatePicker 日期、时间选择框

## 说明
选择日期和选择时间的控件。

`DatePicker`中包含日期与时间的选择控件。当使用`TimerPicker`时，可以通过`const TimerPicker = DatePicker.TimerPicker`的方式获取。

`DatePicker`控件是基于[jDate](https://github.com/zmofei/jDate)的二次开发，封装成React组件，并对其中的一些功能以及API进行了扩展。
`DatePicker`与`jDate`一样，日期的value都是以原生的`Date`格式组成的数组，如果你使用了`moment`库，可以使用`moment().toDate()`方法将value从`moment`对象格式转为原生`Date`格式。
`TimerPicker`与`jDate`一样，时间的value是`[hour, minute]`格式组成的数组，如果你使用了`moment`库，可以使用`[moment().hour(), moment().minute()]`方法将value从`moment`对象格式转为`[hour, minute]`格式。

**PS.该组件选择`vis-ui`而非`antd`的最大原因是因为`vis-ui`的日期选择框有Multi模式，能进行跨日期多选！**

## API 接口
### DatePicker 日期选择框
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| locale | 日期选择框类型，默认属性`zh`为中文，`en`为英文，`ja`为日文 | string | `zh` `en` `ja` | `zh` |
| type | 日期选择框类型，`Single`为单选，`Multi`为多选，`Period`为选择连续日期区间 | string | `Single` `Period` `Multi` | `Single` |
| defaultValue | 默认选中的日期值 | array[`Date`] | - | `[]` |
| name | 选择框`input`的`name`属性 | string | - | - |
| placeholder | 选择框`input`的`placeholder`属性 | string | - | `'请选择日期'` |
| disabled | 选择框`input`禁用 | boolean | `true` `false` | `false` |
| max | 控制多选时可选数量的最大限制，**只有在`type='Multi'`时生效！** | number | - | - |
| start | 控制日历面板日期disabled的属性之一，设置该属性之后，在`start`之前的日期全部置为disabled状态 | `Date` | - | - |
| end | 控制日历面板日期disabled的属性之一，设置该属性之后，在`end`之后的日期全部置为disabled状态 | `Date` | - | - |
| disabledDate | 控制日历面板日期disabled的属性之一，该属性能指定若干个具体的日期为disabled状态 | array[`Date`] | - | - |
| enableDate | 控制日历面板日期disabled的属性之一，该属性能指定若干个具体的日期为enable状态 | array[`Date`] | - | - |

### TimerPicker 时间选择框
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 日期选择框类型，`Single`为单选，`Period`为选择连续时间段 | string | `Single` `Period` | `Single` |
| defaultValue | 默认选中的时间值 | array[array] | - | `[]` |
| step | 最小时间间隔，单位"分钟" | number | - | `1` |
| name | 选择框`input`的`name`属性 | string | - | - |
| placeholder | 选择框`input`的`placeholder`属性 | string | - | `'请选择时间'` |
| disabled | 选择框`input`禁用 | boolean | `true` `false` | `false` |

## Events 事件
### DatePicker 日期选择框
| 事件名 | 事件说明 | 返回值 | 返回值说明 |
| --- | --- | --- | --- |
| onChange | 选项变化时的回调函数 | object | {date: 返回Date格式的日期或数组, text: 返回日期的字符串} |
| onMonthChange | 切换月份时的回调函数 | object | {eventType: 切换的方向为`prev`或`next`, month: 当前月份，注意返回值为`0-11`, year: 当前年份} |

### TimerPicker 时间选择框
| 事件名 | 事件说明 | 返回值类型 | 返回值说明 |
| --- | --- | --- | --- |
| onChange | 选项变化时的回调函数 | object | {date: 返回数组格式的时间, text: 返回时间的字符串} |