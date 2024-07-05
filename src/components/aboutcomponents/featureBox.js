const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 m-4 border rounded-lg shadow-md bg-white">
      <img src={icon} width={100} height={100}></img>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureBox;
