import { Theme, useMediaQuery } from "@mui/material";
import { Breakpoint } from "@mui/system";

type MapBreakPointTo<T> = {
  [key in Breakpoint]?: T;
};

export default function useBreakpoints<T>(
  map: MapBreakPointTo<T>,
  baseCase: T
): T {
  let result: T;

  result = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"))
    ? map.xl
    : baseCase;
  result = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"))
    ? map.lg || result
    : result;
  result = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"))
    ? map.md || result
    : result;
  result = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))
    ? map.sm || result
    : result;
  result = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"))
    ? map.xs || result
    : result;

  return result;
}
