import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Main/HomePage";
import HouseDetail from "./components/House-detail/HouseDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LandingPage from "./components/Main/LandingPage";
import { Analytics } from "@vercel/analytics/react";
import Wishlist from "./components/Main/Wishlist";

import Trips from "./components/Main/Trips";

import CheckoutForm from "./payment/CheckoutForm";
import Profile from "./components/Main/Profile";
import LoginPage from "./components/Main/LoginPage";
import ComingSoon from "./components/Main/ComingSoon";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/",
    element: <LandingPage/>,
  },

  {
    path: "/house/:id",
    element: <HouseDetail></HouseDetail>,
  },
  {
    path: "/wishlist",
    element: <Wishlist></Wishlist>,
  },
  {
    path: "/trips",
    element: <Trips></Trips>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/:id/book",
    element: <CheckoutForm></CheckoutForm>,
  },
  {
    path: "/account-settings",
    element: <Profile></Profile>,
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      {/* {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
        )} */}
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}
