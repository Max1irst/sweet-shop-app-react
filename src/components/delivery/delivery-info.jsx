import './delivery-info.scss';
import sign from '../../images/sign.png';

export const DeliveryInfo = () => {
  return (
    <div className="delivery-info">
      <img src={sign} alt="sign" />
      <div>
        <span>Get FREE delivery when you spend just £30.00 more...</span>
      </div>
    </div>
  );
};
