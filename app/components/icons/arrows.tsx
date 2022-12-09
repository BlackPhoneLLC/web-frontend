import ArrowJson from "./arrows.json";
export default function Arrows(): JSX.Element | null {

    if (typeof document === "undefined") return null;
    return <>
        {/* @ts-ignore */}
        <lottie-player
            autoplay
            loop
            src={JSON.stringify(ArrowJson)}
        />
    </>
}