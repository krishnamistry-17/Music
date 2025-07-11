import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { fetchUsers } from "../fetchUsers";

const ListData = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  console.log("users :", users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return <div>Error..{error.message}</div>;
  }

  return (
    <div>
      {Array.isArray(users) &&
        users.map((user) => <Card key={user.id} user={user} />)}
    </div>
  );
};

export default ListData;
