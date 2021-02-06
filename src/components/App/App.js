import "./App.css";
import React, {
  useEffect,
  useState,

} from "react";
import { Outlet } from "react-router-dom"
import { SearchBar } from "../searchBar/SearchBar"


import {Main} from "../Main/Main" 
// import ReactPaginate from "react-paginate";

// import "react-table-filter/lib/styles.css";

export default function App() {


  const handleSearch =name =>event=>console.log(event.target.value)
  
  return (
    <>
  <SearchBar handleSearch={handleSearch("name")}/>
    <Main/>
 </>
    );
}


// <Outlet/>

// Pagination Of Pages
// <ReactPaginate
// previousLabel={"previous"}
// nextLabel={"next"}
// breakLabel={"..."}
// breakClassName={"break-me"}
// pageCount={resultList.length /
// }
// onPageChange={handlePageClick}
// containerClassName={"pagination"}
// subContainerClassName={"pages pagination"}
// activeClassName={"active"}
// />



  // const _filterUpdated = (newData, filtersObject) => {
  //     if(newData){
  //       setSearchResult(()=>newData)
  //       console.log(searchResult);

  //     }
  // };