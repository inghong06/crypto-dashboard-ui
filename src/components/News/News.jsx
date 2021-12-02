import React, { useState, useEffect } from "react";
import { fetchNews } from "../../api";
import "./news.css";
import moment from "moment";
const News = ({ simplified, query }) => {
  const [news, setNews] = useState([]);
  const count = simplified ? 10 : 30;

  useEffect(() => {
    const fetchApi = async () => {
      const temp = await fetchNews(query, count);
      setNews(temp);
    };
    fetchApi();
  }, []);

  if (news.length === 0) return "Loading";

  console.log(news)
  return (
    <div className="news-container section__padding">
      <div className="news-header">
        <h2>Recent News</h2>
        {simplified && <h4>See More</h4>}
      </div>
      <div className="news-content">
        {news.map(
          (
            {
              name,
              description,
              url,
              provider,
              datePublished,
              image
            },
            index
          ) => (
            <a href={url} target="_blank" rel="noreferrer" key={index}>
              <div className="news-content-card" >
                <div className="news-content-card-image">
                  <img src={image?.thumbnail?.contentUrl} />
                </div>
                <div className="news-content-card-detail">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <div className="news-content-card-detail-footer">
                    <div className="news-content-card-detail-footer-publisher">
                      <div className="news-content-card-detail-footer-publisher-image">
                        <img src={provider[0]?.image?.thumbnail?.contentUrl} />
                      </div>

                      <p>{provider[0]?.name}</p>
                    </div>
                    <div className="news-content-card-detail-footer-date">
                      <p>{moment(datePublished).startOf("ss").fromNow()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default News;
