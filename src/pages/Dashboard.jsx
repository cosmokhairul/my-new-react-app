import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-3 bg-[#EBC400]">User Information</h1>

            <div className="mt-10 text-2xl">
                <img src={user?.photoURL || "/public/placeholder.jpg"} className="py-2" />
                <h1 className="py-1">Name : {user.displayName}</h1>
                <h1 className="py-1">Email : {user.email}</h1>
                <h1 className="py-1">Phone Number : {user.phoneNumber || "0171234567"}</h1>
            </div>
        </div>
    );
};

export default Dashboard;