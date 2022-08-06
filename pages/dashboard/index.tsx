import React, { useEffect } from "react";
import { signIn, getSession } from "next-auth/react";

//secure dashboard page so that user ca only access when login in

const DashBoard = () => {
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();

      if (!session) {
        return signIn();
      }
    };

    securePage();
  }, []);
  return <section> DashBoard Page </section>;
};

export default DashBoard;
