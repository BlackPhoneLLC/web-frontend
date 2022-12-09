import DefaultNavigation from "../navs/default";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return <>
        <DefaultNavigation />{children}
    </>
}