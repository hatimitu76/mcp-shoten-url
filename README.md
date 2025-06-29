# mcp-shoten-url

[日本語バージョン](https://github.com/hatimitu76/mcp-shoten-url/blob/master/README.ja.md)

This is an MCP server for creating shortened URLs using x.gd.

## Installation

Note: You need to set the `XGD_API_KEY` environment variable.

### How to get an x.gd API key

Access [this link](https://x.gd/view/developer#:~:text=%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82-,API%E3%82%AD%E3%83%BC%E7%99%BA%E8%A1%8C,-%E5%85%A5%E5%8A%9B%E3%81%95%E3%82%8C) and enter your email address to issue an API key.

### Installation Steps

#### When using Claude Code/Desktop

For Claude Code, add the following settings to `~/.claude.json`. For Claude Desktop, add them to `~/Library/Application Support/Claude/claude_desktop_config.json`.

```json
{
  "mcpServers": {
    "shoten-url": {
      "command": "npx",
      "args": [
        "@hatimitu__hat/mcp-shoten-url"
      ],
      "env": {
        "XGD_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

#### When using VSCode

Add the following settings to your settings.json:

```json
{
  "mcp": {
    "shoten-url": {
      "command": "npx",
      "args": [
        "@hatimitu__hat/mcp-shoten-url"
      ],
      "env": {
        "XGD_API_KEY": "your_api_key_here"
      }
    }
  }
}
```
