import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

type Props = {};
let SCROLL_POS = 100;

function Navbar({}: Props) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const router = useRouter();

  const nav_links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "explore", path: "/explore" },
  ];

  const mobile_nav_links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "explore", path: "/explore" },
    { name: "contact us", path: "/contact" },

  ];

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   console.log(scrollPosition)
  return (
    <div
      className={`${
        scrollPosition >= SCROLL_POS
          ? `transition ease-in-out delay-150 bg-white duration-100 shadow `
          : `${router.pathname === "/" ? "" : "bg-white capitalize "}`
      } fixed w-full z-50`}
    >
      <div className="max-w-7xl w-full mx-auto px-2 h-20 flex flex-row items-center space-x-6">
        <Link
          href={"/"}
          className="logo text-primary-original text-lg font-semibold"
        >
          TengaImba
        </Link>
        <div className="flex-1"></div>
        <div
          className={`${
            scrollPosition >= SCROLL_POS
              ? "text-slate-700 "
              : `${
                  router.pathname === "/" ? "text-white " : "text-slate-700"
                }  `
          } md:flex hidden flex-row items-center space-x-8  capitalize`}
        >
          {nav_links.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`${
                router.pathname === item.path
                  ? "text-primary-original border-b-2 border-primary-original "
                  : " "
              } flex cursor-pointer font-semibold `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href={"/contact"}
          className="md:flex hidden contact bg-primary-original text-white font-semibold capitalize rounded-full px-3 py-2"
        >
          Contact
        </Link>
        <Menu>
          <MenuButton>
            <div className="md:hidden flex">
              <Bars3BottomRightIcon
                height={24}
                width={24}
                className={`${
                  scrollPosition >= SCROLL_POS ? "text-slate-700" : `${router.pathname === '/' ? "text-white" : "text-slate-700" }`
                } `}
              />
            </div>
          </MenuButton>
          <MenuList>
            {mobile_nav_links.map((item, index) => (
              <MenuItem key={index}>
                <Link
                  href={item.path}
                  className={`${
                    router.pathname === item.path
                      ? "text-primary-original border-b-2 border-primary-original "
                      : " "
                  } flex cursor-pointer font-semibold `}
                >
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
