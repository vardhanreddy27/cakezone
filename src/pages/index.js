import Data from '@/components/Data'
import Topnav from '@/components/Topnav'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Products from '@/components/Products';
import Occasion from '@/components/Occasion';
import Join from '@/components/Join';
import Review from '@/components/Review';
import Counter from '@/components/Counter';
import Footer from '@/components/Footer';
import Cakekit from '@/components/Cakekit';
function index() {
  return (
    <>
  <Topnav />
  <Navbar />
  <Data />
  <Products />
  <Occasion />
  <Counter />
  <Cakekit />
  <Review />
  <Join />
  <Footer />
    </>
  )
}
export default index