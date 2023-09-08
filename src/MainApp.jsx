import { useState } from 'react'
import { InputLabel, MenuItem, FormControl, Box, Select } from '@mui/material'
import { FitTest, GGC, MGC, MMC, Navbar } from './components'
import { RandomNumbers } from './components/RandomNumbers'
import { NormalRandomNumbers } from './components/NormalRandomNumbers'

export const MainApp = () => {
  const [model, setModel] = useState('mmc')
  return (
    <div className="main-container">
      <Box
        sx={{
          margin: '20px 0px ',
        }}
      >
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Select Model
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={model}
            onChange={(event) => setModel(event.target.value)}
            autoWidth
            label="Select Model"
            sx={{ position: 'relative' }}
          >
            <MenuItem value="mmc">M/M/C</MenuItem>
            <MenuItem value="mgc">M/G/C</MenuItem>
            <MenuItem value="ggc">G/G/C</MenuItem>
            <MenuItem value="fit test">Goodness of fit test</MenuItem>
            <MenuItem value="uniform">Uniform random numbers</MenuItem>
            <MenuItem value="normal">Normal random numbers</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {model === 'mmc' ? (
        <MMC />
      ) : model === 'mgc' ? (
        <MGC />
      ) : model === 'ggc' ? (
        <GGC />
      ) : model === 'fit test m' ? (
        <ChiSquareTest />
      ) : model === 'fit test' ? (
        <FitTest />
      ) : model === 'uniform' ? (
        <RandomNumbers/>
      ) : model === 'normal' ? (
        <NormalRandomNumbers />
      ) : null}
    </div>
  )
}
