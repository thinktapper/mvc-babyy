import styled from "styled-components";
import IconTwitter from "../icons/IconTwitter";
import IconLinkedIn from "../icons/IconLinkedIn";
import IconGithub from "../icons/IconGithub";

export const IconContainer = styled.a`
  color: #000 !important;
  width: 3rem;
  height: 3rem;
  background: #fff;
  display: inline-block;
  border-radius: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    z-index: -1;
    left: 0;
    top: 0;
    border-radius: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    transform: translate(-10px, 10px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  a {
    white-space: nowrap;
  }
`;

const Intro = () => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="animateIn">
          <p>A code structure design that separates functionality into logical segments</p>
        </div>
        <div className="animateIn">
          <p>
            ..allowing for clear “separation of concerns” and modularity of components.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
