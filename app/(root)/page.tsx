
import ProductList from '@/components/shared/product/product-list';

import { getLatestProducts } from '@/lib/actions/product.action';
const delay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
const HomePage = async () => {
    await delay(1000);
    const latestProducts=await getLatestProducts()
  return (<div className='space-y-8'>
  
  <ProductList title='Newest Arrivals' data={latestProducts} limit={4}/>
</div>
)
};
export default HomePage;