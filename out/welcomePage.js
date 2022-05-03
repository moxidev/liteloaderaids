"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomePage = void 0;
const vscode = require("vscode");
const constants_1 = require("./constants");
class WelcomePage {
    constructor() { }
    showWelcomePage() {
        const panel = vscode.window.createWebviewPanel("webDocs", "LiteLoaderAids", vscode.ViewColumn.One, {
            // разрешить загруженным сайтам использовать свои скрипты (потенциально опасно)
            // https://code.visualstudio.com/docs/extensions/webview#_scripts-and-message-passing
            enableScripts: true,
            // лучше использовать сохранение состояния
            // https://code.visualstudio.com/docs/extensions/webview#_persistence
            retainContextWhenHidden: true,
        });
        panel.webview.html = constants_1.WELCOME_PAGE_HTML;
        panel.webview.onDidReceiveMessage((message) => {
            vscode.window.showInformationMessage(`欢迎使用 LiteLoaderAids`, message);
        }, undefined);
    }
}
exports.WelcomePage = WelcomePage;
//# sourceMappingURL=welcomePage.js.map