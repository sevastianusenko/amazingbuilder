import type { ServiceDetail } from "./types";
import { interior } from "./interior";
import { finishes } from "./finishes";
import { outside } from "./outside";

export type { ServiceDetail } from "./types";

export const serviceDetails: Record<string, ServiceDetail> = { ...interior, ...finishes, ...outside };

export const serviceDetail = (slug: string): ServiceDetail | undefined => serviceDetails[slug];
