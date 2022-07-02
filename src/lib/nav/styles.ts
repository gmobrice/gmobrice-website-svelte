export const getLinkStyles = (isSmallerSize: boolean, active: string, current: string) => `
  text-slate-50
  duration-100
  hover:text-sky-300
  hover:ease-in
  ${isSmallerSize ? 'text-sm' : 'text-md'}
  ${active === current ? 'font-semibold text-sky-400 hover:text-sky-400' : ''}
`;

export const getButtonStyles = (isSmallerSize: boolean) => `
  rounded-full 
  bg-rose-500 
  text-slate-50 
  text-sm 
  duration-100 
  hover:bg-rose-600 
  hover:ease-in 
  active:bg-rose-800 
  active:ease-in
  ${isSmallerSize ? 'py-2 px-4' : 'py-3 px-6'}
`;
