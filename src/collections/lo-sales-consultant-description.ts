import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccessOrPublished } from "../access/isAdminHasSiteAccessOrPublished";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import { isLoggedIn } from "../access/isLoggedIn";
const loSalesConsultantDescription: CollectionConfig = {
  slug: "lo-sales-consultant-description",
  fields: [
    {
      name: "ConsultantID",
      type: "text",
    },
    {
      name: "ConsultantDescription",
      type: "text",
    },
  ],
  // versions: {
  //   drafts: {
  //     autosave: true,
  //   },
  // },
  access: {
    // Only admins can create users
    create: isAdmin,
    // Admins can read all, but any other logged in user can only read themselves
    // read: isAdminOrHasSiteAccessOrPublished,
    read: isLoggedIn,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Only admins can delete
    delete: isAdmin,
  },
};
export default loSalesConsultantDescription;
