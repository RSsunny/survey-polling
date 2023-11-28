import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AdminUserCard = ({ users, indx, refetch }) => {
  const { _id, name, email, roll, transitionId } = users;

  const axios = useAxiosSecure();
  const handleRoolChange = async (rollChange) => {
    console.log(rollChange);
    if (rollChange) {
      const res = await axios.patch(`/api/v1/usersroll/${_id}`, {
        roll: rollChange,
      });
      refetch();
      console.log(res.data);
    }
  };

  return (
    <tr>
      <td>{indx + 1}</td>
      <th>{name}</th>
      <td className="text-xs">{email}</td>
      <td className="cursor-pointer  ">
        <div className="flex  text-xs border w-fit">
          <h2
            onClick={() => handleRoolChange("admin")}
            className={`border-r p-2 ${
              roll === "admin" && "bg-red-500 text-white text-center font-bold"
            }`}
          >
            Admin
          </h2>
          <h2
            onClick={() => handleRoolChange("surveyor")}
            className={`border-r p-2 ${
              roll === "surveyor" &&
              "bg-indigo-700 text-white text-center font-bold"
            }`}
          >
            Surveyor
          </h2>
          <h2
            onClick={() => handleRoolChange("pro user")}
            className={`border-r p-2 ${
              roll === "pro user" &&
              "bg-purple-600 text-white text-center font-bold"
            }`}
          >
            Pro User
          </h2>
          <h2
            onClick={() => handleRoolChange("user")}
            className={` p-2 ${
              roll === "user" &&
              "bg-blue-gray-400 text-white text-center font-bold"
            }`}
          >
            user
          </h2>
        </div>
      </td>
      <td className="text-xs ">{transitionId}</td>
    </tr>
  );
};

export default AdminUserCard;
