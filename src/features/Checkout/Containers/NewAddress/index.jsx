import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCity,
  fetchDistrict,
  fetchWard,
  resetListWard,
  selectAddressCity,
  selectAddressDistrict,
  selectAddressListCity,
  selectAddressListDistrict,
  selectAddressListStatus,
  selectAddressListWard,
  selectAddressWard,
  setOrderCity,
  setOrderDistrict,
  setOrderWard,
  setSelectCity,
  setSelectDistrict,
  setSelectWard,
  selectOrderAddress,
  setOrderSpecificAddress,
} from "../../../../app/reducers";
import Options from "../../Components/Options";
import { Input } from "../../../../components";

const NewAddress = () => {
  const dispatch = useDispatch();

  const listCity = useSelector(selectAddressListCity);
  const listDistrict = useSelector(selectAddressListDistrict);
  const listWard = useSelector(selectAddressListWard);

  const selectCity = useSelector(selectAddressCity);
  const selectDistrict = useSelector(selectAddressDistrict);
  const selectWard = useSelector(selectAddressWard);

  const fetchStatus = useSelector(selectAddressListStatus);

  const orderAddress = useSelector(selectOrderAddress);

  useEffect(() => {
    dispatch(fetchCity());
  }, []);

  useEffect(() => {
    dispatch(fetchDistrict(selectCity));
    dispatch(setSelectDistrict(""));
    dispatch(resetListWard());
  }, [selectCity]);

  useEffect(() => {
    dispatch(fetchWard(selectDistrict));
    dispatch(setSelectWard(""));
  }, [selectDistrict]);

  const handleSelectCity = useCallback(
    (event) => {
      const cityId = event.target.value;
      const cityName =
        event.target.options[event.target.selectedIndex].getAttribute(
          "data-name"
        );
      dispatch(setSelectCity(cityId));
      dispatch(setOrderCity(cityName));
    },
    [dispatch]
  );
  const handleSelectDistrict = useCallback(
    (event) => {
      const districtId = event.target.value;
      const districtName =
        event.target.options[event.target.selectedIndex].getAttribute(
          "data-name"
        );
      dispatch(setSelectDistrict(districtId));
      dispatch(setOrderDistrict(districtName));
    },
    [dispatch]
  );
  const handleSelectWard = useCallback(
    (event) => {
      const wardId = event.target.value;
      const wardName =
        event.target.options[event.target.selectedIndex].getAttribute(
          "data-name"
        );
      dispatch(setSelectWard(wardId));
      dispatch(setOrderWard(wardName));
    },
    [dispatch]
  );

  return (
    <>
      <div className="flex gap-2">
        <div className=" basis-1/3">
          <Options
            options={listCity}
            name="city"
            id="city"
            value={selectCity}
            setValue={handleSelectCity}
          >
            Chọn thành phố
          </Options>
        </div>
        <div className=" basis-1/3">
          <Options
            options={listDistrict}
            name="district"
            id="district"
            value={selectDistrict}
            setValue={handleSelectDistrict}
          >
            Chọn quận / huyện
          </Options>
        </div>
        <div className=" basis-1/3">
          <Options
            options={listWard}
            name="ward"
            id="ward"
            value={selectWard}
            setValue={handleSelectWard}
          >
            Chọn phường / xã
          </Options>
        </div>
      </div>
      <div>
        <Input
          value={orderAddress.specificAddress}
          onChange={(e) => dispatch(setOrderSpecificAddress(e.target.value))}
        >
          Chi tiết địa chỉ giao hàng
        </Input>
      </div>
    </>
  );
};

export default NewAddress;
