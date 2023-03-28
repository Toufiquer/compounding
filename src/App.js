import "./App.css";
import From from "./From";
import Table from "./Table";

function App() {
  return (
    <div className={` container mx-auto my-4`}>
      <div className="grid grid-cols-[400px_1fr] gap-4">
        <div className="p-1">
          <From></From>
        </div>
        {/* Table */}
        <div className="p-2">
          <Table></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
