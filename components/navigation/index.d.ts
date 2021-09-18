import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Route } from "../../constants";

type RouteAndIcon = [Route, OverridableComponent<SvgIconTypeMap<{}, "svg">>]