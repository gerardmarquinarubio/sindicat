export default function Legal() {
  return (
    <div className="flex flex-col gap-1 p-2">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Terms & Conditions
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
          Data Privacy & GDPR
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
          Licenses & attributions
        </div>
        <div className="collapse-content">
          <p>tabIndex={2} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
}
