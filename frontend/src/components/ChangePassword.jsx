import { useState } from "react";
import API from "../services/api";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const res = await API.put(
        "/auth/change-password",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

     toast.success(res.data.message);
      setFormData({
        current_password: "",
        new_password: "",
      });
    } catch (err) {
     toast.error(err.response?.data?.detail || "Something went wrong");
    }
  };

  return (
    <div className="settings-card">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="password-field">
          <input
            type={showCurrent ? "text" : "password"}
            name="current_password"
            placeholder="Current Password"
            value={formData.current_password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowCurrent(!showCurrent)}
          >
            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="password-field">
          <input
            type={showNew ? "text" : "password"}
            name="new_password"
            placeholder="New Password"
            value={formData.new_password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowNew(!showNew)}
          >
            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

       <button
  type="submit"
  className="settings-btn"
>
  Update Password
</button>
      </form>
    </div>
  );
};

export default ChangePassword;
