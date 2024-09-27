"use client";

import { Box, Button, Stack, Grid2 as Grid, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import STInput from "@/components/Form/STInput";
import STForm from "@/components/Form/STForm";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import STBackdrop from "@/components/Shared/STBackdrop/STBackdrop";
import { AuthDefaultValue } from "./../../const/formDefaultValue/AuthDefaultValue";
import { AuthSchema } from "./../../const/formValidationSchema/AuthSchema";
import LockResetIcon from "@mui/icons-material/LockReset";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import resetPassword from "@/services/actions/resetPassword";

type TProps = {
  searchParams: {
    email: string;
    token: string;
  };
};

const ResetPassword = ({ searchParams }: TProps) => {
  console.log(searchParams);

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: FieldValues) => {
    const matchedPassword = data.password === data.confirmPassword;
    if (!matchedPassword) {
      return toast.error("Password not matched!");
    }
    setLoading(true);
    try {
      const result = await resetPassword({
        email: searchParams.email,
        token: searchParams.token,
        password: data.password,
      });
      if (result.success) {
        toast.success(result.message);
        // navigate
        router.push("/login");
      } else {
        toast.error(result.message || "Something went wrong");
        console.error(result);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
      console.error(err);
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
      }}
    >
      <Box>
        <Stack direction="row" justifyContent="end">
          <Button component={Link} href="/" startIcon={<ArrowBackIosNewIcon />}>
            Back to Home
          </Button>
        </Stack>
        <Grid container spacing={10} alignItems="center">
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Image src={assets.password} alt="Reset Password" />
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
              <LockResetIcon sx={{ fontSize: "40px" }} />
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  my: 3,
                }}
              >
                RESET PASSWORD
              </Typography>

              {/* RESET Form */}
              <STForm
                formSubmit={onSubmit}
                defaultValues={AuthDefaultValue.resetPasswordDefaultValue}
                resolver={AuthSchema.resetPasswordSchema}
                style={{
                  width: "100%",
                }}
              >
                <Grid container sx={{ mt: 1 }}>
                  <Grid
                    size={{
                      xs: 12,
                    }}
                  >
                    <STInput
                      name="password"
                      type="password"
                      label="Password"
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    size={{
                      xs: 12,
                    }}
                  >
                    <STInput
                      name="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Stack spacing={2} mt={2}>
                  <Button type="submit" fullWidth>
                    Reset Password
                  </Button>
                </Stack>
              </STForm>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <STBackdrop open={loading} />
    </Box>
  );
};

export default ResetPassword;
