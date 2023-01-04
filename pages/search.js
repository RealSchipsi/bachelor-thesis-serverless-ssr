import SearchContainer from "../components/search/SearchContainer";

export default function Search(props) {
  return (
    <div>
      <SearchContainer data={props.searchData} />
    </div>
  );
}

// get all products
export async function getStaticProps() {
  let productData = await fetch(process.env.HOST_URL + "/api/products", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  productData = await productData.json();

  let searchData = [];

  for (let i = 0; i < productData.data.length; i++) {
    searchData.push(productData.data[i].title);
  }

  return {
    props: { searchData },
  };
}
