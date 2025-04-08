import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  infos: Record<string, unknown>;
  isLogin: boolean;
}

const initialUserState: UserState = {
  infos: {},
  isLogin: false
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.infos = action.payload;
    },
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    }
  }
});

export const { setUser, setLoginStatus } = userSlice.actions;

export const userReducer = userSlice.reducer;
