import { IResolvers } from "graphql-tools";
import query from "./query";

// los resolvers proporcionan las respuestas a los queries que hemos definido y tambien para los mutations y subscription
const resolvers : IResolvers = {
    ...query
}

export default resolvers