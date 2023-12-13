import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Stack } from "@mui/material";

export default function Community() {
  const [color, setColor] = React.useState(false);
  const [col, setCol] = React.useState("red");

  const handleLike = () => {
    console.log("Working", color);

    setColor(!color);
    if (color) {
      setCol("red");
    } else {
      setCol("");
    }
  };
  return (
    <Card sx={{ display: "flex", margin: "10px", padding: "10px" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://resources.workable.com/wp-content/uploads/2017/02/shutterstock_526494319.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Raunak Singh
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            ISRO(CEO)
          </Typography>
        </CardContent>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          suscipit odit mollitia nisi eaque odio consequatur, molestiae
          laboriosam molestias quos quas explicabo ex, quo debitis cum modi.
          Dolores dolore inventore, recusandae fuga accusamus atque, quo
          incidunt repellendus debitis, quis nobis sequi cum sint voluptatibus?
          Tenetur dolor repudiandae provident eligendi ut.
        </CardContent>
        <Stack direction={"row"}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={handleLike}
              sx={{
                color: col,
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Stack>
      </Box>
    </Card>
  );
}
