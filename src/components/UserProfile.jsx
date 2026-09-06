import { useDispatch, useSelector } from "react-redux";
import { changeRole, selectUser } from "../redux/slices/appSlice";

function UserProfile() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <div className="user-profile">
            <h3>User Profile</h3>

            <p>
                <strong>Name:</strong> {user.name}
            </p>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Role:</strong> {user.role}
            </p>

            <button
                className="role-button"
                onClick={() => dispatch(changeRole())}
            >
                Change Role
            </button>
        </div>
    );
}

export default UserProfile;
