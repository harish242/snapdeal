// import { Button } from "bootstrap";
// import React, { useContext, useEffect } from "react";
// import ContextData from "../context/product-data";
// import "../style/left.css";

// const Left = () => {
//   const { allProducts, categories, setActive, active } =
//     useContext(ContextData);

//   const categorys = categories.map((data) => {
//     return (
//       // eslint-disable-next-line jsx-a11y/anchor-is-valid
//       <a
//         className="button"
//         onClick={() => {
//           setActive(data);
//         }}
//         key={data.category}
//       >
//         {data.category}
//       </a>
//     );
//   });

// //   useEffect(() => {
// //     // setActive(allProducts);
// //   }, []);

//   // useEffect(() => console.log(active), [active]);
//   // console.log(categories);
//   return (
//     <div className="list-parent">
      
//       <div className="select-order">Select Your products</div>
//       <div className="tabs-btn">
//         <a className="button" onClick={()=>setActive([])}>All</a>
//         {categorys}
//         </div>
//     </div>
//   );
// };

// export default Left;
