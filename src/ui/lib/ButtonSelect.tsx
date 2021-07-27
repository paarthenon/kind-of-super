export interface ButtonSelectProps<T> {
    options: {label: string, value: T}[];
    selected?: T;
    setSelected?: (item: T) => void;
}
export function ButtonSelect<T>({options, selected, setSelected}: ButtonSelectProps<T>) {
    return (
        <div>
            {options.map(opt => (
                <button
                    className={opt.value === selected ? 'btn-selected' : 'btn'}
                    onClick={() => setSelected?.(opt.value)}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}