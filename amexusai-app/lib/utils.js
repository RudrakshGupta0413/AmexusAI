import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const interiorCostEstimatorUrl =
  process.env.NEXT_PUBLIC_INTERIOR_COST_ESTIMATOR_URL ||
  "https://interior-price-estimator.amexus.ai/";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
