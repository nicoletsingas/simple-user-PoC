import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
    nome: string;
    email: string;
    isVerified: boolean;
    isLoading: boolean;
}

const initialState: UserState = {
    nome: 'n/a',
    email: 'n/a',
    isVerified: false,
    isLoading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        verify: (state: UserState) => {
            state.isVerified = true;
        },
        editName: (state: UserState, action: PayloadAction<string>) => {
            state.nome = action.payload;
        },
        editEmail: (state: UserState, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});


export const { editName, editEmail, verify } = userSlice.actions;
export default userSlice.reducer;