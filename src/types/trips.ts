/* eslint-disable @typescript-eslint/no-explicit-any */
import { TIncludedUser } from "./user";

export type TResTrip = {
  id: string;
  userId: string;
  destination: string;
  description: string;
  startDate: Date;
  endDate: Date;
  dates: string;
  type: string;
  photos: string[];
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: TIncludedUser;
  tripReq: any[]; // TODO: Set trip request data type
};
