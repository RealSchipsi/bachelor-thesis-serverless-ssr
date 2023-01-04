import styles from "../../styles/ProductSection.module.css";

import ProductTile from "./ProductTile";

const ProductSection = ({ data, categoryId, sectionTitle }) => {
  let rows = [];
  let columns = [];

  // build dynamic row with three columns for products
  data.data.forEach((data, index) => {
    if (index % 3 === 0) {
      rows.push(<div className={styles.productSectionRow}>{columns}</div>);
      columns = [];
    }
    columns.push(<ProductTile productData={data} />);
  });

  if (columns.length) {
    rows.push(<div className={styles.productSectionRow}>{columns}</div>);
  }

  return (
    <div className={styles.productSection}>
      <h1>{sectionTitle}</h1>
      {rows}
    </div>
  );
};

export default ProductSection;
