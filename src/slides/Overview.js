const Overview = () => {
  return (
    <>
      <p className="animateIn">Models are implemented using large scale data storage</p>
      <ul>
        <li className="animateIn">
          MySQL, MongoDB, and PostgreSQL are the most popular databases
        </li>
        <li className="animateIn">
          Database interfaces such as Mongoose can be considered part of the model since their primary function is talking to the db
        </li>
      </ul>
      <p className="animateIn">Views are created using templating languages</p>
      <ul>
        <li className="animateIn">
          EJS, Handlebars, Pug, and of course..
        </li>
        <li className="animateIn">
          ..React, which is the most popular templating language for web apps
        </li>
      </ul>
      <p className="animateIn">Controllers use JavaScript to dictate how the application behaves and what data is sent between the views and the model</p>
    </>
  );
};

export default Overview;
