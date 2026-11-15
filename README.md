# Evoruk

Controle mensal das contas da casa: lançar, dar baixa (a conta paga fica colorida), cartões com compras parceladas e a planilha do ano inteiro. Funciona no celular, no tablet e no computador.

**Abrir:** https://almircs.github.io/evoruk/

## Instalar

- **iPhone / iPad:** abra o link no **Safari** → **Compartilhar** → **Adicionar à Tela de Início**.
- **Computador (Chrome ou Edge):** abra o link → ícone de instalar na barra de endereço (ou menu → **Instalar Evoruk**).
- **Windows / Mac (instalador):** baixe em **Releases** (ou na aba **Actions**, no último "Instaladores").

## Seus dados

Ficam guardados só no aparelho. Para passar de um aparelho para outro use **Backup → Salvar backup (.json)** e, no outro, **Backup → Restaurar backup** (Substituir ou Juntar). Este repositório não contém dados de ninguém.

## Estrutura

- `app/` — o aplicativo (um único `index.html`, manifesto, service worker e ícones). É o que vai para o GitHub Pages.
- `desktop/` — embalagem Electron para gerar os instaladores de Windows e Mac.
- `.github/workflows/` — publicação no Pages e montagem dos instaladores a cada atualização.

Todos os direitos reservados.
