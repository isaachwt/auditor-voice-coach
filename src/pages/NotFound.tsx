
import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // List of valid routes in the application
  const validRoutes = [
    "/",
    "/waitlist",
    "/interview",
    "/results",
    "/leaderboard"
  ];

  // Check if the current path is a valid route
  const isValidRoute = validRoutes.includes(pathname);

  useEffect(() => {
    if (!isValidRoute) {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        pathname
      );
    }
  }, [pathname, isValidRoute]);

  // If it's a valid route, navigate to it
  if (isValidRoute) {
    return <Navigate to={pathname} replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
