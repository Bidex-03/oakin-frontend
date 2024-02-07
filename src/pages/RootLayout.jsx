import { Outlet, useNavigation } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useEffect } from "react";

const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  // Add or remove loading class based on isLoading state
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading");
    } else {
      document.body.classList.remove("loading");
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader />}
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
