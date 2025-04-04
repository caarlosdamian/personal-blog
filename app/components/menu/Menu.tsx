import { navLinks } from '@/app/constants';
import { MenuItem } from '../menuItem/MenuItem';

export const Menu = () => {
  return (
    <>
      <nav className="absolute left-0 right-0  h-fit  container rounded-[10px] bg-neutral-0 p-3 dark:bg-neutral-800 border-responsive z-10  md:hidden">
        <ul className="flex flex-col gap-[6px]">
          {navLinks.map((element, index) => (
            <li key={element.id} className="flex flex-col gap-[6px]">
              <MenuItem
                element={element}
                lastItem={index === navLinks.length}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative left-0 h-[170px] container bg-transparent md:hidden"></div>
    </>
  );
};
