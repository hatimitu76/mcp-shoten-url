import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod"

// Please set the XGD_API_KEY environment.

async function main() {
  const apiKey = process.env.XGD_API_KEY;

  if (!apiKey) {
    throw new Error("XGD_API_KEY environment variable is not set.")
  }

  const server = new McpServer({
    name: "shoten-url",
    version: "1.0.0",
    capabilities: {
      tools: []
    },
  })

  server.tool("shorten_url",
    "Shortens the entered URL.",
    { url: z.string().url() },
    async ({ url }) => {
      const apiUrl = `https://xgd.io/V1/shorten?url=${encodeURIComponent(url)}&key=${apiKey}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to shorten URL: ${response.statusText}`);
      }
      const data = await response.json();
      const shortenedUrl = data.shorturl as string | undefined;
      if (!shortenedUrl) {
        throw new Error(`Shortened URL not found in response.\n${(data.message as string).replace("'key'", "API Key")}`);
      }
      return {
        content: [
          {
            type: "text",
            text: `Shortened URL: ${shortenedUrl}`,
          }
        ]
      };
    }
  )

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
