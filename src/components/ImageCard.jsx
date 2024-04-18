export const ImageCard = ({ iconUrl, name }) => {
  return (
    <div className="product">
      <img src={iconUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};
