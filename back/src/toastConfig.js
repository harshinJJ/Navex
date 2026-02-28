import { toast } from "react-hot-toast";

export const toastOptions = {
  duration: 3000,
  style: {
    background: "#111",
    color: "#fff",
    border: "1px solid #333",
    padding: "12px 16px",
    fontSize: "15px",
    borderRadius: "10px",
  },
  success: {
    iconTheme: {
      primary: "#22c55e",
      secondary: "#111",
    },
  },
  error: {
    iconTheme: {
      primary: "#ef4444",
      secondary: "#111",
    },
  },
};

export default toast;
