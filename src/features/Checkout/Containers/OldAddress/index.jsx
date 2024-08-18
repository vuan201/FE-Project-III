import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerAddresses,
  selectAuthToken,
  selectCustomerAddresses,
  selectOrderAddress,
  selectOrderAddressId,
  setAddressId,
  setOrderAddress,
} from "../../../../app/reducers";
import Options from "../../Components/Options";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const OldAddress = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const customerAddresses = useSelector(selectCustomerAddresses);
  const selectAddress = useSelector(selectOrderAddress);
  const AddressId = useSelector(selectOrderAddressId);

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerAddresses());
    }
  }, []);

  const handleSetAddress = (event) => {
    dispatch(setAddressId(event.target.value));
  };

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {/* <FormControl variant="outlined" style={{ minWidth: 120 }}>
        <InputLabel id="select-label">Age</InputLabel>
        <Select
          labelId="select-label"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      <select
        className="p-4 border border-slate-600 w-full"
        name="oldAddress"
        id="oldAddress"
        value={AddressId}
        onChange={handleSetAddress}
      >
        <option value={0}>Chọn địa chỉ</option>
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
