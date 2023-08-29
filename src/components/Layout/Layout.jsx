
import Sidebar from "../Sidebar/Sidebar"
import './Layout.css'


const Layout = ({children,setFilteredProducts,products}) => {
  return (
    <div className="layout-container">
        <Sidebar setFilteredProducts={setFilteredProducts} products={products}/>
        <div className="children-container">
            {children}
        </div>
    </div>
  )
}

export default Layout