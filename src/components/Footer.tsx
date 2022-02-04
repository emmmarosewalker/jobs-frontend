import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

export default function AppFooter() {
  return (
    <Container component="footer">
      <Box
        sx={{
          pt: 4,
          pb: 8,
          display: "grid",
          gridAutoColumns: "1fr",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr 1.75fr",
            lg: "1fr 1fr",
          },
          gridTemplateRows: "auto",
          "& a:not(.MuiIconButton-root)": {
            mt: 1,
            color: "text.secondary",
            typography: "body2",
            "&:hover": {
              color: "primary.main",
              textDecoration: "underline",
            },
          },
        }}
      >
        <div>
          <Typography variant="body2" fontWeight="bold" sx={{ pt: 2 }}>
            Join our newsletter!
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            No spam, guaranteed.
          </Typography>
        </div>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gridAutoColumns: "1fr",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontWeight="bold" variant="body2">
              Products
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontWeight="bold" variant="body2">
              Resources
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontWeight="bold" variant="body2">
              Explore
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontWeight="bold" variant="body2">
              Company
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end" }}>
              <Box
                sx={{
                  px: 0.5,
                  py: "3px",
                  ml: 1,
                  mb: "1px",
                  borderRadius: 0.5,
                  fontSize: (theme) => theme.typography.pxToRem(9),
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                Hiring
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          py: 4,
          display: { xs: "block", sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: { sm: "space-between" },
        }}
      >
        <Typography color="text.secondary" variant="body2">
          Copyright © {new Date().getFullYear()} Material-UI SAS.
        </Typography>
        <Box sx={{ py: { xs: 2, sm: 0 } }}>
          <Stack spacing={2} direction="row">
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mui-org"
              aria-label="github"
              title="GitHub"
              size="small"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/MUI_hq"
              aria-label="twitter"
              title="Twitter"
              size="small"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/mui/"
              aria-label="linkedin"
              title="LinkedIn"
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
