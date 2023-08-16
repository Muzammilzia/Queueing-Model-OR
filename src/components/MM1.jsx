import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export const MM1 = () => {
  return (
    <div className="model-container">
      <Grid container spacing={2}>
        <Grid
          sx={{ border: '3px solid black' }}
          xs={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: '100%', minHeight: '20vh' }}>S</Box>
        </Grid>
        <Grid
          sx={{ border: '3px solid black' }}
          xs={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: '100%', minHeight: '20vh' }}>S</Box>
        </Grid>
        <Grid
          sx={{ border: '3px solid black' }}
          xs={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: '100%', minHeight: '20vh' }}>S</Box>
        </Grid>
      </Grid>
      {/* <button>Calculate</button> */}
    </div>
  )
}
