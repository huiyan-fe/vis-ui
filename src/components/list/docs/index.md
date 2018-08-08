# List 列表

## 说明

`List`提供列表展示功能，用于展示文字列表，或者是带数据的列表展示。

## API 接口
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 列表展示的内容，[具体参数见下表格][1]，**必需传入** | array [object] | - | `[]` |
| loadMore | 是否展示加载按钮 | bool | `true` `false` | `false` |
| loadSize | 展示加载按钮的列表项最大数目，当列表数目大于`loadSize`时，加载按钮隐藏 | string，number | - | `10` |
| autoTitle | 当`data`中不传入`title`属性时，默认将序号作为`title`来展示 | bool | `true` `false` | `true` |
| formatValue | 可以修改传入`value`的格式，比如增加单位或按规则调整数据 | function | - | - |
| formatExtra | 可以修改传入`extra`的格式，比如增加单位或按规则调整数据 | function | - | - |

### data 参数
| 参数名 | 说明 | 取值类型 |
| --- | --- | --- |
| title | 列表第一列，通常是序号，可省略该字段 | string，number |
| name | 列表第二列，适用于填写主要展示的内容 | string，number |
| value | 列表第三列，适用于展示该列所带的数据 | string，number |
| extra | 列表第四列，其他需要展示的内容，可省略该字段 | string，number |

## Events 事件
| 事件名 | 事件说明 | 返回值类型 | 返回值说明 |
| --- | --- | --- | --- |
| onClick | 当点击列表项时触发事件 | data | 返回所点击项的`data`数据 |
| onLoadMore | 当点击加载更多时触发事件 | - | - |

[1]:#data-参数