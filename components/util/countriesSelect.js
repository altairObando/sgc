import { Select } from 'antd'
import React from 'react'
const { Option } = Select;
let timeout;
let currentValue

const getData = (value, callback) =>{
    if(timeout){
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;
    timeout = setTimeout(() => {
        fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then(response => response.json())
        .then(data => {
            const countries = data && data != null && !data.message ? data.map(country => ({ value: country.cca2, text: country.name.common })) : []
            callback(countries);
        })
    }, 300)
}




const CountriesSelect = (props) => {
    const [ data,  setData ] = React.useState([]);
    const [ value, setValue] = React.useState();    

    const _handleSearch = ( newValue )=> {
        if(newValue)
            getData(newValue, setData);
        else
            setData([])
    }

    const _handleChange = ( newValue )=> {
        setValue( newValue )
        if(typeof props.handleCustomChange === 'function'){
            props.handleCustomChange(newValue);
        }
    }

    React.useEffect( () => {
        _handleSearch(props.defaultValue);
        setValue(props.defaultValue);
    }, [ props.defaultValue ])

    const options = data.map((d) => <Option key={d.value}>{d.text}</Option>);

  return <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      showArrow={true}
      filterOption={false}
      onSearch={_handleSearch}
      onChange={_handleChange}
    >
      {options}
    </Select>
}

export default CountriesSelect