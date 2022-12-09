import BlackPhoneIcon from "../icons/logo";

export default function ApplyNowNavigation() {
    const redirect = () => window.open("https://discord.gg/phone", "https://discord.gg/phone", "scrollbars=yes, width=700, height=700, top=100, left=100");
    
    return <>
        <div className="nav-container">
            <BlackPhoneIcon />
            <div className="nav-links">
                <button className="btn-get-started" onClick={() => redirect()}>Community</button>
            </div>
        </div>
    </>
}