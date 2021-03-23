// import {buildSchema} from 'graphql'

const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category:String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAsssists: [TeachingAssist]
    }

    type TeachingAssist {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id:ID): Course  
    }

    input CourseInput{
        id: ID
        courseName: String!
        category:String
        price: Int!
        language: String
        email: String
        stack: Stack
        teachingAsssists: [TeachingAssistInput]!
    }

    input TeachingAssistInput{
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation{
        createCourse(input:CourseInput): Course
    }
`)

// this getCourse method receives a id and returning a course 

// ! --> is for compulsory field

// these Course and TeachAssist are custom datatypes which has different properties.

// Resolver is responsible for taking a query and sending back the response.

module.exports = schema;