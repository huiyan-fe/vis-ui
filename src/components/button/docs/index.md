# Button 按钮

## 说明
单独的`<Button>`没有外边距属性。

当`<Button>`与`<Button>`相邻时，会使相邻的后一个`<Button>`具有向左`8px`的外边距。

将`<Button>`嵌套在`<Button.Group>`容器中，便于大量`<Button>`组件的管理，同时`<Button.Group>`自身具有向下`12px`的外边距。

## API

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 设置按钮类型 | string | `default` `primary` `ghost` `danger` `success` | `default` |
| size | 设置按钮大小 | string | `large` `small` | - |
| icon | 设置按钮的图标类型 | string | 见`Icon`组件 | - |
| disabled | 按钮失效状态 | boolean | `true` `false` | `false` |
| onClick | `click` 事件的 handler | function | - | - |