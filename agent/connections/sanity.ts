import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sanity.io",
  description: "Fetch and manage structured content.",
  auth: connect("mcp.sanity.io/prj_Fm7vpP0vKI8LiQl8R1Glsb84FafE"),
});
