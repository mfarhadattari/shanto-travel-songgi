"use client";

import { Box, Button, Stack, Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "next/image";
import assets from "@/assets";
import STInput from "@/components/Form/STInput";
import STForm from "@/components/Form/STForm";
import { FieldValues } from "react-hook-form";
import loginUser from "@/services/actions/loginUser";
import { toast } from "react-toastify";
import { storeUserInfo } from "@/services/authServices";
import { useRouter } from "next/navigation";

const userLoginDefaultValue = { email: "", password: "" };

const LoginPage = () => {
  const router = useRouter();
  const navigateURL = "/";

  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await loginUser(data);
      if (result.success) {
        toast.success(result.message);

        // save token in local storage
        const token = result.data.accessToken;
        storeUserInfo(token);

        // navigate
        router.push(navigateURL);
      } else {
        toast.error(result.message || "Something went wrong");
      }
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

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
            <STForm formSubmit={onSubmit} defaultValues={userLoginDefaultValue}>
              <Grid container sx={{ mt: 1 }}>
                <Grid
                  size={{
                    xs: 12,
                  }}
                >
                  <STInput name="email" label="Email" />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                  }}
                >
                  <STInput name="password" label="Password" />
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
            </STForm>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
