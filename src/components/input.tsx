const Input = (props: any) => {
  let { title, essential, placeholder, type, accept } = props;
  return (
    <label>
      {title && (
        <div>
          {title}
          {essential && <span className="text-red-500">*</span>}
        </div>
      )}
      <input
        className="border border-gray-300 rounded-lg w-full py-3 px-4"
        type={type}
        placeholder={placeholder}
        accept={accept}
        required={essential}
      />
    </label>
  );
};

export default Input;
