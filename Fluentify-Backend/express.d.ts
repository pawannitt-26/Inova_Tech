import { MulterFile } from "multer";

declare module "express" {
  interface Request {
    files: {
      [fieldname: string]: MulterFile[];
    };
  }
}
