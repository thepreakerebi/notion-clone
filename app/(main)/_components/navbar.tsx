"use client";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}
const Navbar = ({ isCollaped, onResetWidth }: NavbarProps) => {
  return <div>This is navbar component</div>;
};

export default Navbar;
