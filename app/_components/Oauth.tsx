import React from "react";
import OauthItem from "./OauthItem";

import logo from "@/public/img/google.webp";

function Oauth() {
  return (
    <div className="flex flex-col gap-3">
      <OauthItem icon={logo} label="Google" />
    </div>
  );
}

export default Oauth;
