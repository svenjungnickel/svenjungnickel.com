import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        name: z.string(),
        location: z.string(),
        birthday: z.string(),
        position: z.string(),
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        background: z.object({
          modern: z.string(),
          fallback: z.string(),
        }),
        social: z.object({
          bluesky: z.string(),
          github: z.string(),
          linkedin: z.string(),
          xing: z.string(),
          mail: z.string(),
        }),
      }),
    }),
  },
})
