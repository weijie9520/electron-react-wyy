import DiscovrMusicPage from './page/discoverMusic/index';
import NotFound from './page/404/index';
import RecommendedDaily from './page/RecommendedDaily/index';
import SongListDaily from './page/SongListDaily';

// const router =  require.context("./page", true, /\.router\.js$/)

// console.log("router",router)

const routers = [
  {
    path: '/discoverMusic',
    component: DiscovrMusicPage,
  },
  {
    path: '/recommendedDaily',
    exact: true,
    component: RecommendedDaily,
  },
  {
    path: '/songListDaily/:id',
    exact: true,
    component: SongListDaily,
  },
  {
    path: '*',
    exact: true,
    component: NotFound,
  },
];

export default routers;
