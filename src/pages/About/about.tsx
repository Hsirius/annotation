import React from "react";
import { useLocalStore, useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";

const About = () => {
  const store = useLocalStore(() => ({
    msg: "about",
  }));
  return useObserver(() => (
    <div>
      <p>{store.msg}</p>
      <Link to={"/about/list"}>to list</Link>
    </div>
  ));
};
export default About;
