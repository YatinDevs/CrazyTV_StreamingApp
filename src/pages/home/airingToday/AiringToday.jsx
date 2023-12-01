import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

function AiringToday() {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(
    `/${endpoint}/${endpoint == "movie" ? "upcoming" : "airing_today"}`
  );
  const handleTableChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        {" "}
        <span className="carouselTitle">
          {" "}
          {endpoint == "movie" ? "Upcoming" : "Airing Today"}
        </span>
        <SwitchTabs
          data={["Movies", "TV Shows"]}
          onTabChange={handleTableChange}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
}

export default AiringToday;
