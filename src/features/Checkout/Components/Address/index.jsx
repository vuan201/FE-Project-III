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
    <div>
      <select
        name="city"
        id="city"
        value={selectCity}
        onChange={handleSelectCity}
      >
        <option value="">Chọn thành phố</option>
        {listCity.map((city, index) => (
          <option value={city.id} key={index}>
            {city.name}
          </option>
        ))}
      </select>
      <select
        name="district"
        id="district"
        value={selectDistrict}
        onChange={handleSelectDistrict}
      >
        <option value="">Chọn quận / huyện</option>
        {listDistrict.map((district, index) => (
          <option value={district.id} key={index}>
            {district.name}
          </option>
        ))}
      </select>
      <select
        name="ward"
        id="ward"
        value={selectWard}
        onChange={handleSelectWard}
      >
        <option value="">Chọn phường / xã</option>
        {listWard.map((ward, index) => (
          <option value={ward.id} key={index}>
            {ward.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Address;
