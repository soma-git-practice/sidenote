/*
目標
  コード読む時に使う一時的なメモ欄が、PrimarySidebarに欲しい。

TODO
  o PrimarySidebarに項目を追加
	x PrimarySidebarにテキストを表示する
	x PrimarySidebarに入力欄を追加
	x アイコン差し替え
	x TypeScriptに挑戦
*/

const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const disposable = vscode.commands.registerCommand('sidenote.helloWorld', function () {
		vscode.window.showInformationMessage('Hello VSCode Extensions!');
	});
	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
