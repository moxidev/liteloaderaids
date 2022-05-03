"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const constants_1 = require("./constants");
const viewDocuments_1 = require("./viewDocuments");
const welcomePage_1 = require("./welcomePage");
function activate(context) {
    // Show documentation to the user
    let disposable = vscode.commands.registerCommand("liteloaderaids.viewdocuments", () => {
        new viewDocuments_1.ViewDocuments(constants_1.DOC_URL).viewdocuments();
    });
    let disposable2 = vscode.commands.registerCommand("liteloaderaids.configure", () => {
        new welcomePage_1.WelcomePage().showWelcomePage();
    });
    context.subscriptions.push(disposable2, disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map