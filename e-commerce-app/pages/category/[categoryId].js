import ProductSection from "../../components/product/ProductSection";

import { useRouter } from "next/router";

export default function Category(props) {
  const router = useRouter();

  let categoryId = router.query.categoryId;
  let sectionTitle = router.query.sectionTitle;

  return (
    <div>
      <ProductSection
        data={props.productData}
        categoryId={categoryId}
        sectionTitle={sectionTitle}
      />
    </div>
  );
}

// get all products
export async function getStaticProps(params) {
  let productData = await fetch(process.env.HOST_URL + "/api/products", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      categoryId: params.params.categoryId,
    }),
  });

  productData = await productData.json();

  return {
    props: { productData },
  };
}

// get all categories for dynamic routes
export async function getStaticPaths() {
  let categoryData = await fetch(process.env.HOST_URL + "/api/categories", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  categoryData = await categoryData.json();

  let paths = [];

  categoryData.data.forEach((data, index) => {
    paths.push({ params: { categoryId: data.categorynumber } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
