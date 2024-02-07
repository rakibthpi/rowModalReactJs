import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { MouseEvent, createContext, useContext, useRef } from "react";
const ModelContext = createContext<TClose | null>(null);
type TClose = {
  onClose: () => void;
};

type THeader = {
  children?: React.ReactNode;
};
type CloseButton = THeader;
type TModalButton = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: TModalButton) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    console.log(e.target);
    console.log(containerRef.current);
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModelContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 bg-gray-500/70 invisible z-[999] flex justify-center items-center",
          {
            visible: isOpen,
          }
        )}
        onClick={handleClick}
      >
        <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md">
          {children}
        </div>
      </div>
    </ModelContext.Provider>,

    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: CloseButton) => {
  const { onClose } = useContext(ModelContext) as TClose;
  return (
    <button onClick={onClose} className="ml-auto">
      {children ? (
        children
      ) : (
        <svg
          className="size-6 bg-sky-600 text-white p-1 rounded-md"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return <div className="flex w-full">{children}</div>;
};

Modal.Header = Header;

Modal.CloseButton = CloseButton;

export default Modal;
