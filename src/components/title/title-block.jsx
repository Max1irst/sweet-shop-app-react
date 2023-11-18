import './title-block.scss';
export const TitleBlock = (props) => {
  return (
    <div>
      <div className="title-block">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};
