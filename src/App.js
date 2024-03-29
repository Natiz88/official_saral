import React, { useEffect } from "react";
import ModalLogin from "./ModalLogin";
import ResetPassword from "./ResetPassword";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NewPage from "./component/NewPage";
// import BreandNew from "./BrandNew";
import Nav from "./Nav";

import { Form } from "./component/Form";

import Page from "./component/Page";
import Contact from "./components/ContactPage";
import HireDesigner from "./components/HireDesigner";
import Option from "./components/Option";
import BackGround from "./BackGround";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Account from "./assets/account.svg";
import logo from "./assets/logo.jpeg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import NavbarBottom from "./components/NavbarBottom";
import Test from "./components/Test";
import UserProfile from "./components/UserProfile";
import ProductCollection from "./components/ProductCollection";
import Footer from "./components/Footer";
import OrderHistory from "./components/OrderHistory";
import MobileMenu from "./components/MobileMenu";
import Categories from "./components/Categories";
import Api from "./components/Api";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Signup from "./components/Signup";
import Product from "./components/Product";
import Policy from "./components/RefundPolicy";
import Cancellation from "./components/Cancellation";
import Disclaimer from "./components/PrivacyPolicy";
import AboutUs from "./components/AboutUs";
import Delivery from "./components/Delivery";
import Quality from "./components/QualityTerms";
import TermsCondition from "./components/TermsCondition";
import FAQs from "./components/FAQs";
import Profile from "./components/Profile";
import Sitemap from "./components/Sitemap";
import ModalPop from "./components/ModalPop";
import Chat from "./components/Chat";

export const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalPop, setModalPop] = useState(false);
  const menuHandler = () => {
    setMenuOpen(!isMenuOpen);
    window.scrollTo(0, 0);
  };

  // const token = localStorage.getItem("token");
  return (
    <>
      {/* hello */}
      {/* <Router>
      <Nav />
      <div className="h-[5rem] w-full"></div>
      <Routes>
        {["/", "/home"].map((path) => (<Route exact key={path} path={path} element={<BackGround />} />))}
        <Route path="/resetpassword" exact element={<ResetPassword />} />
        <Route path="/page" exact element={<Page />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/hiredesigner" element={<HireDesigner />} />
        <Route exact path="/option" element={<Option />} />
      </Routes>
      <div className="h-screen w-full bg-black md:bg-blue-400 lg:bg"></div>
    </Router>
      <Form/> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Header handler={menuHandler} isMenuOpen={isMenuOpen} />
        <NavbarBottom />
        <MobileMenu isMenuOpen={isMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/modal"
            element={
              <ModalPop isModalPop={isModalPop} setModalPop={setModalPop} />
            }
          />
          <Route path="/changepassword" element={<ResetPassword />} />
          {/* <Route path="/productDetail" element={<ProductDetail />} /> */}
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
          <Route path="/user" element={<UserProfile />} />
          <Route
            path="/profile"
            element={
              <Profile isModalPop={isModalPop} setModalPop={setModalPop} />
            }
          />
          <Route path="/products" element={<ProductCollection />} />
          <Route
            path="/product/:id"
            element={
              <Product setModalPop={setModalPop} isModalPop={isModalPop} />
            }
          />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/categories/:id/:type" element={<Categories />} />
          <Route path="/api" element={<Api />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/refundpolicy" element={<Policy />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/privacypolicy" element={<Disclaimer />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/deliveryterms" element={<Delivery />} />
          <Route path="/qualityterms" element={<Quality />} />
          <Route path="/termsandconditions" element={<TermsCondition />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        <Chat />
        <Footer />
      </BrowserRouter>
    </>
  );
};
