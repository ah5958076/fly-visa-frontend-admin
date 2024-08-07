import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export interface HomePageTemplate {
  children: React.ReactNode;
}

export interface Route {
  title: string;
  route: string;
  icon?: IconDefinition | string;
  disabled?: boolean | undefined;
  component?: JSX.Element | null | undefined;
}
