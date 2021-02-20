## react-ts

---

这是一个使用 create-ract-app 搭建的 react+typescript 项目。

### 代码管理

使用 editorconfig 对代码编写进行风格管理
使用 Prettier 美化代码格式
使用 Eslint 管理代码规范
使用 lint-staged husky 对代码提交管理

### react

支持 redux

### axios

支持返回值类型设置

### antd

#### 支持自定义主题色

因为此项目已经 run eject 过，所以没有参照 antd 官网配置自定义主题色。

按照网上其他人的配置一直报错 `.bezierEasingMixin(); ^ Inline JavaScript is not enabled. Is it set in your options?`

报这个错我知道是 `javascriptEnabled` 没有配置成功，但是按照网上已经在 less-loader 中配置过`javascriptEnabled: true`

通过将版本等各种方案均没有解决。

后面我仔细看了`webpack.config.js`生成`loaders`的逻辑，进行以下更改

```javascript
// 修改getStyleLoaders
const getStyleLoaders = (cssOptions, preProcessor) => {
    // ...
    if (preProcessor) {
      let options = {
        sourceMap: true
      }
      if( preProcessor=== 'less-loader' ){
        options.lessOptions = {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#2ab989',　　//修改antd主题色
          }
        }
      }
      loaders.push(
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
            root: paths.appSrc,
          },
        },
        {
          loader: require.resolve(preProcessor),
          options
        }
      );
    }
    return loaders;
  };

  // 配置loader部分，写在sass-loader上面即可

  {
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 3,
        sourceMap: isEnvProduction
          ? shouldUseSourceMap
          : isEnvDevelopment
      },
      'less-loader'
    ),
    sideEffects: true,
  },
  {
    test: lessModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 3,
        sourceMap: isEnvProduction
          ? shouldUseSourceMap
          : isEnvDevelopment,
        modules:{
          getLocalIdent: getCSSModuleLocalIdent,
        }
      },
      'less-loader'
    ),
  },

```
