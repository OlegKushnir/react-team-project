import s from "./Auth.module.css"


const ModalAuth = ({ text, handleClose }) => {
  return (
    <div className={s.modal}>
      <p className={s.modal_text}>{text}</p>
      <button type="button" onClick={handleClose} className={s.modal_button}></button>
    </div>
  );
};

export default ModalAuth;
