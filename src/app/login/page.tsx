import {
  Box,
  Button,
  Stack,
  Container,
  Grid2 as Grid,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "next/image";
import assets from "@/assets";

const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Grid container>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Image src={assets.loginRegisterImage} alt="Login Image" />
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 5,
              borderRadius: "16px",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* Form Header */}
            <LockOutlinedIcon sx={{ fontSize: "40px" }} />
            <Typography
              component="h5"
              variant="h5"
              sx={{
                my: 3,
              }}
            >
              USER LOGIN
            </Typography>

            {/* Login Form */}
            <Box>
              <Grid container sx={{ mt: 1 }}>
                <Grid
                  size={{
                    xs: 12,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    variant="outlined"
                    sx={{
                      backgroundColor: "secondary.main",
                      mb: 2,
                    }}
                  />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    sx={{
                      backgroundColor: "secondary.main",
                      mb: 2,
                    }}
                  />
                </Grid>
              </Grid>
              <Stack spacing={2} mt={2}>
                <Box
                  sx={{
                    textAlign: "right",
                  }}
                >
                  <Link href="/forget-password">
                    <Typography
                      component="span"
                      variant="body1"
                      fontWeight={600}
                    >
                      Forgot password?
                    </Typography>
                  </Link>
                </Box>
                <Button type="submit" fullWidth>
                  Login
                </Button>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Link href="/register">
                    <Typography
                      component="span"
                      variant="body1"
                      fontWeight={600}
                    >
                      Don&apos;t have an account? Register
                    </Typography>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
