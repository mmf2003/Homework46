import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    selectError,
    selectLoading,
    selectUser,
} from "../redux/slices/appSlice";

import { fetchUser } from "../redux/asyncActions/fetchUser";

function UserProfile() {
    const [selectedUserId, setSelectedUserId] = useState(1);

    const user = useSelector(selectUser);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();

    const userIds = Array.from({ length: 10 }, (_, index) => index + 1);

    const handleLoadUser = () => {
        dispatch(fetchUser(selectedUserId));
    };

    return (
        <div className="user-profile">
            <h3>User Profile</h3>

            <div className="user-picker">
                <p className="user-picker__label">Select User:</p>

                <div className="user-picker__buttons">
                    {userIds.map((id) => (
                        <button
                            key={id}
                            type="button"
                            className={
                                selectedUserId === id
                                    ? "user-picker__button active"
                                    : "user-picker__button"
                            }
                            onClick={() => setSelectedUserId(id)}
                        >
                            {id}
                        </button>
                    ))}
                </div>
            </div>

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
