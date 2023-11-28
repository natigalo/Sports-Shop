export default function CategoryItem({ category, name, value, action, isChecked, color }) {
    const labelStyle = isChecked ? { backgroundColor: `#${color}` } : {};

    return (
        <div className="flex items-center">
            <label htmlFor={value} className={`flex items-center cursor-pointer w-full p-3 rounded-lg ${isChecked ? `bg-${color}` : 'bg-[#181A20]'}`} style={labelStyle}>
                <input
                    type="checkbox"
                    id={value}
                    value={name}
                    className={`h-5 w-5 text-blue-600 border border-gray-300 rounded-md mr-2 focus:ring-blue-500 bg-white`}
                    checked={isChecked}
                    onChange={action}
                />
                <span className="text-white text-lg">{name}</span>
            </label>
        </div>
    );
}
