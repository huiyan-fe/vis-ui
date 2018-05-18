# vis-ui
👍基于react的前端UI组件化通用库

vis-ui的目标：
- 一个组件库，部门之间不同项目可以通过配置自己主题的方式来复用
- 具有良好的可拓展性，对组件开发者友好，能持续沉淀UI组件
- 提供完善的文档与API接口，对用户友好，简单可依赖

参考ant-design的文件结构，考虑到可拓展性，在搭建初期就设置了较多入口文件，便于组件持续沉淀。
参考react-bmap的文件结构，分为src、lib、pages三大块，方便组件开发、打包、在线预览等需求分割。

## 开发框架
react + sass + webpack

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
npm run build:dist
```
示例页面打包
```bash
npm run examples:build
```

## 目录结构
```
.
├── lib					// babel打包生成
│   ├── components 
│   └── index.js
├── pages				// 示例页面目录
│   ├── dist			// 打包后的组件输出
│   ├── examples		// 示例页面
│   │   ├── build
│   │   ├── components	// 编写示例组件
│   │   ├── index.html	// 示例页面入口
│   └── index.html		
├── src					// UI组件资源文件
│   ├── components		// 编写组件目录
│   │   ├── button		// 组件示例（如button）
│   │   └── style		
│   │       ├── color	// 配色
│   │       ├── core	// 基础样式
│   │       ├── index.js// 样式组件入口
│   │       └── themes	// 主题变量定义
│   └── index.js		// 组件总入口
├── static				// 静态资源
```

## 编码规范
1. 遵循`eslint`和`stylelint`规范，依赖中已（其实还没）安装
2. 注意提交注释请使用`git cz`
3. 组件开发时请设置`propTypes`和`defaultProps`规范接口传参