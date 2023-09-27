import Users from "./collections/Users";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import Test from "./collections/Test";
import { Media } from "./collections/Media";
import { buildConfig } from "payload/config";
import path from "path";
import { Pages } from "./collections/Pages";
import lOArtistsFile from "./collections/lo-artists-file";
import loCatalogs from "./collections/lo-catalogs";
import loSalesConsultantDescription from "./collections/lo-sales-consultant-description";
import GLOBAL_PREFIX_CONSTANT from "./constants/global-prefix.constant";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  routes: {
    api: GLOBAL_PREFIX_CONSTANT,
  },
  collections: [
    Users,
    Test,
    Media,
    Pages,
    lOArtistsFile,
    loCatalogs,
    loSalesConsultantDescription,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
});
