import { useDispatch, useSelector } from "react-redux";

import {
    selectError,
    selectLoading,
    selectUser,
} from "../redux/slices/appSlice";

import { fetchUser } from "../redux/asyncActions/fetchUser";

function UserProfile() {
    const user = useSelector(selectUser);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();

    const handleLoadUser = () => {
        dispatch(fetchUser(1));
    };

    return (
        <div className="user-profile">
            <h3>User Profile</h3>

            {loading && <p className="loading-message">Loading user...</p>}

            {error && <p className="error-message">{error}</p>}

            {!loading && (
                <>
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>

                    <p>
                        <strong>Role:</strong> {user.role}
                    </p>
                </>
            )}

            <button
                className="load-button"
                onClick={handleLoadUser}
                disabled={loading}
            >
                {loading ? "Loading..." : "Load User from API"}
            </button>
        </div>
    );
}

export default UserProfile;
