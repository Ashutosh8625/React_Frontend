import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={` w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-blue-500 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };
  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  return (
    <section className="ref-props">
      <h2>Ref Props</h2>
      <p>
        Ref provide a way to access DOM nodes or React elements directly. Use "forwardRef" to pass refs to child components.
      </p>

      <div>
        <div>
          <h3>Try it out</h3>
          <CustomInput
            ref={inputRef}
            label="First input with ref"
            placeholder="Type something"
          />
          <CustomInput
            ref={secondInputRef}
            label="Second input with ref"
            placeholder="Type something else..."
          />
          <div className="flex-wrap gap-3 mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={focusInput}
            >
              Focus First Input
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={focusSecondInput}
            >
              Focus Second Input
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={getInputValue}
            >
              Get First Input Value
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={clearInput}
            >
              Clear First Input
            </button>
          </div>
        </div>
      </div>
      <div className="yellow-card">
        <h3>When to use refs:</h3>
        <ul>
          <li>Managing focus, text selection, or media playback</li>
          <li>Triggering imperative animations</li>
          <li>Integrating with third-party DOM libraries</li>
          <li>Accessing DOM measurements (scroll position, element size)</li>
        </ul>
      </div>
    </section>
  );
}

export default RefProps;
