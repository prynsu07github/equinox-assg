import SitesTable from "./SiteTable"
import Timeline from "./Timeline"

const MainWindow = () => {
  return (
    <div className="w-full flex justify-between">
      <SitesTable />
      <Timeline />
    </div>
  )
}

export default MainWindow