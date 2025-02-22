/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./styles.module.scss";
import fbIcon from "../../../assets/icons/iconFb.svg";
import IgIcon from "../../../assets/icons/iconIg.svg";
import YtbIcon from "../../../assets/icons/iconYtb.svg";
const BoxIcon = ({ type, href }) => {
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return IgIcon;
      case "ytb":
        return YtbIcon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
};

export default BoxIcon;
