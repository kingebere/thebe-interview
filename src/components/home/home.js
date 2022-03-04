import React from "react";

import {useState, useEffect} from "react";
/*-------------------- External Dependencies-----------------------------------*/
import InfiniteScroll from "react-infinite-scroll-component";
import {SRLWrapper} from "simple-react-lightbox";
import axios from "axios";
/*-------------------- Components-----------------------------------*/
import Loading from "../loading/loading";

/*-------------------- Stylesheet-----------------------------------*/
import "./home.css";

/*-------------------- Lazy-Loaded Components-----------------------------------*/
const List = React.lazy(() => import("../list/list"));
const Input = React.lazy(() => import("../input/input"));
const NotFound = React.lazy(() => import("../notFound/notFound"));

const Home = () => {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("code");
  const [page, setPage] = useState(1);

  //SecretId is stored here for the review of the assessment . It is best to be stored in the env file
  const clientId = "8ZK1ch37h8XjStRCl_OKY0JQXlcswhjOuteuFa7zdBw";
  /**Onchange Function**/
  /**@param {event}  */
  /**@returns {array} query result */
  const handleChange = event => {
    event.preventDefault();
    setQuery(event.target.value);
    setResult([]);
  };

  /**FetchData Function**/
  /**@param {Number string string} page query clientId */
  /**@returns {array} page result */
  const fetchMore = () => {
    const url =
      "https://api.unsplash.com/search/photos?page=" +
      page +
      "&query=" +
      query +
      "&client_id=" +
      clientId;
    axios.get(url).then(response => {
      setResult([...result, ...response.data.results]);
    });
    setPage(page + 1);
  };

  useEffect(() => {
    fetchMore();
  }, [query]);

  return (
    <React.Suspense fallback={<Loading />}>
      <>
        <Input handleChange={handleChange} query={query} />
        <SRLWrapper>
          <InfiniteScroll
            dataLength={result.length}
            next={fetchMore}
            hasMore={true}
            loader={<Loading />}
          >
            {" "}
            <div className=" hero__container">
              <div className="hero-row">
                {result.length !== 0 ? (
                  result.map(image => <List image={image} key={image.id} />)
                ) : (
                  <NotFound />
                )}
              </div>
            </div>
          </InfiniteScroll>
        </SRLWrapper>
      </>
    </React.Suspense>
  );
};
export default Home;
