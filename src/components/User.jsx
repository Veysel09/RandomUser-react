import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user)
  return <div></div>
}
export default User;
