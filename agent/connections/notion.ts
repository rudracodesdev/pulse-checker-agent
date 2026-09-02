import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.notion.com/mcp",
  description: "Notion workspace: search and edit pages and databases.",
  auth: connect("mcp.notion.com/prj_Fm7vpP0vKI8LiQl8R1Glsb84FafE"),
});
