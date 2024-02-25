"use client"
import * as React from "react";
import { NextUIProviderProps, NextUIProvider as Provider } from "@nextui-org/system";

export function NextUIProvider({ children, ...props }: NextUIProviderProps) {
  return <Provider {...props}>{children}</Provider>;
}