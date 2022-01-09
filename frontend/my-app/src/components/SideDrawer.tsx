import "./SideDrawer.css"
const SideDrawer = ({ show }: { show: any }) => {
    console.log('show', show)
    const sideBarclass = ["sidedrawer"]
    if (show) {
        console.log('show is true')
        sideBarclass.push('show')
    }
    return <div className={sideBarclass.join(" ")}>side drawer is shown asdad </div>

}

export default SideDrawer