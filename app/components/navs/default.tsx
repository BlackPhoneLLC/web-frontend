import BlackPhoneIcon from "../icons/logo";

export default function DefaultNavigation() {
    const redirect = () => window.location.href = "/apply-now"

    return <>
        <div className="nav-container">
            <BlackPhoneIcon />
            <div className="nav-links">
                <button className="btn-get-started" onClick={() => redirect()}>Request Access</button>
            </div>
        </div>
    </>
}