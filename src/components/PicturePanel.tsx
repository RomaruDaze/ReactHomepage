import Codingskill from "./Codingskill";
import GithubPanel from "./GithubPanel";
import ProfilePic from "./ProfilePic";
import WorksCarousel from "./WorksCarousel";

const PicturePanel = () => {
  return (
    <div>
      <div className="profgrid">
        <div className="profPic">
          <ProfilePic />
        </div>
        <div className="skillPic">
          <Codingskill />
        </div>
        <div className="workCarr">
          <WorksCarousel />
        </div>
      </div>
      <div className="gitPanel">
        <GithubPanel />
      </div>
    </div>
  );
};

export default PicturePanel;
