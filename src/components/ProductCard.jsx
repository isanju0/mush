import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import BestSellerTag from "./BestSellerTag";
import OrderNowButton from "./OrderNowButton";

function ProductCard({ name, qty, price, image, bestSeller }) {
  return (
    <Card
      elevation={bestSeller ? 5 : 1}
      sx={{
        position: "relative",
        width: { xs: 400, sm: 250 },
        height: "100%",
        overflow: "visible",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: (theme) => theme.shadows[bestSeller ? 10 : 4],
        },
      }}
    >
      <Stack sx={{ position: "relative" }}>
        {bestSeller ? <BestSellerTag /> : null}
        <CardMedia component="img" height="190" image={image} alt={name} />
      </Stack>
      <CardContent>
        <Stack spacing={1.2}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="h10">{qty}</Typography>
          {/* <Chip label={price} color="primary" variant="outlined" sx={{ width: "fit-content" }} /> */}
          <OrderNowButton />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
