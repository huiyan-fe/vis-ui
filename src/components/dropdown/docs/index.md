# Dropdown 下拉

## 说明

`<Dropdown>`点击向下弹出多选菜单。

## API 接口
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 下拉菜单外部的显示的文字，**必需传入** | string | - | `''` |
| options | 点击下拉后，子菜单的内容，[具体参数见下表格][1] | array [object] | - | `[]` |

### options 参数
| 参数名 | 说明 | 取值类型 |
| --- | --- | --- |
| label | 子菜单`Checkbox`显示文字 | string |
| value | 对应子菜单`Checkbox`的 value | string，number |

## Events 事件
| 事件名 | 事件说明 | 返回值类型 | 返回值说明 |
| --- | --- | --- | --- |
| onChange | 当下拉菜单勾选内容改变时触发事件 | array | 返回选中项的`value`组成的数组 |

[1]:#options-参数