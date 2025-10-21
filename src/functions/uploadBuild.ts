import { getStore } from "@netlify/blobs";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { BLOB_STORE_NAME } from "~/utils/blobs-utils";

export const uploadBuild = createServerFn({
  method: "POST",
})
  .inputValidator(
    z.object({
      fileBuffer: z.instanceof(ArrayBuffer),
      fileName: z.string(),
      fileType: z.string(),
      frame: z.string(),
      groupset: z.string(),
      wheels: z.string(),
      tyres: z.string(),
    })
  )
  .handler(async ({ data }) => {
    console.log(data);
    const { fileBuffer, fileName, fileType, frame, groupset, wheels, tyres } =
      data;
    const blob = new Blob([fileBuffer], { type: fileType });
    const store = getStore({
      name: BLOB_STORE_NAME,
      siteID: process.env.NETLIFY_SITE_ID!,
      token: process.env.NETLIFY_TOKEN!,
    });

    const timestamp = Date.now();
    await store.set(timestamp.toString(), blob, {
      metadata: {
        frame: frame,
        groupset: groupset,
        wheels: wheels,
        tyres: tyres,
      },
    });

    return {
      success: true,
      message: "Build uploaded successfully",
    };
  });
