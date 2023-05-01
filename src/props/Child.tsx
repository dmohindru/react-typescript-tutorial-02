interface ChildProps {
    color: string;
    onClick: () => void;
    childern?: React.ReactNode;
}

// Simple approach to create a React component
export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
        </div>
};

// Create a component as React function component
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, childern}) => {
    return (
        <div>
            {color}
            {childern}
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

