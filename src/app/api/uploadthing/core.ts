import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  teamLogo: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ metadata, file }) => {
      const finalUrl = file.ufsUrl;
      console.log("Upload completo (Team)! URL:", finalUrl);
      return { url: finalUrl, ufsUrl: finalUrl };
    }),

  leagueLogo: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ metadata, file }) => {
      const finalUrl = file.ufsUrl;
      console.log("Upload completo (League)! URL:", finalUrl);
      return { url: finalUrl, ufsUrl: finalUrl };
    }),

    userPic: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ metadata, file }) => {
      const finalUrl = file.ufsUrl;
      console.log("Upload completo (UserPic)! URL:", finalUrl);
      return { url: finalUrl, ufsUrl: finalUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;