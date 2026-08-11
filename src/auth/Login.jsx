import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    const success = login(email, password);

    if (success) {
      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1200);
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">

      <ToastContainer />

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 shadow-xl rounded-xl w-[400px]"
      >

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Admin Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-black outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="relative mb-4">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-black outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-4 cursor-pointer text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        {/* Login Button */}
        <button className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition">
          Login
        </button>

        {/* Register */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;