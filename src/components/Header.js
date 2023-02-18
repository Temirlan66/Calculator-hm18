import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth/authSlice";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthrized = useSelector((state) => state.auth.isAuthrized);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthrized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button
                onClick={() => dispatch(authActions.LogOut())}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
