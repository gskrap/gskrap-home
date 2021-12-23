interface OwnProps {
  num? :number;
}

const Box = ({ num = 0 }: OwnProps) => {
  return (
    <div className="box border">
      <div className="top-bar">
        <div className="pts">Box name goes here</div>
        <div className="min-btn border">_</div>
      </div>
      <div className="content">
        number is:&nbsp;
        {num}
      </div>
    </div>
  )
};

export default Box;
