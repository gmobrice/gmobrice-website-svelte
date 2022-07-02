const defaultLinkStyle = 'text-slate-50 hover:text-sky-300 duration-100 hover:ease-in';
const fullSizedLinkStyle = `${defaultLinkStyle} text-md`;
const smallerLinkStyle = `${defaultLinkStyle} text-sm`;

const defaultButtonStyle =
	'rounded-full bg-rose-500 text-slate-50 text-sm duration-100 hover:bg-rose-600 hover:ease-in active:bg-rose-800 active:ease-in';
const fullSizedButtonStyle = `${defaultButtonStyle} py-3 px-6`;
const smallerButtonStyle = `${defaultButtonStyle} py-1 px-4`;

export const getLinkStyle = (isSmallerSize: boolean, active: string, current: string) => {
	let currentStyles = isSmallerSize ? smallerLinkStyle : fullSizedLinkStyle;
	if (active === current) {
		currentStyles += ' font-semibold text-sky-400 hover:text-sky-400';
	}

	return currentStyles;
};

export const getButtonStyle = (isSmallerSize: boolean) =>
	isSmallerSize ? smallerButtonStyle : fullSizedButtonStyle;
