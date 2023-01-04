import ProductContainer from "../../components/product/ProductContainer";

import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  let productNumber = router.query.productId;
  let productTitle = router.query.productTitle;
  let productCategory = router.query.productCategory;
  let productPrice = router.query.productPrice;
  let productDescription = router.query.productDescription;
  let productImage = router.query.productImage;
  let productQuantity = router.query.productQuantity;

  return (
    <div>
      <ProductContainer
        productNumber={productNumber}
        productTitle={productTitle}
        productPrice={productPrice}
        productCategory={productCategory}
        productDescription={productDescription}
        productImage={productImage}
        productQuantity={productQuantity}
      />
    </div>
  );
}
