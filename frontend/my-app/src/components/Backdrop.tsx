import "./Backdrop.css";

const Backdrop = ({ click, show }: { click: any, show: any }) => {
    return show && <div className="backdrop" onClick={click}></div>;
};
export default Backdrop
