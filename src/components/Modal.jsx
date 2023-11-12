import Element from "./Element";
import "./Modal.css";
// eslint-disable-next-line react/prop-types
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground" onClick={() => setOpenModal(false)}>
      <div className="modalContainer">
        <div className="header">
            <div className="hidden"> aaa </div>
            <div className="title">Welcome</div>
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              x
            </button>
          </div>
        </div>

        <div className="body">
          <p className="message">This is window!</p>
          <div className="elements-container">
            <Element>1</Element>
            <Element>2</Element>
            <Element>3</Element>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
