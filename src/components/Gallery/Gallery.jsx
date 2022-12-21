import "./Gallery.scss";

const Gallery = ({ images }) => {
  return (
    <div className="gallery__section">
      <div className="gallery-content container">
        {images.map((img) => {
          return (
            <div key={img.id} className={img.class ? img.class : ""}>
                <img src={img.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
