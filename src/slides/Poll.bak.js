const list = [
  "Model: Stores data and what to do with it - interacts with the database (CRUD), and communicates with controller",
  "Used SVG assets in a site",
  "Exported SVGs using software",
  "Created SVGs using software",
  "Edited SVG code in file/inline",
  "Animated SVGs",
  "Hand coded inline SVGs",
];

const Poll = () => {
  return (
    <ul>
      {list.map((item, i) => {
        return (
          <li className={"animateIn"} key={i}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Poll;
