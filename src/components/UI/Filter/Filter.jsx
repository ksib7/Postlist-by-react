// Вариант 1

import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Filter = ({ options, value, onChange, defaultName }) => {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Сортировка по"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          <MenuItem disabled>{defaultName}</MenuItem>
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

// Вариант 2

/* import React from "react";

export const Filter = ({ options, defaultName, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{defaultName}</option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}; */

/* const export Filter = ({options, defaultName value, onChange}) => {



    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
           <options value="">{defaultName}<options>
           {options.map((item) => (
            <options key={item.value} value={item.value}>{item.name}</options>
           ))}
        </select>
    )
} */

/* const [sort, setSort] = useState("")

const sortedPosts = (item) => {
    setSort(item)
    setPostlist([...postList].sort((a, b) => a[item].localeCopmpare(b[item])))
}


<Filter 

onChange={sortedPosts}
defaultName="Сортировка по"
value={sort} 
options={[
    {value: "title", name:"По заголовку"}
    {value:"summary", name:"По названию"}
]} />

*/
