import { GraphQLServer } from "graphql-yoga";
import commands from "../commands";
import Context from "./Context";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (req): Context => ({
    authorization: req.request.get("authorization"),
    commands
  })
});

export default server;
