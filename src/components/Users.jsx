import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../redux/actions/userAction";

export const Users = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  return (
    <div>
      {user.map((x) => (
        <ul key={x.id}>
          <li>{x.username}</li>
          <li>{x.name}</li>
          <li>{x.email}</li>
        </ul>
      ))}
    </div>
  );
};
