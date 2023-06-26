import "./AvatarModal.css"
export const AvatarModal = ({ setAvatarModal, profileDetails, setProfileDetails }) => {
    return (
        <div className="avatar-modal-wrapper">
            <div className="avatar-modal">
                <div className="avatar-modal-header">
                    <div>
                        <p>Choose Avatar</p>
                    </div>
                    <div>
                        <i className="fa fa-times" aria-hidden="true" onClick={() => setAvatarModal(false)}></i>
                    </div>
                </div>
                <div className="avatar-images">
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png" alt="avatar-1" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/4140/4140047.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" alt="avatar-2" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="avatar-3" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/924/924915.png" alt="avatar-4" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/924/924915.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/4322/4322991.png" alt="avatar-5" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/4322/4322991.png" })
                        setAvatarModal(false)
                    }} />

                    <img src="https://cdn-icons-png.flaticon.com/128/1154/1154448.png" alt="avatar-6" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/1154/1154448.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/2154/2154457.png" alt="avatar-7" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/2154/2154457.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/3940/3940417.png" alt="avatar-8" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/3940/3940417.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/366/366258.png" alt="avatar-9" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/366/366258.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/547/547413.png" alt="avatar-10" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/547/547413.png" })
                        setAvatarModal(false)
                    }} />

                    <img src="https://cdn-icons-png.flaticon.com/128/219/219970.png" alt="avatar-11" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/219/219970.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/706/706816.png" alt="avatar-12" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/706/706816.png" })
                        setAvatarModal(false)
                    }} />
                    {/* ..................................................... */}

                    <img src="https://cdn-icons-png.flaticon.com/128/2154/2154763.png" alt="avatar-13" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/2154/2154763.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/924/924915.png" alt="avatar-14" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/924/924915.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/366/366296.png" alt="avatar-15" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/366/366296.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" alt="avatar-16" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/4140/4140037.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/219/219969.png" alt="avatar-17" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/219/219969.png" })
                        setAvatarModal(false)
                    }} />

                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140051.png" alt="avatar-18" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/4140/4140051.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/1326/1326405.png" alt="avatar-19" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/1326/1326405.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="	https://cdn-icons-png.flaticon.com/128/1785/1785896.png" alt="avatar-20" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "	https://cdn-icons-png.flaticon.com/128/1785/1785896.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/921/921071.png" alt="avatar-21" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/921/921071.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/1308/1308845.png" alt="avatar-22" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/1308/1308845.png" })
                        setAvatarModal(false)
                    }} />

                    <img src="https://cdn-icons-png.flaticon.com/128/10155/10155999.png" alt="avatar-23" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/10155/10155999.png" })
                        setAvatarModal(false)
                    }} />
                    <img src="https://cdn-icons-png.flaticon.com/128/949/949635.png" alt="avatar-12" onClick={(e) => {
                        setProfileDetails({ ...profileDetails, profileAvatar: "https://cdn-icons-png.flaticon.com/128/949/949635.png" })
                        setAvatarModal(false)
                    }} />

                </div>
            </div>
        </div>
    )
}