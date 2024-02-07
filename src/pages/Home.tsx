import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Button onClick={handleModal} className={"rakibs"} variant={"solid"}>
        Open Modal
      </Button>
      <Modal isOpen={modal} onClose={handleModal}>
        <Modal.Header>
          <Modal.CloseButton></Modal.CloseButton>
        </Modal.Header>
        <h1>This is a modal</h1>
      </Modal>
    </div>
  );
};

export default Home;
