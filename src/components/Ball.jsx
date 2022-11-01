const Ball = ({ text, style }) => {
  return (
    <div className='ball'>
      <span style={style}>{text}</span>
    </div>
  );
};

export default Ball;
