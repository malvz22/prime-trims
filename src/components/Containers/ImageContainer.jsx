const ImageContainer = ({ children, onClick }) => {
  return (
    <div className="image-container" onClick={onClick}>
      {children}
    </div>
  );
};

export default ImageContainer;
