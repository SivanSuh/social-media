import Style from "./style.module.css";
import DropdownProps from "./props";

const Dropdown: React.FC<DropdownProps> = ({
  children,
  open = false,
  setOpen,
  values,
}) => {
  return (
    <div className={Style.dropdown}>
      <div onClick={() => setOpen?.(!open)}>{values}</div>
      <div>
        {open && <main className={Style.dropdownMenu}>{children}</main>}
      </div>
    </div>
  );
};

export default Dropdown;
