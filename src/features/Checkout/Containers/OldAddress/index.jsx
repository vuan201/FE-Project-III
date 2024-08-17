import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerAddresses,
  selectAuthToken,
  selectCustomerAddresses,
  selectOrderAddress,
  setOrderAddress,
} from "../../../../app/reducers";
import Options from "../../Components/Options";

const OldAddress = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const customerAddresses = useSelector(selectCustomerAddresses);
  const selectAddress = useSelector(selectOrderAddress);

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerAddresses());
    }
  }, []);

  const handleSetAddress = (event) => {
    dispatch(setOrderAddress(JSON.parse(event.target.value)));
  };

  return (
    <div>
      <select
        className="p-4 border border-slate-600"
        name="oldAddress"
        id="oldAddress"
        value={JSON.stringify(selectAddress)}
        onChange={handleSetAddress}
      >
        <option value="">Chọn địa chỉ</option>
        {customerAddresses.map((address) => (
          <option key={address.id} value={JSON.stringify(address)}>
            {address.specificAddress}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OldAddress;
