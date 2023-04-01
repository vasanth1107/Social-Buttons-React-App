const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={className}>{name}</button>;
  return <button className={className}>{name}</button>;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn-container">
      <Button className="btn like-btn" name="Like" />
      <Button className="btn comment-btn" name="Comment" />
      <Button className="btn share-btn" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
