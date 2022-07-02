const defaultHeaderStyle =
	'bg-slate-800 bg-opacity-95 backdrop-blur-sm backdrop-saturate-200 drop-shadow-sm duration-200';
const fullSizedHeaderStyle = `${defaultHeaderStyle} pt-8 pb-6 border-b-2 border-slate-900`;
const smallerHeaderStyle = `${defaultHeaderStyle} pt-3 pb-3`;

const defaultImageStyle = 'rounded-full';
const fullSizedImageStyle = `${defaultImageStyle} w-14 h-14`;
const smallerImageStyle = `${defaultImageStyle} w-8 h-8`;

const defaultNameContainerStyle = 'flex ml-4';
const fullSizedNameContainerStyle = `${defaultNameContainerStyle} flex-col`;
const smallerNameContainerStyle = `${defaultNameContainerStyle} flex-row items-center`;

const defaultNameStyle = 'text-slate-50 font-semibold';
const fullSizedNameStyle = `${defaultNameStyle} text-md`;
const smallerNameStyle = `${defaultNameStyle} text-sm`;

const defaultSubtitleStyle = 'text-slate-300';
const fullSizedSubtitleStyle = `${defaultSubtitleStyle} text-sm`;
const smallerSubtitleStyle = `${defaultSubtitleStyle} text-xs ml-2`;

export const getHeaderStyle = (isSmallerSize: boolean) =>
	isSmallerSize ? smallerHeaderStyle : fullSizedHeaderStyle;

export const getImageStyle = (isSmallerSize: boolean) =>
	isSmallerSize ? smallerImageStyle : fullSizedImageStyle;

export const getNameContainerStyle = (isSmallerSize: boolean) =>
	isSmallerSize ? smallerNameContainerStyle : fullSizedNameContainerStyle;

export const getNameStyle = (isSmallerSize: boolean) =>
	isSmallerSize ? smallerNameStyle : fullSizedNameStyle;

export const getSubtitleStyle = (isSmallerSize: boolean) =>
	isSmallerSize ? smallerSubtitleStyle : fullSizedSubtitleStyle;
