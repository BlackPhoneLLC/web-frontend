import Arrows from "~/components/icons/arrows";
import DefaultLayout from "~/components/layouts/default";

export default function Index() {
  const redirect = (endpoint: string) => {
    window.location.href = "/" + endpoint;
  }

  if (typeof document === "undefined") return null;

  return <DefaultLayout>
    <div className="container">
      <div className="bg-overlay">

        <h1 className="kanit tn">Black Phone</h1>
        <p className="spline under-text">Distributing data across dozens of data centers.</p>
        <div className="animations">
          <Arrows />
        </div>
        <div className="box-get-started">

          <div className="box-display">
            <div className="box-display-h2-p">
              <h2 className="box-h2">Currently invite-only beta.</h2>
              <p className="box-p spline">Request access.</p>
            </div>
            <button className="btn-get-started" onClick={() => redirect("apply-now")}>Apply</button>
          </div>

        </div>
      </div>
    </div>
  </DefaultLayout>

}
