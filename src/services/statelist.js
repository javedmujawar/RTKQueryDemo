import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const stateListApi = createApi({
reducerPath:"states",
baseQuery:fetchBaseQuery({    baseUrl:"https://api.npoint.io/"}),
endpoints:(builder)=>({
    getStates:builder.query({
        query:()=>`2c71ded6354de7428006`
    })
})
});

export const {useGetStatesQuery} = stateListApi;