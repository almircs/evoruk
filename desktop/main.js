// Evoruk para Windows e Mac: abre o mesmo app da pasta app/ numa janela própria.
// Os dados ficam no perfil do usuário (IndexedDB do Electron), como no navegador.
const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

if (!app.requestSingleInstanceLock()) app.quit();

function criarJanela() {
  const win = new BrowserWindow({
    width: 1200, height: 820, minWidth: 380, minHeight: 560,
    title: 'Evoruk', backgroundColor: '#EDF1F3', show: false,
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: { contextIsolation: true, sandbox: true },
  });
  win.once('ready-to-show', () => win.show());
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  return win;
}

const mac = process.platform === 'darwin';
Menu.setApplicationMenu(Menu.buildFromTemplate([
  ...(mac ? [{ role: 'appMenu' }] : []),
  { label: 'Editar', submenu: [{ role: 'undo', label: 'Desfazer' }, { role: 'redo', label: 'Refazer' }, { type: 'separator' }, { role: 'cut', label: 'Recortar' }, { role: 'copy', label: 'Copiar' }, { role: 'paste', label: 'Colar' }, { role: 'selectAll', label: 'Selecionar tudo' }] },
  { label: 'Exibir', submenu: [{ role: 'reload', label: 'Recarregar' }, { role: 'zoomIn', label: 'Aumentar' }, { role: 'zoomOut', label: 'Diminuir' }, { role: 'resetZoom', label: 'Tamanho normal' }, { type: 'separator' }, { role: 'togglefullscreen', label: 'Tela cheia' }] },
  { label: 'Janela', submenu: [{ role: 'minimize', label: 'Minimizar' }, ...(mac ? [{ role: 'close', label: 'Fechar' }] : [{ role: 'quit', label: 'Sair' }])] },
]));

app.on('second-instance', () => { const w = BrowserWindow.getAllWindows()[0]; if (w) { if (w.isMinimized()) w.restore(); w.focus(); } });
app.whenReady().then(() => { criarJanela(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) criarJanela(); }); });
app.on('window-all-closed', () => { if (!mac) app.quit(); });
