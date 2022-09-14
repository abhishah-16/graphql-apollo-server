const { gql } = require('apollo-server')

const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        email: String!
        age: Int!
        nationality: String!
        friends: [User!]
        favoritemovies: [Movie!]
        favoritebooks: [Book!]
    }
    type Movie{
        id: ID!
        name: String!
        year: Int!
        inTheater: Boolean!
    }
    type Book{
        id: ID!
        name: String!
        author: String!
        pages: Int
        isPublished: Boolean!
    }
    input createUserInput{
        name: String!
        email: String!
        age: Int!
        nationality: String!
    }
    input updateuserEmail{
        id:ID!
        updatedEmail: String
    }
    input deleteUser{
        id:ID!
    }
    input createMovieInput{
        name: String!
        year: Int!
        inTheater: Boolean!
    }
    input createBookInput{
        name: String!
        author: String!
        pages: Int
        isPublished: Boolean!
    }
    type Mutation{ 
        createUser(input: createUserInput!): User
        updateEmail(input: updateuserEmail!): User
        deleteUser(input: deleteUser!): User
        createMovie(input: createMovieInput!): Movie
        createBook(input: createBookInput): Book
    }
    type Query{
        users:[User!]!
        user(id:ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
        books:[Book!]!
        book(id:ID!):Book!
    }
`
module.exports = { typeDefs }