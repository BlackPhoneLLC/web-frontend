import Turnstile from "react-turnstile";
export default function TurnstileWidget() {
    return (
        <Turnstile
            sitekey="0x4AAAAAAABhAP8TG2GmJh9l"
            onVerify={(token) => alert(token)}
        />
    );
}