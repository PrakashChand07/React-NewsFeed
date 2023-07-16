import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import CurrentPost from "../CurrenPost/CurrentPost";
import "./Pagination.css";
import { Link } from "react-router-dom";

function YourComponent() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [data, setData] = useState(0);

  useEffect(() => {
    fetchArticles();
  }, [currentPage]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=all&apiKey=8d5ca6ca88df48d9b82621d7471a9b2c`
      )
      .then((response) => {
        setData(response.data.articles.length);
      });
  }, []);

  const takeTopic = (e) => {
    fetchArticles(e.target.innerText);
  };
  const fetchArticles = async (category = "all") => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=8d5ca6ca88df48d9b82621d7471a9b2c&page=${currentPage}&pageSize=9`
        // 8d5ca6ca88df48d9b82621d7471a9b2c
      );
      setArticles(response.data.articles);
      setTotalPages(Math.ceil(data / 10));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="category">
        <ul>
          <li>
            <Link onClick={takeTopic}>Sports</Link>
          </li>
          <li>
            <Link onClick={takeTopic}>Entertainment</Link>
          </li>
          <li>
            <Link onClick={takeTopic}>Fashion</Link>
          </li>
          <li>
            <Link onClick={takeTopic}>Business</Link>
          </li>
          <li>
            <Link onClick={takeTopic}>politics</Link>
          </li>
          <li>
            <Link onClick={takeTopic}>Automobile</Link>
          </li>
          <li>
            <Link onClick={takeTopic}>World</Link>
          </li>
        </ul>
      </div>

      <div>
        <div id="newsMainConatiner">
          {articles.map((article, idx) => (
            <CurrentPost value={article} key={idx} />
          ))}
        </div>
        <div className="Pagination">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </>
  );
}

export default YourComponent;
