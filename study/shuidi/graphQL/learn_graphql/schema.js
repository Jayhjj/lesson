import {
    GraphQLObjectType,
    GraphQLSchems,
    GraphQLString,
    GraphQLList
}from 'graphql'
import axios from 'axios'
const API_BASE = 'http://localhost:3300';
const PostType = new GraphQLObjectType({
    name:'Post',
    fields:{
        id:{
            type:GraphQLString
        },
        title:{
            type:GraphQLString
        },
        content:{
            type:GraphQLString
        },
    }
})
//mobgodb schema 数据不在他这里  规则
const QueryRootType = new GraphQLObjectType({
    name:'QueryRoot',
    fields:{
        greeting:{
            type:GraphQLString,
            //展示了什么  上接vue接口需要 ，下接数据的真实请求
            resolve:() => `hello!`
        },
        posts:{
            type:new GraphQLList(PostType),
            resolve:() => {
                return axios.get(`${API_BASE}/posts`)
                    .then(response => response.data)
            }
        }
    }
})

export default new GraphQLSchems({
    query: QueryRootType
    // mutation
})