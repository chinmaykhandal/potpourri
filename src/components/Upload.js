import React, { useState } from "react";
import "./Upload.css";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";

function Upload() {
  const [tags, setTags] = useState([""]);
  return (
    <div className="row">
      <div className="col col1">
        <FormControl>
          <FormLabel id="demo-form-control-label-placement">
            Upload your own Recipe !
          </FormLabel>
          <TextField
            id="outlined-basic"
            label="Enter recipe name"
            variant="outlined"
          />
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="duration"
            defaultValue=""
          >
            <FormControlLabel
              value="less_than_30"
              control={<Radio />}
              label="<= 30 mins"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="less_than_1hr"
              control={<Radio />}
              label="<= 1 hr"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="less_than_2hr"
              control={<Radio />}
              label="<= 2 hrs"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="more_than_2hr"
              control={<Radio />}
              label="> 2 hrs"
              labelPlacement="bottom"
            />
          </RadioGroup>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="veg"
          >
            <FormControlLabel
              value="veg"
              control={<Radio />}
              label="Veg"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="non_veg"
              control={<Radio />}
              label="Non Veg"
              labelPlacement="bottom"
            />
          </RadioGroup>
          <TextField className="origin"
            id="outlined-basic"
            label="Enter country of origin"
            variant="outlined"
          />
          
          <div className="difficulty">
          <label></label>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="easy"
          >
            <FormControlLabel
              value="Easy"
              control={<Radio />}
              label="Easy"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="Medium"
              control={<Radio />}
              label="Medium"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="Hard"
              control={<Radio />}
              label="Hard"
              labelPlacement="bottom"
            />
          </RadioGroup>
          </div>
          <ReactTagInput
            tags={tags}
            placeholder="Enter upto 5 ingredients"
            maxTags={10}
            editable={true}
            readOnly={false}
            removeOnBackspace={true}
            onChange={(newTags) => setTags(newTags)}
          />
          <br /><br />
          <a href="#!" className="btn">Upload thumbnail image</a>
          
        </FormControl>

      </div>
      <div className="col col2">
      <input type="text" className="body-txt" placeholder="Enter body text" /><br /><br /><br /><br /><br />
      <a href="#!" className="publish-btn">Publish</a>
      </div>
    </div>
  );
}

export default Upload;
