function Input({ inputType, inputName, placeholder, onChange, labelFor, label, inputClass, labelClass }) {
    return (
        <>
            <div>
                <label htmlFor={labelFor} className={`text-[14px] font-[500] text-[#E7E7E7] block ${labelClass}`}>
                    {label}
                </label>
                <input
                    type={inputType}
                    name={inputName}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`bg-[transparent] px-3 py-4 ${inputClass} `}
                />
            </div>
        </>
    )
}

export default Input
