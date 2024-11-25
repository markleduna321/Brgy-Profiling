import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update_user_thunk } from "../_redux/user-management-thunk";


export default function UserEditSection({ selectedUser, onClose }) {
    if (!selectedUser) return null; // If no user is selected, return null to not render

    const dispatch = useDispatch();

    // Initialize the state with the selected user's data
    const [userData, setUserData] = useState({
        name: selectedUser.name,
        email: selectedUser.email,
        password: "", // Keep the password field empty
        role_id: selectedUser.role_id,
        is_online: selectedUser.is_online,
    });

    // Update user data state when the selectedUser changes
    useEffect(() => {
        setUserData({
            name: selectedUser.name,
            email: selectedUser.email,
            password: "", // Reset password field on user change
            role_id: selectedUser.role_id,
            is_online: selectedUser.is_online,
        });
    }, [selectedUser]);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Dispatch the update thunk with the user ID and updated data
            const updatedUser = await dispatch(update_user_thunk(selectedUser.id, userData));
            console.log("Updated user:", updatedUser);

            // Optionally show a success message or perform additional actions
            alert("User updated successfully!");

            // Close the modal after updating
            onClose();
        } catch (error) {
            console.error("Failed to update user:", error);
            alert("Failed to update user. Please try again.");
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Password field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select
                        name="role_id"
                        value={userData.role_id}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value={1}>Admin</option>
                        <option value={2}>User</option>
                        <option value={3}>Household</option>
                    </select>
                </div>

                <div className="flex space-x-4 mt-4">
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
                        Save Changes
                    </button>
                    <button type="button" onClick={onClose} className="p-2 bg-gray-500 text-white rounded-lg">
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
}
