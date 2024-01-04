import { BrandVariants, createLightTheme, Theme } from "@fluentui/react-components";

export const useTheme = (): Theme => {
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
	return brandLightTheme;
};