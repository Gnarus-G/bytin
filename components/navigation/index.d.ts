import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Route } from "../../constants";

type RouteAndIcon = [Route, OverridableComponent<SvgIconTypeMap<{}, "svg">>]