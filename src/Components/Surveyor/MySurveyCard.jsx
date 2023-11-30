import { useEffect, useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MySurveyCard = ({ survey, indx, refetchdata }) => {
  const [day, setDay] = useState("");
  const axios = useAxiosSecure();
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
    voteCount,
  } = survey || {};
  const handleDeleteSurvey = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delet this survey",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`/api/v1/survey/${_id}`);
        refetchdata();

        Swal.fire({
          title: "Deleted!",
          text: "deleted confirm.",
          icon: "success",
        });
      }
    });
  };
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
      <td>{voteCount}</td>
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
      <td>
        <Link to={`/deshbord/updatesurvey/${_id}`}>
          <GrDocumentUpdate className="text-xl ml-4 text-purple-500 cursor-pointer" />
        </Link>
      </td>
      <td>
        <MdDeleteSweep
          onClick={handleDeleteSurvey}
          className="text-3xl ml-4 text-primary_Colors cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default MySurveyCard;
