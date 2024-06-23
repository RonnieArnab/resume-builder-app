import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="px-5 p-3 shadow-md flex  flex-row justify-between">
      <img src="./../../../public/vite.svg" alt="" />

      <div className="flex flex-row gap-4">
        <Link to={"/auth/login"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
