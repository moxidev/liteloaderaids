import * as vscode from "vscode";

export class ViewDocuments {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  static getWebviewContent = (uri: string) => {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
          body, html
            {
              margin: 0; padding: 0; height: 100%; overflow: hidden; background-color: #fff;
            }
        </style>
      </head>
      <body>
        <iframe width="100%" height="100%" src="${uri}" frameborder="0">
          <p>can't display ${uri}</p>
        </iframe>
      </body>
      </html>
      `;
    return html;
  };
  public viewdocuments() {
    const panel = vscode.window.createWebviewPanel(
      "webDocs",
      "LiteLoaderScript",
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
    panel.webview.html = ViewDocuments.getWebviewContent(this.url);
  }
}
