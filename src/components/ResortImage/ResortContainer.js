import { Typography } from "@material-ui/core";
import React from "react";
import ResortImage from "./ResortImage";
import image1 from "../../images/image2.jpg";
import image2 from "../../images/image3.jpg";
import image3 from "../../images/image4.jpg";
import image4 from "../../images/image5.jpg";

const imageData = [
  {
    header: "Header 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione ipsum odio hic itaque officiis, architecto quam sint optio expedita.",
    image: image1,
  },
  {
    header: "Header 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione ipsum odio hic itaque officiis, architecto quam sint optio expedita.",
    image: image2,
  },
  {
    header: "Header 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione ipsum odio hic itaque officiis, architecto quam sint optio expedita.",
    image: image3,
  },
  {
    header: "Header 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione ipsum odio hic itaque officiis, architecto quam sint optio expedita.",
    image: image4,
  },
];

function ResortContainer() {
  return (
    <div>
      <Typography variant="h3" align="center">
        Beauty of our Resort
      </Typography>
      <ResortImage imageData={imageData} />
    </div>
  );
}

export default ResortContainer;
