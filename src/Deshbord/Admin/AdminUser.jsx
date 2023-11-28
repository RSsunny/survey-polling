import AdminUserCard from "../../Components/AddminComponent/AdminUserCard";
import useAlluser from "../../Hooks/useAlluser";
import Container from "../../Shared/Container";

const AdminUser = () => {
  const { alluser, refetch } = useAlluser();
  console.log(alluser);
  return (
    <Container>
      <div>
        <h1 className="text-5xl font-cinzel font-bold text-center my-20">
          All Member{" "}
        </h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="">Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Payment Id</th>
              </tr>
            </thead>
            <tbody>
              {alluser?.map((users, indx) => (
                <AdminUserCard
                  key={users._id}
                  indx={indx}
                  users={users}
                  refetch={refetch}
                ></AdminUserCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default AdminUser;
