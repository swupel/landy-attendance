import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, alt }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={alt ?? ""} width={width} height={height} />
);
