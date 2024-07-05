import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  //https://lamatic.notion.site/Lamatic-ai-Integrations-4689d5d26fce4ca89dd4f9c938fb58c6?pvs=4
  rootNotionPageId: '4689d5d26fce4ca89dd4f9c938fb58c6',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Lamatic.ai Integration',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'lamatic.ai/integration',
  author: 'Lamatic.ai',
  // open graph metadata (optional)
  description: 'GenAI API in Minutes with all the integrations you need',

  // social usernames (optional)
  twitter: 'lamatic_ai',
  github: 'lamatic',
  linkedin: 'lamatic',
  newsletter: 'https://labs.lamatic.ai/', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  //  pageUrlOverrides: {
  //    '/call': 'a13f0d8b3898412a947a24c08d7f5139',
  // //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  //  },
  //pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'Features',
       url: 'https://lamatic.ai/features/'
     },
    {
       title: 'Docs',
       url: 'https://lamatic.ai/docs/'
     },
{
       title: 'Company',
       url: 'https://lamatic.ai/company/'
     },
{
       title: 'Pricing',
       url: 'https://lamatic.ai/pricing'
     }]

})
