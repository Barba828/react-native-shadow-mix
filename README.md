
### 规则
- 1.若传入elevation参数，则Android与iOS使用原生阴影，显示效果也一致
- 2.若需要颜色，偏移，扩散等参数调整，则不可使用elevation参数，否则无效。因实现方式不同，但封装后使用效果Android与iOS尽量相似

### 用法
- 1.安装
  ```
  npm install react-native-shadow-mix
  ```
- 2.参考react-native-shadow实现方式，需依赖[react-native-svg](https://www.npmjs.com/package/react-native-svg)
  ```
  npm install react-native-svg
  ```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| children      | 阴影内容        | React.element |  无  |
| elevation      | 黑色阴影深度，使用该属性时，为原生阴影样式        | number |  无  |
| style      | 自定义样式，如backgroundColor        | obj |  无  |
| width      | 宽度(与子组件相同)       | number |  `0`  |
| height      | 高度(与子组件相同)        | number |  `0`  |
| radius      | 圆角(与子组件相同)       | string |  `0`  |
| border      | 阴影边缘扩散       | number |  `0`  |
| color      | 阴影颜色       | string |  `#000`  |
| opacity      | 不透明度       | number |  `1`  |
| x      | X轴偏移       | number |  `0`  |
| y      | Y轴偏移       | number |  `0`  |


## 辅助说明
- width,height,radius参数iOS端可不传，会自动适应子组件大小
- style不传会自动适配背景色 白色

## 效果截图
### Android端截图
![Android端截图](https://ftp.bmp.ovh/imgs/2019/11/57736e87d17ec1aa.jpg)
### iOS端截图
![iOS端截图](https://ftp.bmp.ovh/imgs/2019/11/c9157e06f53c2880.png)
