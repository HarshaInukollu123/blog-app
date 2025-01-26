import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name : "posts",
    initialState : [],
    reducers : {
        addPost : (state, action) => {
            state.push(action.payload)
        },
        editPost : (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if (existingPost) {
              existingPost.title = title;
              existingPost.content = content;
            }
        },

        removePost: (state, action) => {
            return state.filter(post => post.id !== action.payload); // Remove the post by ID
          },
    }
})

export const { addPost, editPost , removePost} = postSlice.actions;
export default postSlice.reducer;