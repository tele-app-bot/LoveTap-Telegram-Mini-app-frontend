import { SyncLoader } from "react-spinners";
import styles from "./loader.module.css";
export const Laoder = () => {
  return (
    <div
      className={`${styles.bg} fixed top-0 left-0 w-full flex  justify-center items-center min-h-screen`}
    >
      <SyncLoader color="#36d7b7" />
    </div>
  );
};
