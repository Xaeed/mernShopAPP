import "./SideDrawer.css"
const SideDrawer = ({ show, click }: { show: any, click: any }) => {
    const sideBarclass = ["sidedrawer"]
    if (show) {
        sideBarclass.push('show')
    }
    return <div className={sideBarclass.join(" ")}><button onClick={click}>side drawer is shown.</button> </div>

}

export default SideDrawer