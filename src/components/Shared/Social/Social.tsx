import assets from "@/assets";
import { Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={3}
    >
      <Link href="https://www.facebook.com/" target="blank">
        <Image
          src={assets.facebookIcon}
          alt="Facebook"
          height={30}
          width={30}
        />
      </Link>
      <Link href="https//www.linkedin.com" target="_blank">
        <Image
          src={assets.linkedinIcon}
          alt="linkedin"
          height={30}
          width={30}
        />
      </Link>
      <Link href="https//www.instagram.com" target="_blank">
        <Image
          src={assets.instagramIcon}
          alt="instagram"
          height={30}
          width={30}
        />
      </Link>
      <Link href="https//www.twitter.com" target="_blank">
        <Image src={assets.twitterIcon} alt="Twitter" height={30} width={30} />
      </Link>
    </Stack>
  );
};

export default Social;
