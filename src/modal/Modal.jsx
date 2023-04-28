import { useState } from 'react';
import '../modal/Modal.css';
const Modall = () => {

  const [modal, setModal] = useState(false);

  const toglModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toglModal} className="btn">
        Modal
      </button>

      {modal && (
        <div className="card">
          <div onClick={toglModal} className="tittle"></div>
          <div className="card_tittle">
            <h2> Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="btn_close" onClick={toglModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
 

export default Modall;