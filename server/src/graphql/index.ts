import { ApolloServer } from "apollo-server-express";
import typeDefs from "../schema";
import resolvers from "../resolvers/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const configureServer = async (app: any) => {
  await server.start();
  server.applyMiddleware({ app });
};
