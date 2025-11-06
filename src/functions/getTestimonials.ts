import { createServerFn } from "@tanstack/react-start";
import { db } from "~/db/db";
import { testimonial } from "~/db/schema";
import { sampleTestimonials } from "~/db/samples/testimonials";

export const getTestimonials = createServerFn({
  method: "GET",
}).handler(async () => {
  const testimonials = await db.select().from(testimonial);
  if (testimonials.length === 0) {
    return { testimonials: sampleTestimonials };
  }
  return { testimonials };
});
