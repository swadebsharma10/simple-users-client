

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div className="bg-blue-300 p-10 rounded-2xl">
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;