// import {nanoid} from 'nanoid'

// const nanoid = require('nanoid');

const {GraphQLID} = require('graphql');
const { v4: uuidv4 } = require('uuid');


class Course {
    constructor(id, {
        courseName, category, price, language, email, stack, teachingAssists
    }){
        this.id = id
        this.courseName = courseName
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.teachingAssists = teachingAssists
    }
}


const courseHolder = {}

const resolvers = {
    getCourse : ({ id }) => {
        return new Course(id, courseHolder[id])
    },
    createCourse : ({ input }) => {
        let id = uuidv4();
        // id: {
        //     type: new GraphQLNonNull(GraphQLID)
        // }
        courseHolder[id] = input
        return new Course(id, input)
    }
}

module.exports = resolvers;

//constructor expects that user fill the follows details and then set it up




















// mutation {
//     createCourse(input: {
//       courseName: "graphQL Basics To PRO!"
//       price: 245 
//       stack: WEB
//       teachingAsssists: [
//         {
//           firstName: "ERRT" 
//           lastName: "BNM"
//           experience: 2
//         }, 
//         {
//           firstName: "ABC"
//           lastName: "GHJ"
//           experience: 1
//         }, 
//         {
//           firstName: "POI" 
//           lastName: "GHU" 
//           experience: 3}
//       ]
//     })
  