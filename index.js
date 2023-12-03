const {ApolloServer, gql} = require("apollo-server");
const {products} = require("./data")

const typeDefs = gql `
    
    type Query {
        products: [Product!]!
        product(id: ID!): Product
    }
    
    type Product {
        id: ID!
        name: String!
        description: String
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean
    }
    
`;

const resolvers = {
   Query: {
        products: () => {
            return products
        },
       product: (parent, args, contextValue, info) => {
            const {id} = args;
            return products.find((product) => product.id === id)
       }
   }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => console.log(`server is running at port ` + url));
