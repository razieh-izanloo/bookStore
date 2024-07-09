import React, { useEffect, useState } from "react";
// import AsyncSelect from "react-select/async";
import AsyncSelect from "react-select";
// import debounce from "debounce";
// import { useDispatch, useSelector } from "react-redux";
// import { post, get } from "../../../helpers/api_helper";

export const Search = () => {
//   const { data } = useSelector((state) => state.dbSelect);
// const data = [{}]
//   const [options, setOptions] = useState([]);
//   const [defaultVal, setDefaultVal] = useState(null);
// //   const dispatch = useDispatch();

//   const fetchData = async (inputValue) => {
//     let optionsVal;
//     if(props.method && props.params){
//        const response = await get(inputValue ? `${props.url}?q=${inputValue}` : props.url);
//        optionsVal = response;

//     }
//     else{
//       const formData = new FormData();
//       formData.append('q', inputValue);
//        const response = await post(props.url, inputValue && formData );
//        optionsVal = response?.content;
//     }
//     return optionsVal;

//   };

//   useEffect(() => {
//     (async () => {
//       const fetchedOptions = await fetchData();
//       dispatch({ type: 'DBSELECT', payload: { [props.name]: fetchedOptions } });
//     })();
//   }, [props.url]);

//   useEffect(() => {
//     const updatedOptions = data[props.name]?.map((item) => props.map(item));
//     setOptions(updatedOptions);
//   }, [data[props.name]]);
  
//   const loadOptions = debounce(async (inputValue, callback) => {
//     const fetchedOptions = await fetchData(inputValue);
//     dispatch({ type: 'DBSELECT', payload: { [props.name]: fetchedOptions } });
//     const updatedOptions = fetchedOptions?.map((item) => props.map(item));
//     callback(updatedOptions);
//   }, 500);

// const handleInputChange = (newValue) => {
//     const inputValue = String(newValue.value).replace(/\W/g, '');
//     setDefaultVal(options.filter(option => parseInt(option.value) === parseInt(inputValue) )[0]);
//     props.onChange(props.getItem ? newValue : inputValue);
//     return inputValue;
// };

// const defaultValue = defaultVal ? defaultVal : options?.filter(option => option.value === props.value)[0];

return (
    <AsyncSelect
    // cacheOptions
    // loadOptions={[{}]}
    // defaultOptions={[{}]}
    // onChange={handleInputChange}
    // isDisabled={props.isDisabled || typeof options === "undefined"}
    // value={ !props.holdValue ? null : defaultValue } 
    className="select" 
    placeholder="نام نویسنده، کلمه کلیدی"
    />
  );
};

// DbSelect.defaultProps = {
//   holdValue: true,
// };

