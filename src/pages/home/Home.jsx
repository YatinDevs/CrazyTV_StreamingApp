import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import AiringToday from "./airingToday/AiringToday";
import Releases from "./newReleases/Releases";

function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <AiringToday />
      <Releases />
      {/* <div style={{height:500}}></div> */}
    </div>
  );
}

export default Home;
