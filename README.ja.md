# mcp-shoten-url

これはx.gdの短縮URLを作成するためのMCPサーバーです。

## インストール

注意: `XGD_API_KEY`環境変数を設定する必要があります。

### x.gdのAPIキーの取得方法

[こちらのリンク](https://x.gd/view/developer#:~:text=%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82-,API%E3%82%AD%E3%83%BC%E7%99%BA%E8%A1%8C,-%E5%85%A5%E5%8A%9B%E3%81%95%E3%82%8C)にアクセスし、メールアドレスを入力してAPIキーを発行してください。

### インストール手順

#### Claude Code/Desktopを使用する場合

Claude Codeなら`~/.claude.json`へ、Claude Desktopなら`~/Library/Application Support/Claude/claude_desktop_config.json`へ以下の設定を追加してください。

```json
{
  "mcpServers": {
    "shoten-url": {
      "command": "npx",
      "args": [
        "@hatimitu__hat/mcp-shoten-url",
      ],
      "env": {
        "XGD_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

#### VSCodeを使用する場合

settings.jsonに以下の設定を追加してください。

```json
{
  "mcp": {
    "shoten-url": {
      "command": "npx",
      "args": [
        "@hatimitu__hat/mcp-shoten-url",
      ],
      "env": {
        "XGD_API_KEY": "your_api_key_here"
      }
    }
  }
}
```
