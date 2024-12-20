import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import { Intro } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getProvinces, getUserDetail } from "../../../store/actions";

const cx = classNames.bind(styles);

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProvinces());
      isLoggedIn && dispatch(getUserDetail());
    }, 100);
  }, [dispatch, isLoggedIn]);

  return (
    <div className={cx("container")}>
      <Header />
      <div className={cx("container__nav")}>
        <Navigation />
      </div>
      {isLoggedIn && <Search />}
      <div className={cx("outlet")}>
        <Outlet />
      </div>
      <Intro />
    </div>
  );
};

export default Home;
