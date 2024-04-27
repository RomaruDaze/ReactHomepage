import GithubGraph from "./GithubGraph";
import GithubStats from "./GithubStats";
import GithubStreak from "./GithubStreak";
import GithubToplang from "./GithubToplang";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GithubPanel = () => {
  return (
    <div className="gitPan">
      <br />
      <br />
      <h2>Stats</h2>
      <Container fluid="md" className="container">
        <Row>
          <Col>
            <div className="gitcom">
              <GithubStreak />
            </div>
          </Col>
          <Col>
            <div className="gitcom">
              <GithubStats />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="gitcom">
              <GithubToplang />
            </div>
          </Col>
          <Col>
            <div className="gitcom">
              <GithubGraph />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GithubPanel;
