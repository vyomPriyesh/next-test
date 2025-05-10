// lib/getMeta.ts

// SSR-safe: can be used in generateMetadata or getServerSideProps
export async function getMetaFromServer() {
  return {
    title: 'Category Title',
    description: 'Description for this category',
    image: 'https://img.youtube.com/vi/sgfe95B8V6w/hqdefault.jpg',
  };
}
