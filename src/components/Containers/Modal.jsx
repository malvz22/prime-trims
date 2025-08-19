import { IoClose } from "react-icons/io5";

const Modal = ({ modalOpen, onClose, children }) => {
  if (!modalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100]"
      onClick={onClose}
    >
      <div className="shadow-lg max-w-[95vw] md:max-w-[90vw] lg:max-w-[900px] max-h-[90vh] md:max-h-[85vh] w-full relative">
        <div
          onClick={onClose}
          className="absolute top-[-2%] right-[-5%] translate-x-[-50%] translate-y-[-50%] text-white cursor-pointer hover:text-gray-600 transition-colors duration-300"
        >
          <IoClose size={24} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
