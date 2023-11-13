import Style from "./style.module.css";
import PopupProps from "./prop";

const Popup: React.FC<PopupProps> = ({ close, open, children }) => {
  return (
    <>
      {open && (
        <div className={Style.popup}>
          <div className={Style.modal}>
            <div className={Style.closeContainer}>
              <h3>Popup</h3>
              <div onClick={() => close?.(false)} className={Style.close}>
                X
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
