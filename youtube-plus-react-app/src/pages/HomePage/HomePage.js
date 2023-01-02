import RecommendedVideoList from "../../containers/RecommendedVideoList/RecommendedVideoList";
import TrendingVideoList from "../../containers/TrendingVideoList/TrendingVideoList";
import Jumbotron from "./Jumbotron/Jumbotron";
import LatestVideo from "./LatestVideo/LatestVideo";

const HomePage = () => {
  return (
    <div>
      <Jumbotron />

      <h2>Latest Videos | Props Demo</h2>
      <div className="row">
        <div className="col-md-3">
          <LatestVideo 
            id="rwetwetetwe3242134"
            title="Argentina v France | FIFA World Cup 2022"
            thumbnailUrl="https://via.placeholder.com/250x200/0000FF/ffffff?text=THE%20GREATEST%20FINAL"
            channel="FIFA"
            views="6.6M"
            publishedDate="6 days ago">
            Watch highlights of Arg v France's Final at the FIFA World Cup Qatar 2022. 
          </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            id="retyertyrtry3456345"
            title="Brazil vs France"
            thumbnailUrl="https://via.placeholder.com/250x200/008000/ffffff?text=BrazilVsFrance"
            channel="FIFA"
            views="5M"
            publishedDate="7 days ago">
            Watch highlights of Brazil vs France at the FIFA World Cup Qatar 2022.
            </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            id="fhgjfgjghj697678"
            title="France Vs Morocco"
            thumbnailUrl="https://via.placeholder.com/250x200/ffff00/000000?text=France Vs Morocco"
            channel="FIFA"
            views="5.5M"
            publishedDate="8 days ago">
            Watch highlights of France Vs Morocco at the FIFA World Cup Qatar 2022.
            </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            id="nvnmngjkghj447654"
            title="Argentina Vs South Korea"
            thumbnailUrl="https://via.placeholder.com/250x200/ff0000/000000?text=Argentina Vs S.Korea"
            channel="FIFA"
            views="5M"
            publishedDate="9 days ago">
            Watch highlights of Argentina Vs South Korea at the FIFA World Cup Qatar 2022.
            </LatestVideo>
        </div>
      </div>

      <hr />
      <h2>Trending Videos | Class Comp, States, Events, Props Demo</h2>
      <TrendingVideoList />

      <hr />
      <h2>Recommended Videos | Class Comp, States, Events, Conditional Rendering, Lists &  Keys, Updating State Immutably Demo</h2>
      <RecommendedVideoList />

    </div>
  );
}

export default HomePage;