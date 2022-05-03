// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { DOC_URL } from "./constants";
import { ViewDocuments } from "./viewDocuments";
import { WelcomePage } from "./welcomePage";

export function activate(context: vscode.ExtensionContext) {

  // Show documentation to the user
  let disposable = vscode.commands.registerCommand(
    "liteloaderaids.viewdocuments",
    () => {
      new ViewDocuments(DOC_URL).viewdocuments();

    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "liteloaderaids.configure",
    () => {
      new WelcomePage().showWelcomePage();
    }
  );

  context.subscriptions.push(disposable2, disposable);
}


// this method is called when your extension is deactivated
export function deactivate() {}
