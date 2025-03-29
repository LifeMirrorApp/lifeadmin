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
  const [visions, setVisions] = useState([]);
  const [boardVisions, setBoardVisions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [boardType, setBoardType] = useState("manual");
  const apiUrl = process.env.REACT_APP_API_URL;
  const [boardvision, setBoardVision] = useState([]);
  const [points, setPoints] = useState([]);
  const { isSidebarOpen } = useSidebar(); // use context to get sidebar state
  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [showModalss, setShowModalss] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [layout, setLayout] = useState([]);
  const [visionId, setVisionId] = useState(null);
  const [selectedVision, setSelectedVision] = useState(null);
  const [boardSize, setBoardSize] = useState("4x4");
  const visionBoardRef = useRef(null);

  const handlePrint = () => {
    if (visionBoardRef.current) {
      const printContents = visionBoardRef.current.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reload to restore the original page
    }
  };
  const boardOptions = {
    "2x2": { cols: 2, rows: 2 },
    "3x3": { cols: 3, rows: 3 },
    "4x4": { cols: 4, rows: 4 },
    custom: { cols: 5, rows: 5 },
  };
  const { rows, cols } = boardOptions[boardSize];
  const handleSizeChange = (size) => {
    setBoardSize(size);
    const { cols, rows } = boardOptions[size];

    // Ensure visions is an array before mapping
    setLayout(
      (visions || []).map((vision, index) => ({
        i: vision.id.toString(),
        x: index % cols,
        y: Math.floor(index / cols),
        w: 1,
        h: 1,
      }))
    );
  };
  // Fetch available visions (from API)
  useEffect(() => {
    const fetchVisions = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
          console.error("No authentication token found");
          return;
        }

        const userId = user?._id; // Ensure user ID is available

        // Fetch user-created visions
        const userVisionsResponse = await axios.get(`${apiUrl}/api/get-all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Fetch template visions
        const templateVisionsResponse = await axios.get(
          `${apiUrl}/api/get-template-visions/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Merge both visions
        setVisions([
          ...userVisionsResponse.data,
          ...templateVisionsResponse.data,
        ]);
      } catch (error) {
        console.error("Error fetching visions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisions();
  }, [user]);
  // useEffect(() => {
  //   if (boardType === "template") {
  //     setBoardVisions(
  //       Array(16) // 4x4 grid
  //         .fill()
  //         .map((_, index) => ({
  //           _id: `template-${index}`,
  //           imageUrl: `https://source.unsplash.com/random/200x200?sig=${index}`,
  //         }))
  //     );
  //   } else {
  //     setBoardVisions([]);
  //   }
  // }, [boardType]);

  useEffect(() => {
    if (boardType === "template") {
      const localImages = [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.png",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/9.jpg",
        "/images/10.jpg",
        "/images/11.jpg",
        "/images/12.jpg",
        "/images/13.jpg",
        "/images/14.jpg",
        "/images/15.jpg",
        "/images/16.jpg",
      ];

      setBoardVisions(
        localImages.map((img, index) => ({
          _id: `template-${index}`,
          imageUrl: img,
        }))
      );
    } else {
      setBoardVisions([]);
    }
  }, [boardType]);

  // Fetch visions already on the board
  // useEffect(() => {
  //   const fetchBoardVisions = async () => {
  //     try {
  //       const token = localStorage.getItem("jwtToken");
  //       if (!token) {
  //         console.error("No authentication token found");
  //         return;
  //       }

  //       const userId = user?._id;

  //       // Fetch visions on the board
  //       const userVisionsResponse = await axios.get(
  //         `${apiUrl}/api/get-all-board`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       // Fetch template visions on board
  //       const templateVisionsResponse = await axios.get(
  //         `${apiUrl}/api/get-template-visions-board/${userId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       // Merge both board visions
  //       setBoardVisions([
  //         ...userVisionsResponse.data,
  //         ...templateVisionsResponse.data,
  //       ]);
  //     } catch (error) {
  //       console.error("Error fetching visions:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBoardVisions();
  // }, [user]);
  // useEffect(() => {
  //   const fetchBoardVisions = async () => {
  //     try {
  //       const token = localStorage.getItem("jwtToken");
  //       if (!token) {
  //         console.error("No authentication token found");
  //         return;
  //       }

  //       const userId = user?._id;
  //       let mergedVisions = [];

  //       // Fetch user visions on the board
  //       const userVisionsResponse = await axios.get(
  //         `${apiUrl}/api/get-all-board`,
  //         { headers: { Authorization: `Bearer ${token}` } }
  //       );

  //       // Fetch template visions on board
  //       const templateVisionsResponse = await axios.get(
  //         `${apiUrl}/api/get-template-visions-board/${userId}`,
  //         { headers: { Authorization: `Bearer ${token}` } }
  //       );

  //       mergedVisions = [
  //         ...userVisionsResponse.data,
  //         ...templateVisionsResponse.data,
  //       ];

  //       // If it's a template board, add local images *only if there are missing slots*
  //       if (boardType === "template") {
  //         const localImages = [
  //           "/images/1.jpg",
  //           "/images/2.jpg",
  //           "/images/3.jpg",
  //           "/images/4.jpg",
  //           "/images/5.png",
  //           "/images/6.jpg",
  //           "/images/7.jpg",
  //           "/images/8.jpg",
  //           "/images/9.jpg",
  //           "/images/10.jpg",
  //           "/images/11.jpg",
  //           "/images/12.jpg",
  //           "/images/13.jpg",
  //           "/images/14.jpg",
  //           "/images/15.jpg",
  //           "/images/16.jpg",
  //         ];

  //         // Shuffle local images
  //         const shuffledImages = [...localImages].sort(
  //           () => 0.5 - Math.random()
  //         );

  //         // Fill missing slots up to 16 images
  //         while (mergedVisions.length < 16 && shuffledImages.length > 0) {
  //           mergedVisions.push({
  //             _id: `template-${mergedVisions.length}`,
  //             imageUrl: shuffledImages.pop(),
  //           });
  //         }
  //       }

  //       setBoardVisions(mergedVisions);
  //     } catch (error) {
  //       console.error("Error fetching visions:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBoardVisions();
  // }, [user, boardType]);
  useEffect(() => {
    const fetchBoardVisions = async () => {
      try {
        setLoading(true); // Start loading state

        const token = localStorage.getItem("jwtToken");
        if (!token) {
          console.error("No authentication token found");
          return;
        }

        const userId = user?._id;
        let mergedVisions = [];

        console.log("Fetching board visions...");

        // Fetch user visions on the board
        const userVisionsResponse = await axios.get(
          `${apiUrl}/api/get-all-board`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("User Visions Response:", userVisionsResponse.data);

        // Fetch template visions on board
        const templateVisionsResponse = await axios.get(
          `${apiUrl}/api/get-template-visions-board/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("Template Visions Response:", templateVisionsResponse.data);

        // Merge both fetched visions
        mergedVisions = [
          ...userVisionsResponse.data,
          ...templateVisionsResponse.data,
        ];

        console.log("Merged Visions Before Local Images:", mergedVisions);

        // Check if fetched visions are actually available
        if (mergedVisions.length === 0) {
          console.warn("⚠️ No fetched visions found, using local images...");
        } else {
          console.log("✅ Fetched visions found, using them.");
        }

        // If it's a template board and no visions were fetched, use local images
        if (boardType === "template") {
          const localImages = [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
            "/images/4.jpg",
            "/images/5.png",
            "/images/6.jpg",
            "/images/7.jpg",
            "/images/8.jpg",
            "/images/9.jpg",
            "/images/10.jpg",
            "/images/11.jpg",
            "/images/12.jpg",
            "/images/13.jpg",
            "/images/14.jpg",
            "/images/15.jpg",
            "/images/16.jpg",
          ];

          // Shuffle local images
          const shuffledImages = [...localImages].sort(
            () => 0.5 - Math.random()
          );

          console.log("Shuffled Local Images:", shuffledImages);

          // Ensure the board has at most 16 images
          while (mergedVisions.length < 16 && shuffledImages.length > 0) {
            mergedVisions.push({
              _id: `template-${mergedVisions.length}`,
              imageUrl: shuffledImages.pop(),
            });
          }

          console.log(
            "Final Board Visions After Adding Local Images:",
            mergedVisions
          );
        }

        setBoardVisions(mergedVisions);
      } catch (error) {
        console.error("❌ Error fetching visions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoardVisions();
  }, [user, boardType]); // Dependencies ensure the board updates correctly

  useEffect(() => {
    console.log("useEffect triggered"); // Check if it runs
  }, [user, boardType]);

  // Handle Drag-and-Drop
  // const handleDragEnd = async (result) => {
  //   if (!result.destination) return; // Ignore invalid drops

  //   const { source, destination } = result;

  //   if (source.droppableId === destination.droppableId) {
  //     return; // No need to update the database if staying in the same list
  //   }

  //   const updatedVisions = [...visions];
  //   const updatedBoardVisions = [...boardVisions];

  //   let movedItem;

  //   if (source.droppableId === "visionsList") {
  //     movedItem = updatedVisions.splice(source.index, 1)[0];
  //     if (boardType === "template") {
  //       updatedBoardVisions = updatedBoardVisions.filter(
  //         (item) => !item._id.startsWith("template-") // Remove first template image
  //       );
  //     }

  //     updatedBoardVisions.splice(destination.index, 0, movedItem);

  //     // await moveToBoard(movedItem._id);
  //     await moveToBoard(movedItem);
  //   } else {
  //     movedItem = updatedBoardVisions.splice(source.index, 1)[0];
  //     updatedVisions.splice(destination.index, 0, movedItem);
  //     await removeFromBoard(movedItem._id); // Update database
  //   }

  //   setVisions(updatedVisions);
  //   setBoardVisions(updatedBoardVisions);
  // };

  const handleDragEnd = async (result) => {
    if (!result.destination) return; // Ignore invalid drops

    const { source, destination } = result;
    const isTemplateBoard = boardType === "template";
    if (source.droppableId === destination.droppableId) {
      return; // No need to update the database if staying in the same list
    }
    // Clone visions to avoid mutating state directly
    const updatedVisions = [...visions];
    let updatedBoardVisions = [...boardVisions];
    let movedItem;

    if (source.droppableId === "visionsList") {
      movedItem = updatedVisions.splice(source.index, 1)[0];

      // If dropping onto a template board, do NOT remove template images
      if (boardType === "template") {
        updatedBoardVisions = updatedBoardVisions.filter(
          (item) => !item._id.startsWith("template-") // Remove first template image
        );
      }

      updatedBoardVisions.splice(destination.index, 0, movedItem);

      // Ensure correct API is called
      await moveToBoard(movedItem, isTemplateBoard);
    } else {
      movedItem = updatedBoardVisions.splice(source.index, 1)[0];
      updatedVisions.splice(destination.index, 0, movedItem);
      await removeFromBoard(movedItem._id);
    }

    setVisions(updatedVisions);
    setBoardVisions(updatedBoardVisions);
  };
  const handlePlaceVision = (row, col) => {
    if (selectedVision) {
      setBoardVisions((prev) => [
        ...prev,
        { ...selectedVision, row, col }, // Add selected vision at chosen spot
      ]);
      setSelectedVision(null); // Clear selection after placing
    }
  };
  // const moveToBoard = async (id) => {
  //   const token = localStorage.getItem("jwtToken");
  //   if (!token) {
  //     console.error("No authentication token found");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`${apiUrl}/api/move-to-board/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ board: true }),
  //     });

  //     if (!response.ok) {
  //       console.error("Failed to update vision to board");
  //     }
  //   } catch (error) {
  //     console.error("Error moving vision to board:", error);
  //   }
  // };
  // const moveToBoard = async (vision) => {
  //   if (!vision || !vision._id) {
  //     console.error("Invalid vision object, missing _id");
  //     return;
  //   }

  //   const token = localStorage.getItem("jwtToken");
  //   if (!token) {
  //     console.error("No authentication token found");
  //     return;
  //   }

  //   // Use the appropriate endpoint based on `vision.imageUrls?.[0]`
  //   const endpoint = vision.imageUrls?.[0]
  //     ? "move-to-board-template"
  //     : "move-to-board";

  //   try {
  //     const response = await fetch(`${apiUrl}/api/${endpoint}/${vision._id}`, {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ board: true }),
  //     });

  //     if (!response.ok) {
  //       console.error("Failed to update vision to board");
  //     }
  //   } catch (error) {
  //     console.error("Error moving vision to board:", error);
  //   }
  // };

  const moveToBoard = async (vision) => {
    if (!vision || !vision._id) {
      console.error("Invalid vision object, missing _id");
      return;
    }

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      console.error("No authentication token found");
      return;
    }

    // `vision.imageUrls?.[0]`;
    const endpoint = vision.imageUrls?.[0]
      ? "move-to-board-template"
      : "move-to-board";

    try {
      const response = await fetch(`${apiUrl}/api/${endpoint}/${vision._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ board: true }),
      });

      if (!response.ok) {
        console.error("Failed to update vision to board");
      }
    } catch (error) {
      console.error("Error moving vision to board:", error);
    }
  };

  // const moveToBoard = async (vision) => {
  //   if (!vision || !vision._id) {
  //     console.error("Invalid vision object, missing _id");
  //     return;
  //   }

  //   const token = localStorage.getItem("jwtToken");
  //   if (!token) {
  //     console.error("No authentication token found");
  //     return;
  //   }

  //   const endpoint = vision.imageUrls?.[0]
  //     ? "move-to-board-template"
  //     : "move-to-board";

  //   try {
  //     const response = await fetch(`${apiUrl}/api/${endpoint}/${vision._id}`, {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ board: true }),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       console.error("Failed to update vision to board:", errorData.message);
  //     } else {
  //       const data = await response.json();
  //       console.log("Success:", data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error moving vision to board:", error);
  //   }
  // };

  const removeFromBoard = async (id) => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      console.error("No authentication token found");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/move-to-board/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ board: false }),
      });

      if (!response.ok) {
        console.error("Failed to update vision back to available");
      }
    } catch (error) {
      console.error("Error removing vision from board:", error);
    }
  };

  const updateTableData = async () => {
    try {
      const userId = user._id; // Make sure you have access to the logged-in user's ID
      const [manualVisionsRes, templateVisionsRes] = await Promise.all([
        axios.get(`${apiUrl}/api/get-all`),
        axios.get(`${apiUrl}/api/get-template-visions/${userId}`),
      ]);

      // Merge both responses into one array
      const combinedVisions = [
        ...manualVisionsRes.data,
        ...templateVisionsRes.data,
      ];

      setVisions(combinedVisions); // Update the state with merged visions
    } catch (error) {
      console.error("Error fetching updated visions:", error);
    }
  };
  const updateBoardTableData = async () => {
    try {
      const userId = user._id; // Make sure you have access to the logged-in user's ID
      const [manualVisionsRes, templateVisionsRes] = await Promise.all([
        axios.get(`${apiUrl}/api/get-all?board=true`),
        axios.get(`${apiUrl}/api/get-template-visions/${userId}?board=true`),
      ]);

      // Merge both responses into one array
      const combinedVisions = [
        ...manualVisionsRes.data,
        ...templateVisionsRes.data,
      ];

      setBoardVision(combinedVisions); // Update the state with merged visions
    } catch (error) {
      console.error("Error fetching updated visions:", error);
    }
  };
  return (
    <div>
      <body>
        <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <SideNav />
          <TopNav />
        </div>
      </body>
    </div>
  );
};

export default AdminDashboard;
