import { Editor } from './shared/constant';
export type HotKey = 'ctrlKey' | 'altKey' | 'metaKey' | 'shiftKey';
export type CodeOptions = {
    /**
     * @cn 触发 DOM 定位功能的组合键，ctrlKey/altKey/metaKey/shiftKey 中一个或多个组成的数组，默认值为 ['altKey', 'shiftKey]。即 Mac 系统默认是 Option + Shift；Window 默认是 Alt + Shift。
     * @en The combination keys that triggers the DOM positioning function, it is an array of one or more from ctrlKey/altKey/metaKey/shiftKey, with default values of ['altKey', 'shiftKey']. The default for Mac systems is Option+Shift; and for Window is Alt+Shift.
     */
    hotKeys?: HotKey[] | false;
    /**
     * @cn 是否在页面展示功能开关按钮
     * @en Whether show the switch button of this function on the page
     */
    showSwitch?: boolean;
    /**
     * @cn 是否隐藏在控制台的按键提示
     * @en Whether hide the tips of combination keys on console.
     */
    hideConsole?: boolean;
    /**
     * @cn 打开功能开关的情况下，点击触发跳转编辑器时是否自动关闭开关
     * @en When opening the function switch, whether automatically close the switch when triggering the jump editor function.
     */
    autoToggle?: boolean;
    editor?: Editor;
};
export declare function getInjectCode(port: number, options?: CodeOptions): string;
export { startServer, enhanceCode, normalizePath, parseSFC } from './server';
