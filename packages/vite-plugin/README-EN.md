<div align="center">
<img src="https://user-images.githubusercontent.com/73059627/230129140-6e7a7eb7-4c78-4a58-b4aa-fcb7c2a6c95f.png" width=160px" style="margin-bottom: 12px;" />

<p align="center">
  <h2>vite-code-inspector-plugin</h2>
  <a href="https://github.com/zh-lx/code-inspector/blob/main/packages/vite-plugin/README.md">中文文档</a>
  |
  <a href="https://github.com/zh-lx/code-inspector/blob/main/packages/vite-plugin/README-EN.md">English Doc</a>
  |
  <a href="https://github.com/zh-lx/code-inspector/blob/main/packages/webpack-plugin/README-EN.md">webpack-code-inspector-plugin</a>
</p>

[![NPM version](https://img.shields.io/npm/v/vite-code-inspector-plugin.svg)](https://www.npmjs.com/package/vite-code-inspector-plugin)
[![GITHUB star](https://img.shields.io/github/stars/zh-lx/code-inspector.svg)](https://github.com/zh-lx/code-inspector)
[![MIT-license](https://img.shields.io/npm/l/code-inspector.svg)](https://opensource.org/licenses/MIT)

</div>

<hr />

## 📜Introduction

Click the element on the page, it will automatically open the code editor and position the cursor to the source code of the element.

![code-inspector](https://user-images.githubusercontent.com/73059627/227070438-6e40e112-6f1d-4f67-9f26-53986bff77c3.gif)

## 🚀Install

```perl
npm i vite-code-inspector-plugin -D
# or
yarn add vite-code-inspector-plugin -D
# or
pnpm add vite-code-inspector-plugin -D
```

## 📦Usage

### 1. configure `vite.config.js`

- Add the following configuration in `vite.config.js`:

  ```js
  // vite.config.js
  import { defineConfig } from 'vite';
  import { ViteCodeInspectorPlugin } from 'vite-code-inspector-plugin';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [ViteCodeInspectorPlugin()],
  });
  ```

### 2. Configure Vscode Command

If your editor is Vscode, you need to do the following:

- Execute `command + shift + p`(mac) or `ctrl + shift + p`(windows) command in vscode, search and click `shell Command: Install 'code' command in Path`:

  <img src="https://s3.bmp.ovh/imgs/2021/08/a99ec7b8e93f55fd.png" width="60%" />

- If the following popup window appears, your configuration is successful:

  <img src="https://s3.bmp.ovh/imgs/2021/08/c3d00a8efbb20feb.png" width="40%" />

### 3. Use Code Inspector

There are two ways to use code inspector:

1. Click the code inspector switch suspending on the page. When the color of the switch is colored, it means that inspecting mode is on <img src="https://user-images.githubusercontent.com/73059627/230129140-6e7a7eb7-4c78-4a58-b4aa-fcb7c2a6c95f.png" width="20" />; and when the color of the switch is gray, it means that inspecting mode is off <img src="https://user-images.githubusercontent.com/73059627/230129864-e2813188-8d49-4a8e-a6bc-dda19c79b491.png" width="20" />.
2. Simultaneously pressing and holding combo keys to open the inspecting mode. (Default value of hotkeys in mac is 【Option + Shift】 and in windows is 【Alt + Shift】)

When the inspecting mode is on, click the element on the page, it will automatically open the code editor and position the cursor to the source code of the element.

## 🎨Options

| Parameter  | Description                                                                                                               | Type                | OptionValue                                                          | Default                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------- | ------------------------ |
| hideSwitch | Whether hide the button of this function                                                                                  | `boolean`           | `true/false`                                                         | `false`                  |
| hotKeys    | Combination keys for triggering this function.When the value is `false` or `[]`, the function can't be triggered by keys. | `string[] \| false` | Array<`'ctrlKey'`\|`'altKey'`\|`'metaKey'`\|`'shiftKey'`> \| `false` | `['altKey', 'shiftKey']` |
| autoToggle | After opening the function switch, whether automatically close the switch when triggering the jump editor function.       | `boolean`           | `true/false`                                                         | `true`                   |

```js
// vite.config.js
import { defineConfig } from 'vite';
import { ViteCodeInspectorPlugin } from 'vite-code-inspector-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteCodeInspectorPlugin({
      hideSwitch: false,
      hotKeys: ['altKey', 'shiftKey'],
      autoToggle: true,
    }),
  ],
});
```

## ❓FAQ

- <b>Editor doesn't open automatically</b><br>
  If your editor doesn't open automatically when you click on a page element, it could be because of system permissions or other issues that prevent the plugin from reading the programs currently running on your computer. Please add a file named `.env.local` to your project root directory, add the following content:
  ```perl
  # editor
  CODE_EDITOR=code
  ```