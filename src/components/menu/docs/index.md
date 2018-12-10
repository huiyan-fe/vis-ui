# Menu 导航菜单

## 说明

`Menu`为页面提供导航功能的菜单列表。

## API 接口
### Menu
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| mode | 菜单的类型，支持水平、垂直两种 | string | `horizontal` `vertical` | `horizontal` |
| defaultSelectedIndexs | 初始选中的菜单项的`index`数组 | array | - | `[]` |

### SubMenu
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 二级菜单的标题 | string | - | - |
| index | 该项菜单的唯一标志 | string | - | - |

### MenuItem
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 该项菜单的唯一标志 | string | - | - |
