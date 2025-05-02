import { useState } from "react";
import { DatePicker, Button, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import "./App.css";

const { Title } = Typography;

const App = () => {
  const [championName, setChampionName] = useState(""); //store input
  const [searchName, setSearchName] = useState(""); // store search

  const version = "14.8.1";

  const handleSearch = (value) => {
    const trimmed = value.trim();
    const cleaned = trimmed.replace(/[\s.]/g, "");
    setChampionName(trimmed);
    setSearchName(cleaned);
  };

  return (
    <div style={{ width: 400, margin: "100px auto", textAlign: "center" }}>
      <Title level={2}>Champion Icon Finder</Title>

      <Input.Search
        placeholder="Enter champion name (e.g., Aatrox)"
        allowClear
        enterButton="Find"
        size="large"
        value={championName}
        onChange={(e) => setChampionName(e.target.value)}
        onSearch={handleSearch}
      />

      <Input.Search
        placeholder="Summoner Name (e.g., Hide on Bush)"
        allowClear
        enterButton="Find"
        size="large"
        value={championName}
        onChange={(e) => setChampionName(e.target.value)}
        onSearch={handleSearch}
      />

      <Input.Search
        placeholder="#Tag (e.g., #123)"
        allowClear
        enterButton="Find"
        size="large"
        value={championName}
        onChange={(e) => setChampionName(e.target.value)}
        onSearch={handleSearch}
      />

      {searchName && (
        <div style={{ marginTop: 24 }}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${searchName}.png`}
            alt={searchName}
            style={{ width: 200, height: 200, objectFit: "contain" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/200?text=Not+Found";
            }}
          />
          <div style={{ marginTop: 8 }}>{searchName}</div>
        </div>
      )}
    </div>
  );
};

export default App;
