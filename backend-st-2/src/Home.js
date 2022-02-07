import React, { useState, useEffect } from "react";
import "./Home.css";
import Person from "@mui/icons-material/Person";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import Button from "./components/Button";
import Input from "./components/Input";
import { Link } from "react-router-dom";
import ShowData from "./ShowData";
import axios from "axios";
import Dialog from "./Dialog";

function Home() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data?.data) {
      setFilteredData(
        data?.data?.filter((data) => data?.name?.includes(searchValue))
      );
    }
  }, [data, searchValue]);

  const getData = async () => {
    const data = await axios.get("http://localhost:3001/contacts");
    setData(data);
  };

  const deleteContact = async () => {
    await axios.delete(`http://localhost:3001/contacts/${idToDelete}`);
    getData();
  };

  const handleOpenDialog = (id) => {
    setIsDialogOpen(true);
    setIdToDelete(id);
  };

  const handleContactDelete = (isDeleteContact) => {
    if (isDeleteContact) {
      deleteContact();
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="home">
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
      />
      <Link className="home__link" to="/add-contact">
        <Button />
      </Link>
      <div className="home__contact_details">
        <div className="home__contact_details_header">
          <div className="home__contact_detais_container">
            <Person className="home__contact_details_icon" />
            <div>Name</div>
          </div>
          <div className="home__contact_detais_container">
            <Phone className="home__contact_details_icon" />
            <div>Phone</div>
          </div>
          <div className="home__contact_detais_container">
            <Email className="home__contact_details_icon" />
            <div>Email</div>
          </div>
        </div>
        <ShowData data={filteredData} handleOpenDialog={handleOpenDialog} />
      </div>
      {isDialogOpen && <Dialog handleContactDelete={handleContactDelete} />}
    </div>
  );
}

export default Home;
