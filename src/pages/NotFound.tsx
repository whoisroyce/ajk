import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import { NavLink } from "@/components/NavLink";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageShell>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-2xl md:text-3xl text-museum">404</h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed opacity-70">
          The page you requested does not exist.
        </p>
        <div className="mt-8">
          <NavLink to="/" className="text-sm text-museum underline underline-offset-8 opacity-80 hover:opacity-100">
            Return to Home
          </NavLink>
        </div>
      </div>
    </PageShell>
  );
};

export default NotFound;
