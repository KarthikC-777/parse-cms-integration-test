import { Access, FieldAccess } from "payload/types";
import { User } from "../interfaces/payload.interface";

export const isAdmin: Access<any, User> = ({ req: { user } }) => {
  console.log("coming");

  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes("admin"));
};

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes("admin"));
};
