export const SearchModal = ({ searchResult }) => {
    return (
        <div>
            {searchResult.length
                ? searchResult.map(user => (
                    <div key={user._id}>
                        <img src={user?.profileAvatar} alt="user-iamge" />
                        <div><span>{user?.fullName}</span><span>@{user?.username}</span></div>
                    </div>
                )) : <div>No user found</div>}
        </div>
    )
}