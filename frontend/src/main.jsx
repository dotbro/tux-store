import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import OrderForm from './Pages/OrderForm.jsx'
import './index.css'
import { ProductProvider } from './ProductContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/order",
    element: <OrderForm />
  }
]);

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ProductProvider>,
)
