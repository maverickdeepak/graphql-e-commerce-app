const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql `
    type Query {
        hello: String!
        totalUsers: Int!
        isAdmin: Boolean!
        productPrice: Float!
        fruits: [String]
    }
`;

const resolvers = {
   Query: {
       hello: () => {
           return "Hello GraphQL";
       },
       totalUsers: () => {
           return 50;
       },
       isAdmin: () => {
           return false;
       },
       productPrice: () => {
           return 99.99;
       },
       fruits: () => {
           return ["Apple", "Mango", "Grapes"]
       }
   }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => console.log(`server is running at port ` + url));
