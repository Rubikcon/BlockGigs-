import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";

// Add import for the dashboard
import DashboardLayout from "../layout/DashboardLayout"; // Adjust the path if needed



const Home = lazy(() => import("../pages/Waitlist"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const Client = lazy(() => import('../pages/Client'));
const Talent = lazy(() => import('../pages/Talent'));
// more import for the dashboard layout
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Wallet = lazy(() => import('../pages/Wallet'));
const Messages = lazy(() => import('../pages/Messages'));
const Milestone = lazy(() => import('../pages/Milestone'));
const Dashboard = lazy(() => import('../pages/Dashboard'));  // Adjust the path if needed
const MyGigs = lazy(() => import('../pages/MyGigs'));
const Logout = lazy(() => import('../pages/Logout'));


const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path='/join-waitlist-as-a-client' element={<Client />} />
      <Route path='/join-waitlist-as-a-talent' element={<Talent />} />
    </Route>


    <Route>  
        {/* <Route path="/dash" element={<DashboardLayout><Home /></DashboardLayout>} /> */}
        <Route index  element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/my-gigs" element={<DashboardLayout><MyGigs/></DashboardLayout>} />
        <Route path="/wallet" element={<DashboardLayout><Wallet /></DashboardLayout>} />
        <Route path="/messages" element={<DashboardLayout><Messages /></DashboardLayout>} />
        <Route path="/milestone" element={<DashboardLayout><Milestone /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
        <Route path="/logout" element={<DashboardLayout><Logout /></DashboardLayout>} />
    </Route>

  </Route>
))



const AllRoutes = () => {


  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
  );
};

export default AllRoutes;