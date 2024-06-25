import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Sliders, StyleImageCard, Loading } from "../../../components";
import { StylesSlideSettings } from "../../../config";
import {
  selectStylesItem,
  selectStylesStatus,
  selectStylesError,
  fetchStyles,
} from "../../../app/reducers";
const LibraryStyles = () => {
  const dispatch = useDispatch();
  const styles = useSelector(selectStylesItem);
  const status = useSelector(selectStylesStatus);
  const error = useSelector(selectStylesError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStyles({}));
    }
  }, [status, dispatch]);

  if (status === "loading") return <Loading />;

  return (
    <div className="StyleImage m-auto mb-10 px-8">
      <div className="headerCard text-2xl mb-10">
        <span className="title">thư viện ảnh</span>
      </div>
      <Sliders settings={StylesSlideSettings} datas={styles}>
        <StyleImageCard />
      </Sliders>
    </div>
  );
};

export default LibraryStyles;
