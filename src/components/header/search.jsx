import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";

function BaresSearch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = (value, _e, info) => console.log(info.source, value);

  return (
    <>
      <div onClick={showModal} className="searchIcon row flex-center-center">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <Modal
        title="Search"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {" "}
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Modal>
    </>
  );
}

export default BaresSearch;
