export const getHeaderStyles = (isSmallerSize: boolean) => `
  bg-slate-800 
  bg-opacity-95 
  backdrop-blur-sm 
  backdrop-saturate-200 
  drop-shadow-sm 
  duration-200
  ${isSmallerSize ? 'pt-3 pb-3' : 'pt-8 pb-6 border-b-2 border-slate-900'}
`;

export const getImageStyles = (isSmallerSize: boolean) => `
  rounded-full
  ${isSmallerSize ? 'w-8 h-8' : 'w-14 h-14'}
`;

export const getNameContainerStyles = (isSmallerSize: boolean) => `
  flex
  ml-4
  ${isSmallerSize ? 'flex-row items-center' : 'flex-col'}
`;

export const getNameStyles = (isSmallerSize: boolean) => `
  text-slate-50
  font-semibold
  ${isSmallerSize ? 'text-sm' : 'text-md'}
`;

export const getSubtitleStyles = (isSmallerSize: boolean) => `
  text-slate-300
  ${isSmallerSize ? 'text-xs ml-2' : 'text-sm'}
`;
