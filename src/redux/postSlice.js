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
    }
})

export const { addPost, editPost } = postSlice.actions;
export default postSlice.reducer;