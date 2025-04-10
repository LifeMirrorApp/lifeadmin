import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import Sidebars from "../Sidebars";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "./admin.css";
import { useSidebar } from "../SidebarProvider";
import news from "./pic.jpeg";
import CreateIdea from "./CreateIdea";
import Template from "./Template";
import CreateVision from "./CreateVision";
import DeleteVision from "./DeleteVision";
import EditVision from "./EditVision";
import VisionBoard from "./VisionBoard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AdminDashboard = () => {
  const { user } = useAuth();
  const { isSidebarOpen } = useSidebar(); // Sidebar state
  return (
    <div>
      <body>
        <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <SideNav />
          <TopNav />
          <div className="page-wrapper" style={{ marginTop: "10px" }}>
            <div className="content">
              <div
                class="text-gray max-w-screen-2xl px-4 py-8 mx-auto"
                id="featured-categories:homepage_featured_categories"
              >
                <div class="w-full">
                  <div class="text-center mb-6 md:mb-12">
                    <h3 class="text-2xl md:text-3xl xl:text-4xl">
                      Resource every mission.
                    </h3>
                    <h4 class="text-lg mt-4 max-w-xl mx-auto">
                      Your church covers a lot of ground. That's why Lifeway
                      provides the world's leading selection of ministry
                      resources.
                    </h4>
                  </div>
                  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 2xl:gap-12">
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/church-ordering"
                        title="Church Ordering"
                        data-link-text="featured-categories::homepage featured categories::featured categories - church ordering"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories - church ordering"
                      >
                        <span class="relative block">
                          <img
                            alt="Church Ordering text displayed over a blurred background of a laptop screen"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Church Ordering
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/vacation-bible-school"
                        title="Vacation Bible School"
                        data-link-text="featured-categories::homepage featured categories::featured categories vacation bible school"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories vacation bible school"
                      >
                        <span class="relative block">
                          <img
                            alt="Two children smiling and holding a purple kite"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Vacation Bible School
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/bible-studies"
                        data-link-text="featured-categories::homepage featured categories::featured categories bible studies"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories bible studies"
                      >
                        <span class="relative block">
                          <img
                            alt=""
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Bible Studies
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/bible-studies/sunday-school"
                        title="Sunday School"
                        data-link-text="featured-categories::homepage featured categories::featured categories sunday school"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories sunday school"
                      >
                        <span class="relative block">
                          <img
                            alt="Stack of Bible study booklets with 'Bible Studies for Life' on top"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Sunday School
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/bibles"
                        data-link-text="featured-categories::homepage featured categories::featured categories bibles"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories bibles"
                      >
                        <span class="relative block">
                          <img
                            alt="Bible"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Bibles
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/church-supplies"
                        title="Church Supplies"
                        data-link-text="featured-categories::homepage featured categories::featured categories church supplies"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories church supplies"
                      >
                        <span class="relative block">
                          <img
                            alt="A prepackaged communion cup with grape juice and a wafer"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Church Supplies
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/books"
                        title="Books"
                        data-link-text="featured-categories::homepage featured categories::featured categories books"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories books"
                      >
                        <span class="relative block">
                          <img
                            alt="Two books: Eyes Up by Alexandra Hoover and A Fruitful Life by Yahaira Ramo"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Books
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/events"
                        data-link-text="featured-categories::homepage featured categories::featured categories events"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories events"
                      >
                        <span class="relative block">
                          <img
                            alt="Priscilla Shirer speaking passionately on stage"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Events
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/events/christian-summer-camps"
                        title="Camps"
                        data-link-text="featured-categories::homepage featured categories::featured categories camps"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories camps"
                      >
                        <span class="relative block">
                          <img
                            alt="A group of energetic young people, with one wearing a pink cowboy hat and sunglasses"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Camps
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/worship"
                        title="Worship "
                        data-link-text="featured-categories::homepage featured categories::featured categories worship"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories worship"
                      >
                        <span class="relative block">
                          <img
                            alt="Close-up of a person playing an acoustic guitar"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Worship
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/shop/bible-studies/video"
                        data-link-text="featured-categories::homepage featured categories::featured categories bible study video sessions"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories bible study video sessions"
                      >
                        <span class="relative block">
                          <img
                            alt="Bible study video sessions"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Bible Study Video Sessions
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-gray hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/en/special-emphasis/clearance"
                        title="Clearance"
                        data-link-text="featured-categories::homepage featured categories::featured categories clearance"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories clearance"
                      >
                        <span class="relative block">
                          <img
                            alt="Clearance text over a solid yellow background"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Clearance
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AdminDashboard;
