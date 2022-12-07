import BlackPhoneIcon from "../icons/logo";

export default function DefaultNavigation() {
    return <>
        <div className="nav-container">
            <BlackPhoneIcon />
            <div className="nav-links">
                <button className="btn-get-started">Request Access</button>
            </div>
        </div>
    </>
}