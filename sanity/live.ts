import { defineLive } from "next-sanity";
import { client } from "/Users/kristianhaug/Desktop/Desktop/Web Development 2.0/Tjønnås Delikatesser/tjonnas-website/sanity/client.ts";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "vX" }),
});