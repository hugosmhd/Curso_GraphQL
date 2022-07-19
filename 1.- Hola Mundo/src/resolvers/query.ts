import { IResolvers } from "graphql-tools";

// los resolvers proporcionan las respuestas a los queries que hemos definido y tambien para los mutations y subscription
const query : IResolvers = {
    Query : {
        hola(): string{
            return 'Hola mundo';
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola mundo en el curso de GraphQL';
        }
    }    
}

export default query