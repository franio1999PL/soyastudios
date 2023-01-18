const WooCommerceApi = require('@woocommerce/woocommerce-rest-api').default

const api = new WooCommerceApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3'
})

export const getProductsData = async perPage => {
  return await api.get('products', {
    perPage: perPage || 50
  })
}