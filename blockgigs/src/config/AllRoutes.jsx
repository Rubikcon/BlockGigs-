// Adjusted routes for DashboardLayout
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";
import DashboardLayout from "../layout/DashboardLayout"; // Adjust the path if needed

const Home = lazy(() => import("../pages/Waitlist"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const Client = lazy(() => import('../pages/Client'));
const Talent = lazy(() => import('../pages/Talent'));

const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Wallet = lazy(() => import('../pages/Wallet'));
const Messages = lazy(() => import('../pages/Messages'));
const Offers = lazy(() => import('../pages/OfferApplication'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const MyGigs = lazy(() => import('../pages/MyGigs'));
const Discover = lazy(() => import('../pages/Discover'));
const Logout = lazy(() => import('../pages/Logout'));

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path='/join-waitlist-as-a-client' element={<Client />} />
      <Route path='/join-waitlist-as-a-talent' element={<Talent />} />
    </Route>

    {/* Dashboard routes under /dashboard path */}
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="my-gigs" element={<MyGigs />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="discover" element={<Discover />} />
      <Route path="messages" element={<Messages />} />
      <Route path="offers" element={<Offers />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  </Route>
));

const AllRoutes = () => (
  <div className="w-full mx-auto bg-white min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
    <Toaster />
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </div>
);

export default AllRoutes;
