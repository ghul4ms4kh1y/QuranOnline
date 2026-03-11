import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GiOpenBook } from "react-icons/gi";


export default function NavbarComp() {

  return (
    <Navbar fluid rounded>
      <div className="mx-auto">
        <NavbarBrand>
          <div className="flex items-center justify-center p-3">
            <GiOpenBook size={50} color="gray" className="absolute"/>
            <span className="relative text-3xl font-['Montserrat'] font-extrabold tracking-tight text-[#00D4FF]">MyQur'an</span>
          </div>
        </NavbarBrand>
      </div>
      <div className="flex md:order-2">
      </div>
    </Navbar>
  );
}