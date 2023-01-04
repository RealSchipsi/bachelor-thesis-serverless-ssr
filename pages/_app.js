import Layout from "../components/layout/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <style>
        {`
          body {
            margin: 0;
            background-color: #101010;
          }
        `}
      </style>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
