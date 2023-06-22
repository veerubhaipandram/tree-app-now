import axios from "axios";
import { useEffect, useState } from "react";
import { TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeItem } from "@mui/lab";


function App() {
  const [data1, setData] = useState(null);
  const [arr, setarr] = useState([]);
  const handleclick = async () => {
    const ans = await axios.get(
      "http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173"
    );
    console.log(ans.data);
    setData(ans.data);
    setarr(ans.data.data);
  };

  return (
    <>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Fruit">
          <TreeItem nodeId="2" label="Apple" />
          <TreeItem nodeId="2" label="Mango" />
        </TreeItem>
        <TreeItem nodeId="5" label="Vegetable">
          <TreeItem nodeId="10" label="Salad" />
          <TreeItem nodeId="6" label="Potato"/>
            <TreeItem nodeId="8" label="Mushroom">
          </TreeItem>
        </TreeItem>
      </TreeView>
    </>
  );
}

export default App;