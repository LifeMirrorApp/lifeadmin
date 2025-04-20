import React from "react";
import { Route } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";

import AllSale from "./forms/AllSale";
import Invoice from "./forms/Invoice";
import Quotation from "./forms/Quotation";
import AllPurchase from "./forms/AllPurchase";
import AllExpense from "./forms/AllExpense";
import AddSale from "./forms/AddSale";
import Profile from "./forms/Profile";
import Setting from "./forms/Setting";
import AllUsers from "./forms/AllUsers";
import Role from "./forms/Role";
import Permission from "./forms/Permission";
import SalesDashboard from "../salesdashboard/sales/SalesDashboard";

import ViewSalesUsers from "./admin/ViewSalesUsers";
import AddSalesPage from "./forms/AddSalesPage";
import ViewPoints from "./forms/ViewPoints";
import ViewDisSales from "./forms/ViewDisSales";
import ViewDisManager from "./forms/ViewDisManager";
import JwtRegister from "../sessions/JwtRegister";
import AuthGuard from "../../auth/AuthGuard";
import Idea from "./admin/Idea";
import Refinement from "./admin/Refinement";
import Sprint from "./admin/Sprint";
import AllIdea from "./admin/AllIdea";
import AllRefine from "./admin/AllRefine";
import AllSprint from "./admin/AllSprint";
import Retro from "./admin/Retro";
import TokenHandler from "../sessions/TokenHandler";
import Kjv from "./admin/Kjv";
import Bible from "./admin/Bible";
import Revised from "./admin/Revised";
import Books from "./admin/Books";
import BookList from "./admin/BookList";
import SingleBook from "./admin/SingleBook";
import Cart from "./admin/Cart";
import SingleCat from "./admin/SingleCat";
import Digital from "./admin/Digital";
import Category from "./admin/Category";

const AdminRoute = [
  {
    path: "/home",
    element: (
      <>
        {/* This will extract and store tokens */}
        <AuthGuard>
          <AdminDashboard />
        </AuthGuard>
      </>
    ),
  },
  {
    path: "/vision-idea/:title",
    element: (
      <AuthGuard>
        <Idea />
      </AuthGuard>
    ),
  },
  {
    path: "/brain-dump",
    element: (
      <AuthGuard>
        <AllIdea />
      </AuthGuard>
    ),
  },
  {
    path: "/refinement",
    element: (
      <AuthGuard>
        <AllRefine />
      </AuthGuard>
    ),
  },
  {
    path: "/category/:id",
    element: (
      <AuthGuard>
        <Category />
      </AuthGuard>
    ),
  },
  {
    path: "/bible",
    element: (
      <AuthGuard>
        <Bible />
      </AuthGuard>
    ),
  },
  {
    path: "/bible/revised-standard",
    element: (
      <AuthGuard>
        <Revised />
      </AuthGuard>
    ),
  },
  {
    path: "/books/devotional",
    element: (
      <AuthGuard>
        <Books />
      </AuthGuard>
    ),
  },
  {
    path: "/books/single-book",
    element: (
      <AuthGuard>
        <SingleBook />
      </AuthGuard>
    ),
  },
  {
    path: "/books/single-cat",
    element: (
      <AuthGuard>
        <SingleCat />
      </AuthGuard>
    ),
  },
  {
    path: "/digital",
    element: (
      <AuthGuard>
        <Digital />
      </AuthGuard>
    ),
  },
  {
    path: "/cart",
    element: (
      <AuthGuard>
        <Cart />
      </AuthGuard>
    ),
  },
  {
    path: "/booklist",
    element: (
      <AuthGuard>
        <BookList />
      </AuthGuard>
    ),
  },
  {
    path: "/bible/kjv",
    element: (
      <AuthGuard>
        <Kjv />
      </AuthGuard>
    ),
  },
  {
    path: "/sprint",
    element: (
      <AuthGuard>
        <AllSprint />
      </AuthGuard>
    ),
  },
  {
    path: "/retrospect",
    element: (
      <AuthGuard>
        <Retro />
      </AuthGuard>
    ),
  },
  {
    path: "/refinement/:title",
    element: (
      <AuthGuard>
        <Refinement />
      </AuthGuard>
    ),
  },

  // {
  //   path: "/sprint/:ideaId",
  //   element: (
  //     <AuthGuard>
  //       <Sprint />
  //     </AuthGuard>
  //   ),
  // },

  {
    path: "/sprint/:activities",
    element: (
      <AuthGuard>
        <Sprint />
      </AuthGuard>
    ),
  },

  {
    path: "/view-sales-disbursement",
    element: (
      <AuthGuard>
        <ViewDisSales />
      </AuthGuard>
    ),
  },
  {
    path: "/view-manager-disbursement",
    element: (
      <AuthGuard>
        <ViewDisManager />
      </AuthGuard>
    ),
  },
  {
    path: "/view-sales-operators",
    element: (
      <AuthGuard>
        <ViewSalesUsers />
      </AuthGuard>
    ),
  },
  {
    path: "/sales-dashboard",
    element: (
      <AuthGuard>
        <SalesDashboard />
      </AuthGuard>
    ),
  },
  {
    path: "/sales-list",
    element: (
      <AuthGuard>
        <AllSale />
      </AuthGuard>
    ),
  },
  {
    path: "/invoice-report",
    element: (
      <AuthGuard>
        <Invoice />
      </AuthGuard>
    ),
  },
  {
    path: "/quotation-list",
    element: (
      <AuthGuard>
        <Quotation />
      </AuthGuard>
    ),
  },
  {
    path: "/purchase-list",
    element: (
      <AuthGuard>
        <AllPurchase />
      </AuthGuard>
    ),
  },
  {
    path: "/expense-list",
    element: (
      <AuthGuard>
        <AllExpense />
      </AuthGuard>
    ),
  },
  {
    path: "/add-sales",
    element: (
      <AuthGuard>
        <AddSale />
      </AuthGuard>
    ),
  },
  {
    path: "/view-points",
    element: (
      <AuthGuard>
        <ViewPoints />
      </AuthGuard>
    ),
  },
  {
    path: "/add-sales-page",
    element: (
      <AuthGuard>
        <AddSalesPage />
      </AuthGuard>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthGuard>
        <Profile />
      </AuthGuard>
    ),
  },
  {
    path: "/settings",
    element: (
      <AuthGuard>
        <Setting />
      </AuthGuard>
    ),
  },
  {
    path: "/all-users",
    element: (
      <AuthGuard>
        <AllUsers />
      </AuthGuard>
    ),
  },
  {
    path: "/role-permission",
    element: (
      <AuthGuard>
        <Role />
      </AuthGuard>
    ),
  },
  {
    path: "/permission",
    element: (
      <AuthGuard>
        <Permission />
      </AuthGuard>
    ),
  },
];

export default AdminRoute;
