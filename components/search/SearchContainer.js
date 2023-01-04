import styles from "../../styles/SearchContainer.module.css";

import { useState } from "react";

import { useRouter } from "next/router";

import { RiSearchLine } from "react-icons/ri";

const SearchContainer = (searchData) => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [displaySuggestionBox, setDisplaySuggestionBox] = useState();
  const [errorMessageSearch, setErrorMessageSearch] = useState("");

  // suggest Products in list
  const suggestProducts = (text) => {
    setSearchValue(text);

    let emptyArray = [];

    if (text != "") {
      let resultCheck;

      emptyArray = searchData.data.filter((data) => {
        return data.toLocaleLowerCase().startsWith(text.toLocaleLowerCase());
      });

      if (emptyArray.length > 10) {
        emptyArray = emptyArray.slice(0, 10);
      }

      emptyArray = emptyArray.map((data) => {
        resultCheck = data;
        return (data = `<li>${data}</li>`);
      });

      if (resultCheck != undefined) {
        document.getElementById("suggestionBox").style.display = "block";
        showSuggestions(emptyArray);
        let allList = document
          .getElementById("suggestionBox")
          .querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
          allList[i].onclick = () => selectSuggestion(allList[i].textContent);
        }
      } else {
        return;
      }
    } else {
      document.getElementById("suggestionBox").style.display = "none";
    }
  };

  // add data to list
  const showSuggestions = (list) => {
    let listData;
    if (!list.length) {
      let productValue = searchValue;
      listData = `<li>${productValue}</li>`;
    } else {
      listData = list.join("");
    }

    document.getElementById("suggestionBox").innerHTML = listData;
  };

  // select suggestion and search for product
  const selectSuggestion = (productName) => {
    fetch(process.env.HOST_URL + "/api/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: productName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          router.push({
            pathname: "/product/[productId]",
            query: {
              productId: data.data.articlenumber,
              productTitle: data.data.title,
              productCategory: data.data.category,
              productDescription: data.data.description,
              productImage: data.data.image,
              productQuantity: data.data.quantity,
            },
          });
        }
      });
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContainerHeader}>
        <div className={styles.searchContainerInput}>
          <input
            type="text"
            placeholder="Search ..."
            value={searchValue}
            onChange={(text) => suggestProducts(text.target.value)}
          />
        </div>
        <div className={styles.searchContainerInputIcon}>
          <RiSearchLine color="#a5a5a5" fontSize="28px" />
        </div>
      </div>
      <div className={styles.searchContainerBody}>
        <div id="suggestionBox" className={styles.searchContainerList}></div>
        <div className={styles.searchContainerError}>{errorMessageSearch}</div>
      </div>
    </div>
  );
};

export default SearchContainer;
