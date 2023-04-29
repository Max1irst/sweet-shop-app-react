import './red-info.scss';
import sign from '../../images/sign.png';

export const RedInfo = () => {
  return (
    <div className="red-info">
      <img src={sign} alt="sign" />
      <div>
        <span>Get FREE delivery when you spend just £30.00 more...</span>
      </div>
    </div>
  );
};
