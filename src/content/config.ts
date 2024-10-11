import { z, defineCollection } from 'astro:content';
// 2. Define a `type` and `schema` for each collection
const koeretoejer = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
  const kalenderEvents = defineCollection({
    type: 'content',
    schema: z.object({
        date: z.string(),
        title: z.string(),
        description: z.string().optional(),

    })
  });

  export const collections = {
    'koeretoejer': koeretoejer,
    'events': kalenderEvents,
  };