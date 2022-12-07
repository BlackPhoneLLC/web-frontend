import Arrows from "~/components/icons/arrows";
import DefaultLayout from "~/components/layouts/defualt";

export default function Index() {
  return <DefaultLayout>
    <div>
      <div className="bg-overlay container">

        <h1 className="kanit">Black Phone</h1>
        <p className="spline under-text">Distributing data across dozens of data centers.</p>
        <div className="animations"><Arrows /></div>
        <div className="box-get-started">

          <div className="box-display">
            <div className="box-display-h2-p">
              <h2 className="box-h2">Currently invite-only beta.</h2>
              <p className="box-p spline">Request access.</p>
            </div>
            <button className="btn-get-started">Apply</button>
          </div>

        </div>
      </div>
    </div>
  </DefaultLayout>

}
