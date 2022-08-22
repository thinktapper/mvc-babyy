const Poll = () => {
  return (
    <>
      <ul>
        <li className="animateIn">
          <strong>Model:</strong> Stores data and what to do with it - interacts with the database (CRUD), and communicates with controller
        </li>
        <li className="animateIn">
          <strong>View:</strong> Displays information to the user (UI) and allows for user interaction
        </li>
        <li className="animateIn">
          <strong>Controller:</strong> Acts as a middleman between the model and the view - handles flow of information between them
        </li>
      </ul>
    </>
  );
};

export default Poll;
