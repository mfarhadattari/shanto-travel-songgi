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
import forgetPassword from "@/services/actions/forgetPassword";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ForgetPasswordPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const result = await forgetPassword(data);
      if (result.success) {
        toast.success(result.message);
        // navigate
        router.push("/");
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
          <Button
            component={Link}
            href="/login"
            startIcon={<ArrowBackIosNewIcon />}
          >
            Back to Login
          </Button>
        </Stack>
        <Grid container spacing={10} alignItems="center">
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Image src={assets.password} alt="Forget Password" />
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
                FORGET PASSWORD
              </Typography>

              {/* Login Form */}
              <STForm
                formSubmit={onSubmit}
                defaultValues={AuthDefaultValue.forgetPasswordDefaultValue}
                resolver={AuthSchema.forgetPasswordSchema}
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
                    <STInput name="email" label="Email" fullWidth />
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

export default ForgetPasswordPage;
