import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";
import ErrorBoundary from "../pages/ErrorBoundary"


const Home = lazy(() => import("../pages/Waitlist"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const JoinAsClient = lazy(() => import('../pages/JoinAsClient'));
const JoinAsTalent = lazy(() => import('../pages/JoinAsTalent'));
const NotFound = lazy(() => import('../pages/NotFound'))



const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path='/join-as-a-client' element ={<JoinAsClient/>} />
      <Route path='/join-as-a-talent' element ={<JoinAsTalent/>} />
      <Route path='*' element ={<NotFound/>} />
    </Route>
  </Route>
))



const AllRoutes = () => {


  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AllRoutes;