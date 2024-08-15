import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCity,
  fetchDistrict,
  fetchWard,
  selectAddressCity,
  selectAddressDistrict,
  selectAddressListCity,
  selectAddressListDistrict,
  selectAddressListStatus,
  selectAddressListWard,
  selectAddressWard,
  setSelectCity,
  setSelectDistrict,
  setSelectWard,
} from "../../../../app/reducers";
import Options from "../../Components/Options";

const Address = () => {
  const dispatch = useDispatch();

  const listCity = useSelector(selectAddressListCity);
  const listDistrict = useSelector(selectAddressListDistrict);
  const listWard = useSelector(selectAddressListWard);

  const selectCity = useSelector(selectAddressCity);
  const selectDistrict = useSelector(selectAddressDistrict);
  const selectWard = useSelector(selectAddressWard);

  const fetchStatus = useSelector(selectAddressListStatus);

  useEffect(() => {
    dispatch(fetchCity());
  }, []);

  useEffect(() => {
    dispatch(fetchDistrict(selectCity));
  }, [selectCity]);

  useEffect(() => {
    dispatch(fetchWard(selectDistrict));
  }, [selectCity, selectDistrict]);

  const handleSelectCity = (event) => {
    dispatch(setSelectCity(event.target.value));
  };
  const handleSelectDistrict = (event) => {
    dispatch(setSelectDistrict(event.target.value));
  };
  const handleSelectWard = (event) => {
    dispatch(setSelectWard(event.target.value));
  };

  return (
    <div className="flex gap-4">
      <Options
        options={listCity}
        name="city"
        id="city"
        value={selectCity}
        setValue={handleSelectCity}
      >
        Chọn thành phố
      </Options>
      <Options
        options={listDistrict}
        name="district"
        id="district"
        value={selectDistrict}
        setValue={handleSelectDistrict}
      >
        Chọn thành phố
      </Options>
      <Options
        options={listWard}
        name="ward"
        id="ward"
        value={selectWard}
        setValue={handleSelectWard}
      >
        Chọn thành phố
      </Options>
     
    </div>
  );
};

export default Address;
