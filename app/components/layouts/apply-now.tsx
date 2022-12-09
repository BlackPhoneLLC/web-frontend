import ApplyNowNavigation from "../navs/apply-now";

export default function ApplyNowLayout({ children }: { children: React.ReactNode }) {
    return <>
        <ApplyNowNavigation />
        {children}
    </>
}