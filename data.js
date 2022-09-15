const UserList = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                email: "PedroTech@gmail.com",
                age: 20,
                nationality: "BRAZIL",
            },
            {
                id: 5,
                name: "Kelly",
                email: "kelly2019@gmail.com",
                age: 5,
                nationality: "CHILE",
            },
        ],
    },
    {
        id: 2,
        name: "Pedro",
        email: "PedroTech@gmail.com",
        age: 20,
        nationality: "BRAZIL",
        friends: [
            {
                id: 5,
                name: "Kelly",
                email: "kelly2019@gmail.com",
                age: 5,
                nationality: "CHILE",
            }
        ]
    },
    {
        id: 3,
        name: "Sarah",
        email: "cameron@gmail.com",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                email: "PedroTech@gmail.com",
                age: 20,
                nationality: "BRAZIL",
            },
        ],
    },
    {
        id: 4,
        name: "Rafe",
        email: "rafe123@gmail.com",
        age: 60,
        nationality: "GERMANY",
        friends: [
            {
                id: 5,
                name: "Kelly",
                email: "kelly2019@gmail.com",
                age: 5,
                nationality: "CHILE",
            }
        ]
    },
    {
        id: 5,
        name: "Kelly",
        email: "kelly2019@gmail.com",
        age: 5,
        nationality: "CHILE",
        friends: [
            {
                id: 2,
                name: "Pedro",
                email: "PedroTech@gmail.com",
                age: 20,
                nationality: "BRAZIL",
            }
        ]
    },
    {
        id: 6,
        name: "abhi",
        email: "abhishah@gmail.com",
        age: 20,
        nationality: "BRAZIL",
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        year: 2019,
        inTheater: true,
    },
    {
        id: 2,
        name: "Interstellar",
        year: 2007,
        inTheater: true,
    },
    {
        id: 3,
        name: "Superbad",
        year: 2009,
        inTheater: true,
    },
    {
        id: 4,
        name: "PedroTech The Movie",
        year: 2035,
        inTheater: false,
    },
];
const BookList = [
    {
        id: 1,
        name: 'truth',
        author: 'abhishah',
        isPublished: true
    },
    {
        id: 2,
        name: 'lie',
        author: 'abhishah',
        isPublished: false
    },
    {
        id: 3,
        name: 'sci-fi',
        author: 'abhishah',
        isPublished: true
    },
    {
        id: 4,
        name: 'mind',
        author: 'abhishah',
        isPublished: false
    }
]

module.exports = { UserList, MovieList, BookList }
