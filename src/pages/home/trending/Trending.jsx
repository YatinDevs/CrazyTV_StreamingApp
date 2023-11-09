import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {
  const[endpoint,setEndpoint] = useState("day");

  // const {data,loading} = useFetch(`/trending/{media_type}/{time_window}`)
  const {data,loading} = useFetch(`/trending/all/${endpoint}`);

  const handleTableChange = (tab) => {
     setEndpoint(tab === "Day"?"day":"week");
  }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day","Week"]}
            onTabChange={handleTableChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending