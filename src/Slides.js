import Poll from "./slides/Poll";
import Overview from "./slides/Overview";
import Starting from "./slides/Starting";
import Intro from "./slides/Intro";
import Cover from "./slides/Cover";
import Slide from "./Slide";
import Performance from "./slides/Performance";
import End from "./slides/End";

const slides = [
  {
    content: <Cover />,
    title: "MVC",
    layout: "center",
    style: { textAlign: "center" },
  },
  {
    content: <Intro />,
    title: <span style={{ fontSize: ".8em" }}>What is it?</span>,
    layout: "center",
  },
  { content: <Poll />, title: "Components", layout: "center" },
  { content: <Overview />, title: "MVC in Web Apps", layout: "center" },
  { content: <Starting />, title: "Models Using Mongoose and MongoDB", layout: "center" },
  { content: <Performance />, title: "Code Structure Using MVC", layout: "center" },
  { content: <End />, title: "Advantages of MVC", layout: "center" },
];

export const slideLength = slides.length;

const Slides = () => {
  return slides.map((props, i) => {
    return <Slide {...props} key={i} id={i + 1} />;
  });
};

export default Slides;
