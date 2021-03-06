// Constants

// document url
export const DOC_URL = 'https://docs.litebds.com/#/zh_CN/Development/';

// WelcomePage
export const WELCOME_PAGE_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      body,
      html {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div style="padding: 4%">
      <h1>LiteLoaderAids Initialization Configuration</h1>
      <div style="font-size: 20px">
        <p><cite> a few configuration steps</cite></p>
        <p>If not the full library error can be reconfigured</p>

      </div>
      <hr align="center" width="100%" color="#987cb9" size="2" />
      <div>
        <h3>1.Select the language you want to be supported</h3>
        <label
          ><input name="language_type" type="checkbox" value="" />JavaScript
        </label>
        <label
          ><input name="language_type2" type="checkbox" value="" />Lua
        </label>
      </div>
      <div>
        <h3>2.Whether to enable the debugger</h3>
        <label><input name="language_type" type="checkbox" value="" /></label>
      </div>
      <div>
        <h3>
          3.Whether to enable automatic update of the complementary library
        </h3>
        <label><input name="language_type" type="checkbox" value="" /></label>
      </div>
      <hr align="center" width="100%" color="#987cb9" size="2" />
           <!-- 居中圆形开始按钮 -->
    <div align="center" style="padding-top: 13px">
        <button
          style="width: 200px;height: 50px;border-radius: 50px;background-color: #987cb9;color: white;font-size: 20px;border: none;cursor: pointer;"
          v-model="continue">
          Continue
        </button>
    </div>
  </body>
</html>
`;