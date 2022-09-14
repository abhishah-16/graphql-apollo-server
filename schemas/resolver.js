const { UserList, MovieList, BookList } = require('../data')
const _ = require('lodash')
// all functions for types
const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UserList, { id: Number(id) })
            return user
        },
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name
            const movie = _.find(MovieList, { name: name })
            return movie
        },
        books: (parent, args) => {
            return BookList
        },
        book: (parent, args) => {
            const id = args.id
            const book = _.find(BookList, { id: Number(id) })
            return book
        }

    },
    User: {
        favoritemovies: () => {
            return _.filter(MovieList, (movie) => movie.year >= 2000 && movie.year <= 2010)
        },
        favoritebooks: () => {
            return _.filter(BookList, (book) => book.isPublished == true)
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastid = UserList[UserList.length - 1].id
            user.id = lastid + 1
            UserList.push(user)
            return user
        },
        updateEmail: (parent, args) => {
            const id = args.input.id
            const email = args.input.updatedEmail
            var userupdated = null
            UserList.forEach((user) => {
                if (user.id == id) {
                    user.email = email
                    userupdated = user
                }
            })
            return userupdated
        },
        deleteUser: (parent, args) => {
            const id = args.input.id
            _.remove(UserList, (user) => user.id === Number(id))
            return null;
        },
        createMovie: (parent, args) => {
            const movie = args.input
            const lastid = MovieList[MovieList.length - 1].id
            movie.id = lastid + 1
            MovieList.push(movie)
            return movie
        },
        createBook: (parent, args) => {
            const book = args.input
            const lastid = BookList[BookList.length - 1].id
            book.id = lastid + 1
            BookList.push(book)
            return book
        }
    }
}
module.exports = { resolvers }