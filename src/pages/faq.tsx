export default function Faq() {
    return (
      <div className="flex flex-col gap-1 p-2">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is this sindi.cat?
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Do you collect my data?
          </div>
          <div className="collapse-content">
            <p>tabIndex={1} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How was this website made?
          </div>
          <div className="collapse-content">
            <p>tabIndex={2} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Where can I find more resources?
          </div>
          <div className="collapse-content">
            <p>tabIndex={2} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    );
}