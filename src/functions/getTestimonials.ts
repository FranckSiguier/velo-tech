import { createServerFn } from "@tanstack/react-start";
import { db } from "~/db/db";
import { testimonial } from "~/db/schema";
import { sampleTestimonials } from "~/db/samples/testimonials";
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions";

export const getTestimonials = createServerFn({
  method: "GET",
})
  .middleware([staticFunctionMiddleware])
  .handler(async () => {
    const testimonials = await db.select().from(testimonial);
    if (testimonials.length === 0) {
      return { testimonials: sampleTestimonials };
    }
    return { testimonials };
  });
