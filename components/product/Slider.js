import styles from "../../styles/ProductSlider.module.css";

import SliderTile from "./SliderTile";

const Slider = ({ data, sliderName, sliderType }) => {
  let dataArr = [];

  // display row with categories and products
  data.data.forEach((data, index) => {
    dataArr.push(<SliderTile productData={data} sliderTileType={sliderType} />);
  });

  return (
    <div className={styles.slider}>
      <h1>{sliderName}</h1>
      <div className={styles.sliderTiles}>{dataArr}</div>
    </div>
  );
};

export default Slider;
