function FormField({ label, htmlFor, error, errorId, children }) {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>

      {children}

      {error && (
        <span className="form-error" id={errorId}>
          {error}
        </span>
      )}
    </div>
  );
}

export default FormField;