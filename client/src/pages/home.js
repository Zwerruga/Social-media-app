import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import RightSideBar from "../components/home/RightSideBar";
import { scrollToAction } from "../redux/actions/scrollAction";

import LoadIcon from "../images/loading.gif";

const Home = () => {
  const { homePosts, scroll } = useSelector((state) => state);
  const dispatch = useDispatch();

  window.addEventListener("scroll", async () => {
    if (window.location.pathname === "/") {
      await dispatch(scrollToAction(window.pageYOffset));
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className="home row mx-0">
      <div className="col-md-8">
        <Status />

        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No Post</h2>
        ) : (
          <Posts />
        )}
      </div>

      <div className="col-md-4">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
