# vis-ui
👍基于react的前端UI组件化通用库

vis-ui的目标：
- 一个组件库，部门之间不同项目可以通过配置自己主题的方式来复用
- 具有良好的可拓展性，对组件开发者友好，能持续沉淀UI组件
- 提供完善的文档与API接口，对用户友好，简单可依赖

如果您是vis-ui的贡献开发者，下面的内容简直就是为您量身定制书写的，请仔细阅读~

如果您是vis-ui的用户，希望灵活的使用vis-ui来创建自己美丽动人的项目，可以阅读[vis-ui 使用说明](https://github.com/huiyan-fe/vis-ui/blob/master/README2.md)。

## 开发框架
react + sass + webpack + gulp

## 构建过程
安装
```bash
npm install
```
本地开发预览
```bash
npm run examples
```
组件打包
```bash
npm run build:lib
```
示例页面打包
```bash
npm run examples:build
```
## 目录结构
参考ant-design的文件结构，考虑到可拓展性，在搭建初期就设置了较多入口文件，便于组件持续沉淀。

参考react-bmap的文件结构，分为src、lib、pages三大块，方便组件开发、打包、在线预览等需求分割。

```
.
├── lib                 // babel打包生成
│   ├── components
│   └── index.js
├── pages               // 示例页面目录
│   ├── dist            // 打包后的组件输出
│   ├── examples        // 示例页面
│   │   ├── build
│   │   ├── components  // 编写示例组件
│   │   ├── index.html  // 示例页面入口
│   └── index.html
├── src                 // UI组件资源文件
│   ├── components      // 编写组件目录
│   │   ├── button      // 组件示例（如button）
│   │   └── style
│   │       ├── color   // 配色
│   │       ├── core    // 基础样式
│   │       ├── index.js// 样式组件入口
│   │       └── themes	// 主题变量定义
│   └── index.js        // 组件总入口
├── static              // 静态资源
```

## 开发步骤
1. `src/index.js`注册组件js入口，`src/components/style/components.scss`注册组件样式入口
2. 创建`xxx组件`文件夹，编写组件
3. 编写组件样式，放在`xxx组件/style`目录下
4. 编写组件说明与API，放在`xxx组件/docs`目录下

## 编码规范
1. 遵循`eslint`和`stylelint`规范，依赖中已安装，规则见配置文件
2. 注意提交注释请使用`git cz`
3. 组件开发时请设置`propTypes`和`defaultProps`规范接口传参