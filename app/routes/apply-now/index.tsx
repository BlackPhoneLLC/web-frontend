import { useState } from "react"
import { FormField } from "~/components/misc/formField";

export default function ApplyNowForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        use: ""
    });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    return <>
        <div className="form">

            <form method="post" className="apply-now-form">
                <FormField htmlFor="name" label="Name" value={data.name} onChange={handleInputChange} type="text" length={{ min: 3, max: 20 }} />
                <FormField htmlFor="email" label="Email" value={data.email} onChange={handleInputChange} type="text" length={{ min: 3, max: 20 }} />
                <FormField htmlFor="use" label="What will you deploy?" value={data.use} onChange={handleInputChange} type="text" length={{ min: 3, max: 20 }} />
                <button type="submit" >Submit</button>
            </form>
        </div>

    </>
}