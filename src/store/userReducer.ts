import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../models/theme";
import { LanguageDir } from "../models/languageDir";
import { Language } from "../models/language";

export interface UserState {
	language: Language;
	languageDir: LanguageDir;
	theme: Theme;
}

const initialState: UserState = {
	language: Language.en,
	languageDir: LanguageDir.Ltr,
	theme: Theme.Light,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateLanguageAction: (state, action: PayloadAction<UserState["language"]>) => {
			state.language = action.payload;
		},
		updateLanguageDirAction: (state, action: PayloadAction<UserState["languageDir"]>) => {
			state.languageDir = action.payload;
		},
		updateThemeAction: (state, action: PayloadAction<UserState["theme"]>) => {
			state.theme = action.payload;
		},
	},
});

export const { updateLanguageAction, updateLanguageDirAction, updateThemeAction } = userSlice.actions;

export default userSlice.reducer;