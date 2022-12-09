export default function BlackPhoneIcon() {
    const redirect = () => window.location.href = "/"

    return <img src="/logo.png" alt="/logo.png" className={"logo"} onClick={redirect} />
}