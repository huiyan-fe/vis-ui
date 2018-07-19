# CheckboxList 单选下拉

## 说明

`<CheckboxList>`是增强功能的下拉多选菜单，整体可以进行二级选择。适用于一级处于是否选择的前提下，二级选择单个或多个子选项的场景。

二级选择多个子选项使用`<CheckboxList>`组件，二级菜单选择单个子选项使用`<CheckboxList.Radio>`组件。

在组件外部通过勾选`Checkbox`选择是否选中该选项，点击`label`向下弹出多选菜单，选择具体子选项。

外部`Checkbox`与下拉内子选项会产生联动，外部`Checkbox`选中时，子选项有一项默认被选中，该默认选中项可以通过`defaultCheckedKey`来指定；子选项全部取消选中时，外部`Checkbox`也会取消选中。

## API 接口
### CheckboxList
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 下拉菜单外部的显示的文字，**必需传入** | string | - | `''` |
| options | 点击下拉后，子菜单的内容，[具体参数见下表格][1] | array [object] | - | `[]` |
| defaultCheckedKey | 选中外部`Checkbox`时默认选中的子选项下标，下标从0开始计算 | string，number | - | `0` |
| defaultCheckedValue | 初始状态默认选中的值 | array | - | - |

### CheckboxRadioList
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 下拉菜单外部的显示的文字，**必需传入** | string | - | `''` |
| options | 点击下拉后，子菜单的内容，[具体参数见下表格][1] | array [object] | - | `[]` |
| defaultCheckedKey | 选中外部`Checkbox`时默认选中的子选项下标，下标从0开始计算 | string，number | - | `0` |
| defaultCheckedValue | 初始状态默认选中的值 | string, number, bool | - | - |

### options 参数
| 参数名 | 说明 | 取值类型 |
| --- | --- | --- |
| label | 子菜单选项的显示文字 | string |
| value | 对应子菜单选项`Checkbox`的 value | string，number |

## Events 事件
### CheckboxList
| 事件名 | 事件说明 | 返回值类型 | 返回值说明 |
| --- | --- | --- | --- |
| onChange | 当勾选内容改变时触发事件 | array | 返回选中项的`value`组成的数组 |

### CheckboxRadioList
| 事件名 | 事件说明 | 返回值类型 | 返回值说明 |
| --- | --- | --- | --- |
| onChange | 当勾选内容改变时触发事件 | string, number, bool | 返回选中项的`value` |

[1]:#options-参数
