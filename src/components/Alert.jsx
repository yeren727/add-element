import {useEffect} from "react";
function Alert({type, msg, removeAlert, list}) {
  useEffect(() => {
    const t = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(t);
  }, []);
    return <p className={`alert alert-${type}`}>{msg}</p>;
}
export default Alert;