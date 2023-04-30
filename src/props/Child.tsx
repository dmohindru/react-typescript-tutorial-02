interface ChildProps {
    color: string;
    onClick: () => void;
    childerns?: React.ReactNode;
}

// Simple approach to create a React component
export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>
};

// Create a component as React function component
export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
    return <div>{color}</div>
}

