import * as vscode from "vscode";
import { WELCOME_PAGE_HTML } from "./constants";

export class WelcomePage {
  constructor() {}

  public showWelcomePage() {
    const panel = vscode.window.createWebviewPanel(
      "webDocs",
      "LiteLoaderAids",
      vscode.ViewColumn.One,
      {
        // разрешить загруженным сайтам использовать свои скрипты (потенциально опасно)
        // https://code.visualstudio.com/docs/extensions/webview#_scripts-and-message-passing
        enableScripts: true,

        // лучше использовать сохранение состояния
        // https://code.visualstudio.com/docs/extensions/webview#_persistence
        retainContextWhenHidden: true,
      }
    );


    panel.webview.html = WELCOME_PAGE_HTML;
    panel.webview.onDidReceiveMessage((message) => {
    vscode.window.showInformationMessage(`欢迎使用 LiteLoaderAids`,message);

    }, undefined);
    
  }
}
