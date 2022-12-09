import { ActionFunction, json, redirect } from "@remix-run/cloudflare";
import { Outlet, useActionData } from "@remix-run/react";
import { useState } from "react";
import ApplyNowLayout from "~/components/layouts/apply-now";
import { validateEmail, validateName, validateTARUC, validateText } from "~/utils/helpers";
// import TurnstileWidget from "~/components/misc/turnstile";

export const action: ActionFunction = async ({ request }) => {
    const data = await request.formData()
    let email = data.get("email")?.toString()
    let name = data.get("name")?.toString()
    let use = data.get("use")?.toString()

    email = email as string
    name = name as string
    use = use as string

    const useOf = validateTARUC(use)

    const errors = {
        email: !validateEmail(email),
        name: !validateName(name),
        use: !validateText(useOf),
    }

    if (Object.values(errors).some(Boolean)) {
        return json({
            errors,
            fields: {
                email,
                name,
                use
            },
            form: action
        }, {
            status: 400
        })
    }
    return json({ message: "Thank you for your interest. You will be updated on your email." }, { status: 200 })
}

export default function ApplyNowPage() {
    const useAction = useActionData()
    console.log(useAction)
    const [formError, setFormError] = useState(useAction?.error || "")
    const [message, setMessage] = useState(useAction?.message || "")

    message ? setTimeout(() => {
        setMessage("")
    }, 10000) : null

    return <ApplyNowLayout>
        {/* <TurnstileWidget /> */}
        <div className="apply-bg-overlay container">
            <div className="apply-now-grid">

                <div className="t-box">
                    <h2 className="t2 kanit">Ready to start deploying your <span>infrastructure?</span></h2>
                    <p className="p2 spline">Fill out the form and wait for your invite.</p>
                </div>
                {message && <div className="error_p">{message}</div>}
                {formError && <div className="error_p">{formError}</div>}
                <Outlet />
            </div>
        </div>
    </ApplyNowLayout>
}