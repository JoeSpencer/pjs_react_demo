export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'model',
      title: 'Model',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'model',
        maxLength: 96,
    },
  },
    {
      name: 'height',
      title: 'Height',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altImage',
      title: 'Alternate image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'layoutImage',
      title: 'Layout image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'model',
      media: 'mainImage',
    }
  },
}
