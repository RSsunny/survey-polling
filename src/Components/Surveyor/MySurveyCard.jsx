import { useEffect, useState } from "react";

const MySurveyCard = ({ survey, indx }) => {
  const [day, setDay] = useState("");
  const {
    _id,
    discription,
    summary,
    date,
    expired_date,
    category,
    image,
    title,
    author,
  } = survey || {};

  useEffect(() => {
    const startDate = new Date(date);
    const presentDate = new Date();
    const endDate = new Date(expired_date);
    const timeDefference = endDate - startDate;
    const remainingDay = endDate - presentDate;
    const dayDeffernce = parseInt(timeDefference / (1000 * 60 * 60 * 24));
    const dayRemaing = parseInt(remainingDay / (1000 * 60 * 60 * 24));
    const parsentige = (dayRemaing / dayDeffernce) * 100;
    setDay(parsentige);
  }, [date, expired_date]);

  return (
    <tr>
      <th>{indx + 1}</th>
      <td>{title}</td>
      <td>1.5k</td>
      <td>
        <progress
          className="progress progress-secondary w-56"
          value={100 - day}
          max="100"
        ></progress>
      </td>
      <td className="avatar-group -space-x-6 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-8">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MySurveyCard;
