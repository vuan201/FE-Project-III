import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerAddresses,
  selectAuthToken,
  selectCustomerAddresses,
  selectCustomerStatus,
  selectOrderAddressId,
  setAddressId,
} from "../../../../../app/reducers";
import { FETCH_SUCCEEDED } from "../../../../../config";

const OldAddress = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const customerAddresses = useSelector(selectCustomerAddresses);
  const AddressId = useSelector(selectOrderAddressId);
  const status = useSelector(selectCustomerStatus);

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerAddresses());
      // dispatch(setAddressId(customerAddresses[0].id ?? 0))
    }
  }, []);

  // useEffect(() => {
  //   if (status === FETCH_SUCCEEDED) {
  //     dispatch(setAddressId(customerAddresses[0].id ?? 0));
  //   }
  // }, [status]);

  const handleSetAddress = (event) => {
    dispatch(setAddressId(event.target.value));
  };

  return (
    <div>
      <select
        className="p-4 border border-slate-600 w-full rounded-md"
        name="oldAddress"
        id="oldAddress"
        value={AddressId}
        onChange={handleSetAddress}
      >
        {customerAddresses.map((address) => (
          <option key={address.id} value={address.id}>
            {address.specificAddress}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OldAddress;
