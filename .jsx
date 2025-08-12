import React from "react";
import {
  Box, Card, CardContent, Typography, Stack, TextField, MenuItem
} from '@mui/material';
import HelpOutline from '@mui/icons-material/HelpOutline';

const Login = () => {
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <>
      <Box textAlign='center'>
        <Typography sx={{ color: 'blue', fontSize: '70px', fontFamily: '"Klavika Bold", sans-serif', fontWeight: 600 }}>
          facebook
        </Typography>
      </Box>
      <Stack direction="row" justifyContent="center" sx={{ my: 2 }}>
        <Card sx={{ width: 500 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <h1 className="fheading1">Create a new account</h1>
            <h4 className="fheading2">It's quick and easy.</h4>
            <TextField id="outlined-basic" variant="outlined" placeholder="Firstname" sx={{ mr: 2 }} />
            <TextField id="outlined-basic" variant="outlined" placeholder="Surname" />
          </CardContent>

          <Box sx={{ marginLeft: '20px', my: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography className="dob" sx={{ mr: 1 }}>Date of birth</Typography>
              <HelpOutline fontSize="small" color="action" />
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 1}}>
              <TextField
                select
                label="Day"
                defaultValue=""
                size="small"
                sx={{ width: 90 }}
              >
                {dates.map((date) => (
                  <MenuItem key={date} value={date}>{date}</MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Month"
                defaultValue=""
                size="small"
                sx={{ width: 110 }}
              >
                {months.map((month, index) => (
                  <MenuItem key={month} value={index + 1}>{month}</MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Year"
                defaultValue=""
                size="small"
                sx={{ width: 110 }}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </TextField>
            </Stack>
          </Box>
          <Box className="Gfbook">
            <Stack direction="row">
            <Typography sx={{mr:1}}>Gender</Typography>
            <HelpOutline fontSize="small" color="action" />
            </Stack>
          </Box>
        </Card>
      </Stack>
    </>
  );
}

export default Login;
