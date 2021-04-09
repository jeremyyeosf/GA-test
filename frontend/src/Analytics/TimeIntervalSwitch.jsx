import React, { useEffect, useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function TimeIntervalSwitch({setTimeInterval}) {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (checked) {
            setTimeInterval("daily")
        } else if (!checked) {
            setTimeInterval("none")
        }
    }, [checked, setTimeInterval])

  const handleChange = () => {
      setChecked(prevState => !prevState)
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="daily"
            color="primary"
          />
        }
        label="Daily Breakdown"
      />
    </FormGroup>
  );
}
