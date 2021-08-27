import d1 from "./01d.svg";
import n1 from "./01n.svg";
import d2 from "./02d.svg";
import n2 from "./02n.svg";
import d3 from "./03d.svg";
import n3 from "./03n.svg";
import d4 from "./04d.svg";
import n4 from "./04n.svg";
import d9 from "./09d.svg";
import n9 from "./09n.svg";
import d10 from "./10d.svg";
import n10 from "./10n.svg";
import d11 from "./11d.svg";
import n11 from "./11n.svg";
import d13 from "./13d.svg";
import n13 from "./13n.svg";
import d50 from "./50d.svg";
import n50 from "./50n.svg";

export default function getIcon(img) {
  switch (img) {
    case "01d":
      return d1;
    case "01n":
      return n1;
    case "02d":
      return d2;
    case "02n":
      return n2;
    case "03d":
      return d3;
    case "03n":
      return n3;
    case "04d":
      return d4;
    case "04n":
      return n4;
    case "09d":
      return d9;
    case "09n":
      return n9;
    case "10d":
      return d10;
    case "10n":
      return n10;
    case "11d":
      return d11;
    case "11n":
      return n11;
    case "13d":
      return d13;
    case "13n":
      return n13;
    case "50d":
      return d50;
    case "50n":
      return n50;
    default:
      return d1;
  }
}
