const ServiceCard = ({ icon, name, description, bgColor, textColor }) => {
  return (
    <div
      className={`w-full max-w-full aspect-[2/1] justify-center items-center flex flex-col gap-3 ${bgColor} ${textColor} px-4 py-6 rounded-lg shadow-md`}
    >
      <div className="text-5xl">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
