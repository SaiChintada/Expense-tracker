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

localStorage.setItem(
  "username",
  res.data.username
);

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
          <div className="profile-stats">

  <div>

    <span>
      Member Since
    </span>

    <h4>
      Jun 2025
    </h4>

  </div>

  <div>

    <span>
      Last Login
    </span>

    <h4>
      {
        localStorage.getItem(
          "lastLogin"
        )
      }
    </h4>

  </div>

  <div>

    <span>
      Status
    </span>

    <h4 className="active-status">

      ● Active

    </h4>

  </div>

</div>

          <p className="last-login">

  Last Login:

  {
    localStorage.getItem(
      "lastLogin"
    )
  }

</p>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;