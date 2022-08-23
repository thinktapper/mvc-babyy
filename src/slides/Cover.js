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

const Cover = () => (
  <Container>
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p>
        <strong>M</strong>odel, <strong>V</strong>iew, <strong>C</strong>ontroller
        <br /> Lecture by <a href="https://tapper.codes/">Andrew Tapper</a>
      </p>
      <div className="animateIn" style={{ display: "flex", justifyContent: "center", gap: 15 }}>
        <IconContainer
          href={"https://tapper.codes/Twitter"}
          target="_blank"
          rel="noreferrer"
        >
          <IconTwitter
            style={{ width: "52%", transform: "translate(0, -3%)" }}
          />
        </IconContainer>
        <IconContainer
          href={"https://tapper.codes/Github"}
          target="_blank"
          rel="noreferrer"
        >
          <IconGithub style={{ width: "55%" }} />
        </IconContainer>
        <IconContainer
          href={"https://tapper.codes/LinkedIn"}
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedIn
            style={{ width: "42%", transform: "translate(2%, -4%)" }}
          />
        </IconContainer>
      </div>
    </div>
  </Container>
);

export default Cover;
