import server from "./server";
import debug from "./debug";

server.start(() => debug(`The server is running on http://localhost:4000`));
