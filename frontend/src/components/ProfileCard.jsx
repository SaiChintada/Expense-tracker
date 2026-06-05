import { useEffect, useState } from "react";
import API from "../services/api";

const ProfileCard = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res =
          await API.get(
            "/auth/profile",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setUser(res.data);

      }catch (err) {

  console.log(err);

  console.log(
    err.response?.data
  );

}
    };

    fetchProfile();

  }, []);

  if (!user) {

    return (
      <div className="settings-card">
        Loading...
      </div>
    );
  }

  return (

    

    <div className="settings-card">

      <div className="profile-box">

        <div className="profile-avatar">

          {user.username
            ?.charAt(0)
            .toUpperCase()}

        </div>

        <div>

          <h3>
            {user.username}
          </h3>

          <p>
            {user.email}
          </p>

          <span className="profile-tag">
            ExpenseFlow User
          </span>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;