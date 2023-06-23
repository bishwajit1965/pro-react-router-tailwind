import React from "react";
import { useNavigation } from "react-router-dom";
import SpinnerLoader from "../spinnerLoader/SpinnerLoader";

const Blog = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <SpinnerLoader />;
  }
  return (
    <div className="container-wrapper">
      <h1 className="text-center place-content-center">Blog component</h1>
    </div>
  );
};

export default Blog;
