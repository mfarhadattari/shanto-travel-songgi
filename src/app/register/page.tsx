"use client";

import { Box, Button, Stack, Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "next/image";
import assets from "@/assets";
import STInput from "@/components/Form/STInput";
import STForm from "@/components/Form/STForm";
import { FieldValues } from "react-hook-form";
import STAvatarUpload from "@/components/Form/STAvatarUpload";
import { toast } from "react-toastify";
import convertFormData from "@/utils/convertFormData";
import registerUser from "@/services/actions/registerUser";
import { useRouter } from "next/navigation";
import { useState } from "react";
import STBackdrop from "@/components/Shared/STBackdrop/STBackdrop";

const userRegisterDefaultValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  file: "",
};

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    const { confirmPassword, ...loginData } = data;
    // match password
    const isPassConfirm = loginData.password === confirmPassword;
    if (!isPassConfirm) {
      return toast.warn("Password not matched!");
    }
    setLoading(true);
    try {
      const formData = convertFormData(loginData);
      const result = await registerUser(formData);
      if (result.success) {
        toast.success(result.message);
        router.push("/login");
      } else {
        toast.error(result.message);
        console.log(result);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        padding: 2,
      }}
    >
      <Grid container>
        <Grid
          size={{
            xs: 12,
            md: 5,
          }}
        >
          <Image src={assets.loginRegisterImage} alt="Login Image" />
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 7,
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
              margin: "0 auto",
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
              USER REGISTER
            </Typography>

            {/* -----------> Register Form <---------- */}
            <STForm
              formSubmit={onSubmit}
              defaultValues={userRegisterDefaultValue}
              style={{
                width: "100%",
              }}
            >
              <Grid container sx={{ mt: 1 }} columnSpacing={2}>
                <Grid
                  size={{
                    xs: 12,
                  }}
                  textAlign="center"
                >
                  <STAvatarUpload name="file" />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <STInput name="username" label="Name" />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <STInput name="email" label="Email" type="email" />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <STInput name="password" label="Password" type="password" />
                </Grid>
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <STInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Stack spacing={2} mt={2}>
                <Stack
                  direction="row"
                  spacing={4}
                  justifyContent="space-between"
                >
                  <Button type="submit" fullWidth>
                    Register
                  </Button>
                </Stack>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Link href="/login">
                    <Typography
                      component="span"
                      variant="body1"
                      fontWeight={600}
                    >
                      Already have an account? Login
                    </Typography>
                  </Link>
                </Box>
              </Stack>
            </STForm>
          </Box>
        </Grid>
      </Grid>
      <STBackdrop open={loading} />
    </Box>
  );
};

export default RegisterPage;
