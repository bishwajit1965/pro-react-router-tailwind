import React from "react";
import { useNavigation } from "react-router-dom";
import SpinnerLoader from "../spinnerLoader/SpinnerLoader";

const About = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <SpinnerLoader />;
  }
  return (
    <div>
      <h1 className="text-center place-content-center">About component</h1>
    </div>
  );
};

export default About;
