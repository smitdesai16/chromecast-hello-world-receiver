import { BrandVariants, createDarkTheme, createLightTheme, teamsHighContrastTheme, Theme } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";
import { Theme as ThemeModel } from "../models/theme";
import { assertUnreachableError } from "../utilities/validator";

export const useTheme = (): Theme => {
	// use teamsDarkTheme, teamsLightTheme and teamsHighContrastTheme for default theme
	// customized theme can be generated from https://react.fluentui.dev/?path=/docs/theme-theme-designer--page
	const theme = useSelector((state: RootState) => state.user.theme);

	const brandVariants: BrandVariants = {
		10: "#050202",
		20: "#221312",
		30: "#3A1D1B",
		40: "#4D2521",
		50: "#612E27",
		60: "#75372C",
		70: "#894130",
		80: "#9D4B34",
		90: "#B15636",
		100: "#C0653E",
		110: "#C87850",
		120: "#D08A64",
		130: "#D79D78",
		140: "#DEAF8E",
		150: "#E5C1A5",
		160: "#ECD3BD",
	};

	const brandLightTheme: Theme = {
		...createLightTheme(brandVariants),
	};

	const brandDarkTheme: Theme = {
		...createDarkTheme(brandVariants),
		colorBrandForeground1: brandVariants[120],
		colorBrandForeground2: brandVariants[130],
	};

	//brandDarkTheme.colorBrandForeground1 = theme[110];
	//brandDarkTheme.colorBrandForeground2 = theme[120];

	switch (theme) {
		case ThemeModel.Light:
			return brandLightTheme;

		case ThemeModel.Dark:
			return brandDarkTheme;

		case ThemeModel.HighContrast:
			return teamsHighContrastTheme;

		default:
			return assertUnreachableError(theme);
	}
};