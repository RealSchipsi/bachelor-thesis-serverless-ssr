import Hero from "../components/product/Hero";
import Slider from "../components/product/Slider";
import ProductSection from "../components/product/ProductSection";

import DividerSmall from "../components/common/DividerSmall";

import Head from "next/head";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>SportX | Sport Clothing</title>
        <meta
          name="description"
          content="Get the hardest Sport Clothes for the hardest trainings."
        />
      </Head>
      <Hero />
      <DividerSmall />
      <Slider
        sliderName={"Popular products"}
        sliderType={"product"}
        data={props.productData}
      />
      <DividerSmall />
      <Slider
        sliderName={"Categories"}
        sliderType={"category"}
        data={props.categoryData}
      />
      <DividerSmall />
      <ProductSection
        categoryId={"all"}
        sectionTitle={"New Collection"}
        data={props.productData}
      />
    </div>
  );
}

export async function getStaticProps() {
  let productData = await fetch(process.env.HOST_URL + "/api/products", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  productData = await productData.json();

  let categoryData = await fetch(process.env.HOST_URL + "/api/categories", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  categoryData = await categoryData.json();

  return {
    props: { productData, categoryData },
  };
}
